


import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from './auth-pages/Signup'
import Left from './components/Left'
import Logout from './components/Logout'
import Right from './components/Right'
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import Login from './auth-pages/Login'
export default function App() {
  const [authUser] = useAuth();
  return (
    <div className='h-[90vh] flex align-middle mt-8 ml-8 mr-8 ' >
      {/* <Logout />
      <Left/>
      <Right/> */}
      {/* <Signup/> */}
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-full w-full">
                <Logout />
                <Left />
                <Right />
              </div>


            
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
      <Toaster />
     </div>
    
  )
}

