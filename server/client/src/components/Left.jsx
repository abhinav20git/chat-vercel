
// import Logout from "./Logout";
import Search from "./Search";
import Users from "./Users";

export default function Left() {
  return (
    <div className="  w-[30%] ">
        <div className="text-3xl font-bold ml-4 mt-1 text-white">Chats</div>
        <Search/>
        <hr className="w-[95%] mb-1"></hr>
        <Users/>
        
        
        
    </div>
  )
}
