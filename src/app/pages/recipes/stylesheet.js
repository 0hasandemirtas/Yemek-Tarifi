import { createUseStyles } from "react-jss";
import { clickEvent } from "../../themes/helpers";
const useStyles=createUseStyles({
    container: {
        width:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        background:'url("./images/yemek-arkaplan-3.jpg")',
        backgroundRepeat:"repeat"
    },
    recipesGroup:{
        width:"80%",
        height:"auto",
        margin:"50px 0",
        borderRight:"2px solid green",
        borderLeft:"2px solid green",
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-evenly",
        backgroundColor:"#d6ffe1",
        borderRadius:"20px"
    },
    recipesContentContainer:{
        width:"20%",
        height:"40%",
        margin:"15px",
        borderBottom:"2px solid black",
        color:"#007a33",
        ...clickEvent(),
        "& img":{
            width:"90%",
            borderRadius:"15px"
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
            "&:before": {
                animation: "broadcastAnim 1.5s ease-in-out infinite",
            position: "absolute",
            borderRadius: "50%",
            background: "black",
            content: "''"
            }
        }
    },
    recipesContent:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        "& img":{
            width:"20px",
            height:"20px",
            color:"green"
        }
    }
})
export default useStyles;