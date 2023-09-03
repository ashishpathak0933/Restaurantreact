import React from 'react'

const MenuCard = ({menudata}) => {
    console.log(menudata)
  return (
    <div>
    <section  className='main-card--cointainer'>

    {menudata.map((curElem) => {
        return (
            <div>
            <div className="card-container"  key = {curElem.id}>
            <div className="card ">
            <div className="card-body">
            <span className="card-number card-circle subtle">{curElem.id}</span>
            <span className="card-author subtle"></span>
            <h2 className="card-title"> {curElem.name}</h2>
            <span className="card-description subtle">
            {curElem.description}
            </span>
            <div className="card-read">Read</div>
            </div>
             <img src={curElem.image} alt="images" className="card-media"></img> 
            <span className="card-tag subtle">Order Now</span>
            </div>
            </div>
            </div>
        )
    })}


 </section>
    </div>
  )
}

export default MenuCard
