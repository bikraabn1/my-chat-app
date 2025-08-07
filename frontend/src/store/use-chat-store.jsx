import { create } from 'zustand'

export const useChatStore = create((set) => ({
    //state
    order: 0,
    chats: [],
    //actions
    setChat: (newChat) => set((state) => ({chats : [...state.chats, {...newChat, order : state.order++}]}))

}))
