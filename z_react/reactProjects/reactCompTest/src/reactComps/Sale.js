import React from 'react';
import Item from "./Item"


  let forSale=[{
    name: "Board Game" ,
    price: 9,
    available_stock: 5,
  },{
    name: "Whiskey Set" ,
    price: 28,
    available_stock: 2,
  },{
    name: "Wood Whitling Kit" ,
    price: 15,
    available_stock: 7,
  },]



const ItemsForSale = () => {
  return (
    <div>
      {forSale.map((item) => {return (
          <Item name={item.name} price={item.price} available={item.available_stock}/>
            )
          }
        )
      }
    </div>
  )
}

export default ItemsForSale;