from fastapi import FastAPI, WebSocket
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

app = FastAPI()
clients = []


@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    clients.append(websocket)
    try:
        while True:
            data = await websocket.receive_text()
            for client in clients.copy():
                if client != websocket:
                    await client.send_text(f"{data}")
    except Exception as e:
        print(f"Error: {e}")
    finally: 
        clients.remove(websocket)

        