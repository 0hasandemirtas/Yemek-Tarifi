import { createUseStyles } from "react-jss";

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
        height:"100vh",
        marginTop:"100px",
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
        borderRadius:"15px",
        margin:"15px",
        //border:"2px solid green",
        color:"#007a33",
        opacity:"0.8",
        "& img":{
            width:"90%",
            borderRadius:"15px"
        },
        "&:hover": {
            cursor: "pointer",
            opacity:"1",
            transitionDelay:"1s",
            transition:"width 1s"
        },
        "& > h3":{
            "&hover":{
                borderBottom:"1px solid green"
            }
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