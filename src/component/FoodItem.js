import React from 'react';
import {Link} from 'react-router-dom';
import { globalState } from '../Context';
import { useContext } from "react";

const foodItemStyle = {
  padding : '1rem',
  height: '22rem',
  width: '20rem',
  margin: '0 auto',
  borderRadius: '20px',
  boxSizing: 'border-box',
  background: '#ecf0f3',
  
}

const fooditemButtonStyle ={
  padding: '4px',
  width:'80px',
  cursor: 'pointer',
}

const h3Style = {
  fontWeight: 'bold',
  color: 'black',
}
const foodlabelstyle ={
    outline: "none",
    padding: "0.3rem 0.5rem",
    top: "2.5rem",
    left: "2.5rem",
    right: "2.5rem",
    fontWeight: "400",
    textShadow: "0 0.5rem 0.5rem #555",
    color: "black",

}
const foodimgstyle = {
    marginTop: '0',
    width: '95%',
    height:"80%"
}

export default function FoodItem({ele}) {
 
    let Label = ele?.recipe?.label;
    console.log(Label)
    let image = ele?.recipe?.image;
    // let url = ele?.recipe?.url;
    // let ingredients = ele?.recipe?.ingredients;
   
  return (
    <>
     <Link to={`/IngredientDetails/${Label}`}>
     <div style={foodItemStyle}>
       <img src={image} alt="food_image" style={foodimgstyle} />
       <div style={foodlabelstyle}>{Label}</div>
     </div>
   </Link>
   </>
  )
}


