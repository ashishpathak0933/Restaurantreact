import React  , {useState } from 'react'
import "./style.css"
import Menu from "./menudata" 
import MenuCard from "./MenuCard"

const Restaurant = () => {
    const [menuData , setMenuData]  = useState(Menu)
      
    console.log(menuData);
  return (
    <div>

    < MenuCard  menudata = {menuData}  / >
    </div>
  )
}

export default Restaurant
