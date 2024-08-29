import {
    createUseStyles 
} from "react-jss";

const useStyles=createUseStyles({
    container:{
        marginBottom:"-4px",
        height:"100%",
        width:"100%",
        padding:"0",
    },
    backgroundImage:{
        position:"relative",
        height:"800px",
        width:"100%",
        zIndex:"1",
    },
    title:{
        position:"fixed",
        height:"100%",
        width:"100%",
        top:"100px",
        zIndex:"2",
    },
    titleContent:{
        textShadow:"1px 1px gray",
        justifyContent:"center",
        alignItems:"center",
        fontWeight:"bold",
        fontSize:"4rem",
        display:"flex",
        color:"white",
        height:"80%",
        width:"100%",
    }
});

export default useStyles;