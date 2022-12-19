import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Crousal = () => {
  const [recipe, setRecipe] = useState([]);

  const APP_ID = "4daa0b40";
  const APP_KEY = "71da2f2c75bc3e6fb58a849c78afe20c";

  const url = `https://api.edamam.com/search?q=burger&app_id=${APP_ID}&app_key=${APP_KEY}`;

  let getData = async () => {
    let result = await axios.get(url);
    let dt = await result.data;

    console.log(dt.hits);
    // console.log(dt.hits); // different types
    setRecipe(dt.hits);
  };
  console.log(recipe);

  useEffect(() => {
    getData();
  }, []);

  const useStyles = makeStyles((theme) => ({
    carousel: {
      height: "50%",
      display: "flex",
      alignItems: "center",
    },
    carouselItem: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      cursor: "pointer",
      textTransform: "uppercase",
      color: "white",
    },
  }));

  const classes = useStyles();

  const handleDragStart = (e) => e.preventDefault();

  const items = recipe.map((food) => {
    return (
      <div>
        <div>
          <img
            onDragStart={handleDragStart}
            role="presentation"
            src={food?.recipe?.image}
            alt={`img`}
            height="150"
            width="150"
            style={{ marginBottom: 10 }}
          />
          <small>{food?.recipe?.label.split(" ", 3).join(" ")}</small>
        </div>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 1,
    },
    300: {
      items: 1,
    },
    512: {
      items: 8,
    },
  };

  return (
    <AliceCarousel
      mouseTracking
      infinite
      autoPlayInterval={1000}
      animationDuration={1500}
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
    />
  );
};

export default Crousal;
