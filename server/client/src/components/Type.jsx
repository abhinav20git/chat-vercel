import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../context/useSendMessage";
export default function Type() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    console.log(e);
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-[100%]  h-[8vh] flex  rounded-lg ">
          <div className="w-[90%]   ">
            {" "}
            <input
              type="text"
              className="h-full rounded-lg w-[95%] ml-3 outline-none bg-slate-900 text-white p-2 font-sans text-xl"
              placeholder="Type here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button className=" m-auto ml-0 ">
            <IoSend size={36} color="white" />
          </button>
        </div>
      </form>
    </>
  );
}
