import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaSignOutAlt } from "react-icons/fa";

function Header() {
    const navigate = useNavigate();
  const { success, loading, user } = useContext()
  

  return (
      <div>
          <h3><FaSignOutAlt/> </h3>
      </div>
  )
}

export default Header