import{
    createUseStyles
} from "react-jss";
import {
    clickEvent 
} from "../../themes/helpers";
const useStyles=createUseStyles({
    formContainer:{
        backgroundColor:({
            colors
        }) => colors.backgroundColor,
        justifyContent:"space-evenly",
        boxShadow: "0 2px 5px black",
        border:"2px solid #2E8B57",
        flexDirection:"column",
        alignItems:"center",
        borderRadius:"20px",
        userSelect:"none",
        margin:"20px 0",
        display:"flex",
        height:"600px",
        width:"800px",
        "@media screen and (max-width: 1100px)": {
            width:"100%"
        }
    },
    formGroupInput:{
        backgroundColor:"#d6ffe1",
        borderRadius:"35px",
        color:"#606971",
        display:"block",
        fontSize:"16px",
        padding:"10px",
        height:"30px",
        width:"100%",
        "@media screen and (max-width: 600px)": {
            width:"90%",
        }
    },
    container:{
        backgroundColor:({
            colors
        })=>colors.primary,
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        display:"flex",
        height:"100vh",
        width:"100%",
    },
    formContentContainer:{
        lineHeight: "30px",
        fontWeight: "600",
        margin:" 30px",
        height: "30px",
        width:"400px",
        "@media screen and (max-width: 600px)": {
            width:"90%",
        }
    },
    formButton:{
        backgroundColor:({
            colors
        })=>colors.buttonColor,
        borderRadius:"10px",
        padding:"10px 25px",
        fontWeight:"bold",
        fontSize:"15px",
        color:({
            colors
        })=>colors.buttonTextColor,
        ...clickEvent(),
    },
    formGroup:{
        fontSize:"18px",
        display:"flex",
        color:({
            colors
        })=>colors.textColor,
    }
});
export default useStyles;
