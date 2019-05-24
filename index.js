	const io = require("socket.io")(http);
	const app = require("express")();
    const http = require("http").Server(app);
    const port = process.env.PORT || 3000;

    app.get("/", function(req, res) {
        res.sendFile(__dirname + "/index.html");
    });

    http.listen(port, function() {
        console.log("Listening on *:" + port);
    });

io.on("connection", function(socket) {

        socket.on("user_join", function(data) {
            this.username = data;
            
            socket.broadcast.emit("user_leave", this.username);
    	});
    });