import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useGetAllUsers from "../context/useGetAllUsers";
import useConversation from "../statemanage/useConversation";
import toast from "react-hot-toast";
export default function Search() {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();

  console.log(allUsers);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    const conversation = allUsers.find((user) =>
      user.name?.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };
  return (
    <div className="  mt-2 mb-1">
      <form onSubmit={handleSubmit} className="h-[30%] flex  ">
        <div className="w-[85%] flex ">
          {" "}
          <input
            type="text"
            className="pl-2 h-14 grow outline-none bg-transparent rounded-lg text-white text-xl font-sans ml-3 hover:border"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          
        </div>
        <div className="m-auto text-center ">
            <IoSearchSharp
              className="hover:bg-slate-500 rounded-full  h-11 p-1"
              color="white"
              size={36}
            />
          </div>
      </form>
    </div>
  );
}
