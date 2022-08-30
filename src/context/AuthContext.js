import React,{createContext, useState} from 'react'


const AuthContext = createContext();
AuthProvider = AuthContext.Provider;

function AuthContextProvider() {

    const [success, setSuccess] = useState("false");
    const [error, setError] = useState("null");
    const [user, setUser] = useState("null")

  // signup function
  const authRegister = async (username, email, password) =>{
    await fetch(url, {
    method:"POST"
  })
}
  return (
    <div>
      
    </div>
  )
}

export default AuthContextProvider
