import React from 'react'
import "./servicesCard.css"

const ServicesCard = ({item}) => {
    console.log(item,"............");
    const { title, desc, imgUrl}=item

  return (
    <div className='services__item'>
        <div className="services__img">
            <img src={imgUrl} alt="" />
        </div>
        <h5>{title}</h5>
        <p>{desc}</p>
      
    </div>
  )
}

export default ServicesCard
