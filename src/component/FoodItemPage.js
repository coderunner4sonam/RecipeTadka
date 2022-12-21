import { LinearProgress } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { globalState } from "../Context";

const FoodItemPage = () => {

  const { id } = useParams(); 
  console.log(id) //cocktail samosa 
  const { recipe } = useContext(globalState);
  const [flag,setFlag] =useState(false);

  let showdata = recipe.filter((element) => {
    console.log(element?.recipe?.label.toString()); //10 string 
    return element?.recipe?.label.toString() === id; 
  });
  console.log(showdata);
  
  // const useStyles = makeStyles((theme) => ({
  //   container: {
  //     display: "flex",
  //     [theme.breakpoints.down("md")]: {
  //       flexDirection: "column",
  //       alignItems: "center",
  //     },
  //   },
  // }));


  useEffect(() => {
    setTimeout(() => {
      setFlag(true);
    }, 2000);
  });

  // const classes = useStyles();

if(!flag) return  <LinearProgress style={{ backgroundColor: "gold" }} />;
  console.log(showdata[0].recipe.url);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ borderRight: "1px solid white" }}>
          <br />
          <img
            src={showdata[0].recipe.image}
            alt="foodimage"
            height="200"
            style={{
              marginBottom: 20,
              height: "35%",
              width: "90%",
              padding: "10px",
              border: "1px solid white",
              marginRight: "80px",
            }}
          />
          <h4>{showdata[0].recipe.label}</h4>
          <a
            href={showdata[0].recipe.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="anchor">Recipe</div>   
          </a>
        </div>
        <div>
          {showdata[0].recipe.ingredientLines.map((element) => {
            return (
              <>
                <h4>{element}</h4>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FoodItemPage;
