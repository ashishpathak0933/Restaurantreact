import React  , {useState } from 'react'
import "./style.css"
import Menu from "./menudata" 
import MenuCard from "./MenuCard"
import Navbar from "./navbar"



 const uniqueList = [ ...new Set (Menu.map((curElem) => {

  return curElem.category;
 }))
];
const Restaurant = () => {
    const [menuData , setMenuData]  = useState(Menu)


    const filterItem = (category)=> {
      const updatedList = Menu.filter((curElem)=> {

      return curElem.category === category;

      });

      setMenuData(updatedList);

    };
      
    console.log(menuData);
  return (
    <div>

    < Navbar filterItem = {filterItem}/>

    < MenuCard  menudata = {menuData}  / >
    </div>
  )
}



export default Restaurant;
