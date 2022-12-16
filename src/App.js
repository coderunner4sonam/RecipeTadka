import "./App.css";
import Headers from "./component/Headers";
import { makeStyles } from "@material-ui/core";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Food from "./component/Food";
import FoodItemPage from "./component/FoodItemPage";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh",
    },
  }));
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Headers />
        <Routes>
          <Route path="/" element={<Food />} />
          <Route path="/IngredientDetails/:id" element={<FoodItemPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
