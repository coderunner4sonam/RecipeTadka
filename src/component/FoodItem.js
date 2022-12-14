import React from 'react';
import {Link} from 'react-router-dom';

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
    padding : '1rem',

}
const foodimgstyle = {
    marginTop: '0',
    width: '95%',
    height:"80%"
}

export default function FoodItem({ele}) {
    let label = ele?.recipe?.label;
    // console.log(label)
    let image = ele?.recipe?.image;
    // let url = ele?.recipe?.url;
    let ingredients = ele?.recipe?.ingredients;
    // console.log(rcp)
    // setArray(ingredients)  
    // console.log(array , "usearray")
  
  return (
    <Link to={`/coins/${ele.id}`}>
      <div style={foodItemStyle}>
        <img src={image} alt="food" style={foodimgstyle} />
        <div style={foodlabelstyle}>{label}</div>
      </div>
    </Link>
  )
}

