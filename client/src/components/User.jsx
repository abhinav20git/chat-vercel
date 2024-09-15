import React from "react";
import useConversation from "../statemanage/useConversation.js";
import { useSocketContext } from "../context/SocketContext.jsx";

export default function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { socket, onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);
  return (
    <div
    // className={` ${
    //   isSelected ? "bg-slate-700" : ""
    // }`}
    onClick={() => setSelectedConversation(user)}
  >
    <div className={` ${
      isSelected ? "bg-slate-700" : ""
    } flex  h-[55px]  mt-3 ml-4 mr-4 p-0.5 rounded-lg cursor-pointer hover:bg-slate-600`}>
      {/* <div className="avatar ">
        <div className="w-12 rounded-full ">
            <img src="https://tse2.mm.bing.net/th?id=OIP.e_soWdmT3Dz_a8AfFw4yBQHaHa&pid=Api&P=0&h=180" />
        </div>
        
   
    </div> */}
      <div className={`avatar ${isOnline ?  "Online" :""} p-1`}>
        <div className="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="ml-2">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        
      </div>
    </div>
    </div>
  );
}
