import React  , {useState } from 'react'
import "./style.css"

import Menu from "./menuApi.js" ;

const Restaurant = () => {


    const [menuData , setMenuData]  = useState(Menu)

    console.log(menuData);
  return (
    <div>


    <div className="card-container">
    <div className="card ">
    <div className="card-body">
    <span className="card-number card-circle subtle">1</span>
    <span className="card-author subtle">Breakfast</span>
    <h2 className="card-title"> Maggi </h2>
    <span className="card-description subtle">
    I love Maggi realy oo yues Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Blanditiis, at consectetur totam voluptatibus
    quibusdam iusto. Accusamus quas, soluta ipsam autem eius
    necessitatibus fugiat in
    </span>
    <div className="card-read">Read</div>
    </div>
    {/* <img src={image} alt="images" className="card-media"></img> */}
    <span className="card-tag_subtle">Order Now</span>
    </div>
    </div>


    </div>
  )
}

export default Restaurant
