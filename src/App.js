import "./App.css";
import Headers from "./component/Headers";
import { makeStyles } from "@material-ui/core";
import Crousal from "./component/Crousal"

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
    <div className={classes.App}>
      <Headers />
  {/* <Crousal/> */}
    </div>
  );
}

export default App;





