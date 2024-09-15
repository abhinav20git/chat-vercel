import { useEffect } from "react";
import ChatUser from "./ChatUser";
import Messages from "./Messages";
import Type from "./Type";
import useConversation from "../statemanage/useConversation";
import { useAuth } from "../context/AuthProvider";
import { CiMenuFries } from "react-icons/ci";
export default function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="w-[70%] ">
      {/* <div>
       <ChatUser/>
        
      </div>

      <Messages />
      <Type /> */}
      <div>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <ChatUser />
            <div
              className=" flex-1 overflow-y-auto"
              style={{ maxHeight: "calc(72vh)" }}
            >
              <Messages />
            </div>
            <Type />
          </>
        )}
      </div>
    </div>
  );
}

const NoChatSelected = () => {
  const [authUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5"
        >
          <CiMenuFries className="text-white text-xl" />
        </label>
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-center">
            Welcome{" "}
            <span className="font-semibold text-xl">{authUser.user.name}</span>
            <br />
            No chat selected, please start conversation by selecting anyone to
            your contacts
          </h1>
        </div>
      </div>
    </>
  );
};
