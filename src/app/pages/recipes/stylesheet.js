import { createUseStyles } from "react-jss";
import { clickEvent } from "../../themes/helpers";
const useStyles=createUseStyles({
    container: {
        minHeight:"100vh",
        width:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        background:'url("./images/yemek-arkaplan-3.jpg")',
        backgroundRepeat:"repeat",
        userSelect:"none",
    },
    recipesGroup:{
        backgroundColor:({colors})=>colors.backgroundColor,
        borderRight:"2px solid green",
        justifyContent:"space-evenly",
        borderLeft:"2px solid green",
        borderRadius:"20px",
        margin:"50px 0",
        flexWrap:"wrap",
        height:"auto",
        display:"flex",
        width:"80%",
    },
    recipesContentContainer:{
        color:({colors})=>colors.titleColor,
        borderBottom:"2px solid black",
        ...clickEvent(),
        margin:"15px",
        height:"40%",
        width:"20%",
        "& img":{
            borderRadius:"15px",
            width:"90%",
        },
        "@media screen and (max-width: 1100px)": {
            width:"200px"
        }
    },
    titleGroup:{
        display:"flex",
        justifyContent:"space-evenly",
        "& > span":{
            fontSize:"15px",
        }
    },
    recipesContent:{
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        display:"flex",
        "& img":{
            height:"20px",
            color:"green",
            width:"20px",
        }
    },
    button:{
        width:"50px",
        height:"50px"
    }
})
export default useStyles;