import { 
    createUseStyles 
} from "react-jss";

const useStyles=createUseStyles({
    formContainer:{
        justifyContent:"space-evenly",
        border:"2px solid #2E8B57",
        backgroundColor:"#d6ffe1",
        flexDirection:"column",
        alignItems:"center",
        borderRadius:"20px",
        display:"flex",
        height:"800px",
        marginTop:"20px",
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
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        display:"flex",
        width:"100%",
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
    formGroupRadio:{
        justifyContent:"center",
        flexDirection:"column",
        fontWeight:"600",
        fontSize:"20px",
        color:"#2E8B57",
        display:"flex",
        "& div > div":{
            "@media screen and (max-width: 600px)": {
                display:"flex",
                flexDirection:"row",
            }
        },
    },
    formButton:{
        backgroundColor:"#2E8B57",
        borderRadius:"10px",
        padding:"10px 25px",
        fontWeight:"bold",
        fontSize:"15px",
        color:"white"
    },
    title:{
        border:"3px solid black",
        padding:"10px 20px",
        borderRadius:"10px",
        fontSize:"40px",
        color:"black"
    },
    formGroup:{
        fontSize:"18px",
        display:"flex",
        color:"#556B2F"
    },
    formInput:{
        margin:"0 15px",
        color:"#2E8B57",
    },
    formGroupRadioLabel:{
        color:"#556B2F"
    },
})

export default useStyles;