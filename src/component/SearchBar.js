import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Container,
  createTheme,
  ThemeProvider,
  TextField,
} from "@material-ui/core";
import { globalState } from "../Context";

export default function SearchBar() {
  const { text, setText } = useContext(globalState);
  const [search,setSearch]=useState()
  
  const useStyles = makeStyles({
    row: {
      backgroundColor: "#16171a",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#131111",
      },
      fontFamily: "Montserrat",
    },
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "gold",
      },
    },
  });

  const classes = useStyles();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  const handlechange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    
  };
  
  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <br />
        <br />
        <TextField
          label="Search For Food Recipe.."
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={handlechange}
        />
        <button onClick={()=>setText(text)}>Search</button>
      </Container>
    </ThemeProvider>
  );
}

// import React from 'react'
// import axios from "axios";
// import Reciepe from "./component/Reciepe";
// import Alert from "./component/Alert";

// import { useContext, useState } from "react";
// import { globalstate } from "./datacontext";

// function Header() {

//     let [query, setQuery] = useState("");
//     let { recipes, setRecipe } = useContext(globalstate);
//     let [alert, setAlert] = useState("");
  
//     const APP_ID = "4daa0b40";
//     const APP_KEY = "71da2f2c75bc3e6fb58a849c78afe20c";
  
//     const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
            
//     let getData = async () => {
//       if (query !== "") {
//         let result = await axios.get(url);
//         let dt = await result.data;
//         console.log(dt);
//         if (!dt.more) {
//           return setAlert("No Food with such name");
//         }
//         // console.log(dt.hits); // different types
//         setRecipe(dt.hits);
//         setAlert("");
//         setQuery("");

//       } else {
//         setAlert("Please Fill Form");
//       }
//     };
//     console.log(query)
//     // console.log(recipes);

//     const onsubmit = (e) => {
//       e.preventDefault();
//       getData();
//     };
  
//     const onchange = (e) => {
//       e.preventDefault();
//       setQuery(e.target.value);

//     };
  
//   return (
//     <div>
//         <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
//             <h1 onClick={getData}>Find a Recipe </h1>

//             <form className="search-form" onSubmit={onsubmit}>
//               {alert !== "" && <Alert alert={alert} />}
//               <input type={"text"} placeholder="Search Food" autoComplete="off"  onChange={onchange} value={query}  />
//               <input type="submit" value="search" />
//             </form>

//             <div className="recipes">
//               {recipes !== [] &&
//                 recipes.map((recipe) => <Reciepe key={uuid4()} rcp={recipe} />)}  
//             </div>
//             <h4>A Recipe Has No Soul, WE BRING SOUL TO THE RECIPE.</h4>
           
//         </div>
//         <div>
//             <h5>Instead of going out to dinner, buy good food. Cooking at home shows such affection. In a bad economy, it's more important to make yourself feel good.</h5>
         
//         </div>
//     </div>
//   )
// }

// export default Header
