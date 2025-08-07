import { useState, useEffect } from 'react'
import useWebsocket, { ReadyState } from 'react-use-websocket'
import { useChatStore } from '../store/use-chat-store'

export const useChatSocket = () => {
    const { setChat } = useChatStore()
    const socketURL = import.meta.env.VITE_WS_URL
    const [messageHistory, setMessageHistory] = useState([])

    const { sendMessage, lastMessage, readyState } = useWebsocket(socketURL)

    useEffect(() => {
        if (lastMessage !== null) {
            setMessageHistory((prev) => prev.concat(lastMessage))
            setChat({
                id: self.crypto.randomUUID(),
                text: lastMessage.data,
                isMine: false
            })
        }
    }, [lastMessage])

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState]

    return { sendMessage, lastMessage, readyState, connectionStatus, messageHistory }
}
