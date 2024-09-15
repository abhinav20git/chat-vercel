import axios from "axios";
import { RiLogoutBoxLine } from "react-icons/ri";
import Cookies from "js-cookie";
import { useState } from "react";
import toast from "react-hot-toast";
export default function Logout() {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("ChatApp");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logged out successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in Logout", error);
      toast.error("Error in logging out");
    }
  };
  return (
   <div className="flex flex-col justify-end">
     <div >
       <button ><RiLogoutBoxLine  onClick={handleLogout} className="hover:bg-slate-500  rounded-lg h-[50px]" color='white' size={36}/></button> 
    </div>
   </div>
  )
}
