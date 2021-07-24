import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  PetIcon: {
    fontSize: "20%",
  },
  CartIcon: {
    fontSize: "15%",
  },
  divider: {
    backgroundColor: "rgb(221, 219,219)",
    margin: "0px 40px",
  },
  cartCompIcon: {
    backgroundColor: "#53afbd",
    borderRadius: "15px",
    fontSize: "1.6rem",
    color: "white",
    "@media screen and (max-width: 567px)": {
      fontSize: "1.1rem",
    },
  },
  deleteIcon: {
    backgroundColor: "#dfdbdb",
    color: "#9e9b9b",
    boder: "1px solid #9e9b9b",
    borderRadius: "15px",
    fontSize: "1.6rem",
    "@media screen and (max-width: 567px)": {
      fontSize: "1.2rem",
    },
  },
});

export default useStyles;
