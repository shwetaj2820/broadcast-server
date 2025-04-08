const socket = new WebSocket("ws://localhost:8080")

socket.addEventListener("message", (event) => {
    console.log("Message from server: ", event.data);
});

// func input_function()