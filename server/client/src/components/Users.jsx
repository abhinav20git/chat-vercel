import useGetAllUsers from "../context/useGetAllUsers";
import User from "./User";


export default function Users() {
  const [allUsers, loading] = useGetAllUsers();
  
  return (
   <div className="flex-abhi overflow-y-auto " style={{maxHeight:"calc(71vh)"}}>
    {allUsers.map((user, index) => {
          return <User key={index} user={user} />
})}
   </div>
  )
}
