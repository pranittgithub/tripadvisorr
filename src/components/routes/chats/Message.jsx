import React, { useContext, useEffect, useRef } from "react";
import { LogInContext } from "../../../context/LogInContext/Login";
import { ChatContext } from "../../../Context/ChatContext";

const Message = ({ message }) => {
  const { user } = useContext(LogInContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === user.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === user.uid
              ? user.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>{new Date(message.date?.seconds * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
