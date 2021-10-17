import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "300px",
    display: "flex",
    gap: '2%',
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "flex-start",
    backgroundColor: "#fff4ec",
    padding: "50px 0 0",
  },
  blocks: {
    flexBasis: '13%',
    borderRight: "1px solid #000",
    display: "flex",
    flexFlow: "column",
    minHeight: '90px',
    '& > *': {
      fontSize: '14px',
      color: '#333',
      width: '100%',
      margin: '0 auto 0'
    }
  },
  headers: {
    textTransform: "uppercase",
    color: "#333",
    fontSize: "18px",
    fontWeight: 400,
    margin: '0 0 15px'
  },

  updated:{
    border: 'none'
  },
  input:{
    width: '100%',
    height: '35px',
    backgroundColor: "#fff4ec",
    outline: '1px solid #000',
    border: 'none',
    margin: '0 0 10px',
    padding: ' 0 15px 0'
  },button:{
    all: 'unset',
    width: '100%',
    height: '35px',
    backgroundColor: "#000",
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all ease-in .3s',
    cursor: 'pointer',
    '&:hover':{
      backgroundColor: '#fff',
      color: '#000'
    }

  }
  
}));
