import { Button, SubHeading } from "components";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");
export default function Index() {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [userName, setUserName] = useState("");

  const handleConect = () => {
    socket.emit("join_room", room);
  };

  const sendMessage = () => {
    const messageData = {
      room: room,
      author: userName,
      message: message,
    };

    socket.emit("send_message", messageData);
  };

  useEffect(() => {
    socket.on("recieve_message", (data) => {
      console.log("recieved data", data);
    });
  }, [socket]);
  return (
    <div>
      <SubHeading>
        <input className="form-control" placeholder="Room" onChange={(e) => setRoom(e.target.value)} />
        <Button onClick={handleConect}>Connect</Button>
        <input placeholder="User name" className="form-control" onChange={(e) => setUserName(e.target.value)} />
        <input placeholder="Message" className="form-control" onChange={(e) => setMessage(e.target.value)} />
        <Button onClick={sendMessage}>Send message</Button>
      </SubHeading>
    </div>
  );
}
