import{
    createUseStyles
} from "react-jss";
import {COLORS} from "../../values/colors/index.js";

const useStyles=createUseStyles({
    formContainer:{
        justifyContent:"space-evenly",
        border:"2px solid #2E8B57",
        backgroundColor:(COLORS.secondary),
        flexDirection:"column",
        alignItems:"center",
        borderRadius:"20px",
        display:"flex",
        height:"600px",
        margin:"20px 0",
        width:"800px",
        "@media screen and (max-width: 1100px)": {
            width:"100%"
        }
    },
    formGroupInput:{
        border:"3px inset #2E8B57",
        backgroundColor:"#d6ffe1",
        borderRadius:"2px",
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
        background:'url("./images/yemek-arkaplan-3.jpg")',
        backgroundRepeat:"repeat",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        display:"flex",
        width:"100%",
        height:"100vh"
    },
    formContentContainer:{
        lineHeight: "30px",
        fontWeight: "600",
        margin:" 30px",
        height: "30px",
        width:"400px",
        padding: "0",
        "@media screen and (max-width: 600px)": {
            width:"90%",
        }
    },
    formButton:{
        backgroundColor:"#2E8B57",
        borderRadius:"10px",
        padding:"10px 25px",
        fontWeight:"bold",
        fontSize:"15px",
        color:"white"
    },
    formGroup:{
        fontSize:"18px",
        display:"flex",
        color:"#556B2F"
    }
})
export default useStyles;