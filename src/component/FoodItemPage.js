import { LinearProgress, makeStyles, Typography } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { globalState } from "../Context";

const FoodItemPage = () => {
  const { id } = useParams();
  const { recipe, setRecipe } = useContext(globalState);
  const [flag, setFlag] = useState(false);

  let showdata = recipe.filter((element) => {
    return element?.recipe?.label.toString() === id;
  });

  let data = [...showdata];
  console.log(data);

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",  
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
   
   
  }));
  useEffect(() => {
    setTimeout(() => {
      setFlag(false);
    });
  }, 500);
  const classes = useStyles();

  if (flag) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <>
      <div style={{display:"flex",justifyContent:"space-around"}}>
        <div style={{ borderRight:"1px solid white",}}>
          <br/>
          <img
            src={data[0].recipe.image}
            alt="foodimage"
            height="200"
            style={{ marginBottom: 20, height: "40%", width: "90%" ,padding:"10px",border:"1px solid white",marginRight:"80px"}}
          />
         
         </div>
         <div>
        {data[0].recipe.ingredientLines.map((element) => {
        return (
          // <div
          //   style={{
          //     height: "80",
          //     width: "50%",
          //     // display: "flex",
          //     // flexDirection: "column",
          //   }}
          // >
           <h4>{element}</h4> 
          // </div>
        );
      })}
      </div>
      </div>

      
    </>
  );
};

export default FoodItemPage;