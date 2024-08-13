import { 
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
        height:"800px",
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
    formGroupRadio:{
        justifyContent:"center",
        flexDirection:"column",
        fontWeight:"600",
        fontSize:"20px",
        color:"#2E8B57",
        display:"flex",
        "& div > div":{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            "@media screen and (max-width: 600px)": {
                flexDirection:"row",
            }
        },
        "& div > div > span":{
            width:"70px"
        }
    },
    formButton:{
        backgroundColor:({
            colors
        }) => colors.buttonColor,
        color:({
            colors
        })=>colors.buttonTextColor,
        borderRadius:"10px",
        padding:"10px 25px",
        fontWeight:"bold",
        fontSize:"15px",
        marginTop:"40px"
    },
    title:{
        border:"3px solid black",
        padding:"10px 20px",
        borderRadius:"10px",
        fontSize:"40px",
        color:"black"
    },
    formGroup:{
        color:({
            colors
        })=>colors.textColor,
        fontSize:"18px",
        display:"flex",
        marginLeft:"5px"
    },
    formInput:{
        color:({
            colors
        })=>colors.textColor,
        margin:"0 15px",
    },
    ınputError:{
        color:"rgb(188,73,73)",
        fontSize:"15px"
    }
});

export default useStyles;
