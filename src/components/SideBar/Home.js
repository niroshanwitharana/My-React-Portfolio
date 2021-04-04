import React from 'react'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from "./context"

const HomeIcon = () => {
  const {openSidebar} = useGlobalContext();
  
  return <main>
    <button className="sidebar-toggle" onClick={openSidebar}>
      <FaBars></FaBars>
    </button>   
  </main>
}

export default HomeIcon