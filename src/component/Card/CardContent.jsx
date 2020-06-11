import React, { Component } from 'react';
import ItemCard from './ItemCard'
import Datas from '../../samples/DataCard.json'

const CardContent = () => {
    return (
       <main class="main-content">
      <div className="container-fluid photos">
      <div className="row align-items-stretch">
                     {Datas.map((data) => {
                        return <ItemCard
                            img={data.img}
                            alt={data.alt}
                            title={data.title}
                            description={data.description}   
                            adress={data.adress} 
                            size={data.size}                        
                            />
                    })}
     
      </div>
    </div>
    </main>
    )
}
export default CardContent