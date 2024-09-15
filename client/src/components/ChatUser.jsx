import React from 'react'
import useConversation from "../statemanage/useConversation.js";
import { useSocketContext } from "../context/SocketContext.jsx";
// import { CiMenuFries } from "react-icons/ci";
export default function ChatUser() {
    const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };
  return (
    <div>
         <div className="w-[100%] flex  p-2 rounded-lg cursor-pointer hover:bg-slate-600 duration-300 ">
          <div className="avatar online">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="ml-2">
            <h3 className="text-xl text-white">{selectedConversation.name}</h3>
            <span className="text-sm">{getOnlineUsersStatus(selectedConversation._id)}</span>
          </div>
        </div>
    </div>
  )
}
