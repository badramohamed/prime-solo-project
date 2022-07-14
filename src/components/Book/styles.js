import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((desings) => ({
  container: {
    backgroundColor: desings.palette.background.paper,
    Padding: desings.spacing(6, 0, 5),
  },
  buttons: {
    marginTop: "40px",
  },
  cardGrid: {
    padding: "10px ",
    marginBlock: "50px",
    marginRight: "100px",
  },
  card:{
    padding:"50px",
    width: "30px"
  }
}));

export default styles;
