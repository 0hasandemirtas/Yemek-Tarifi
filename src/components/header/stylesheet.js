import { createUseStyles } from "react-jss";

const useStyles=createUseStyles({
    container: {
        borderBottom:"2px solid green",
        backgroundColor:"#d6ffe1",
        flexDirection:"row",
        alignItems:"center",
        display:"flex",
        height:"100px",
        width:"100%",
        "@media screen and (max-width: 900px)": {
            justifyContent:"space-between"
        }
    },
    titleContentContainer:{
        justifyContent:"flex-end",
        textDecoration:"none",
        alignItems:"center",
        display:"flex",
        width:"100%",
        
        "@media screen and (max-width: 900px)": {
            display:"none"
        }
    },
    titleContent:{
        borderBottom: "2px solid green",
        textDecoration:"none",
        padding:"2px 10px",
        fontSize: "1.5rem",
        fontWeight:"bold",
        color:"#007a33",
        margin:"0 50px",
        "&:hover":{
            borderRight: "2px solid green",
            borderLeft: "2px solid green",
            borderRadius:"5px",
            cursor:"pointer",
        },
    },
    memberContainer:{
        justifyContent:"flex-end",
        alignItems:"center",
        marginRight:"50px",
        display:"flex",
        width:"55%",
        "@media screen and (max-width: 1100px)": {
            flexDirection:"column"
        },
        "@media screen and (max-width: 900px)": {
            display:"none"
        }
    },
    memberContent:{
        borderBottom:"1px solid green",
        textDecoration:"none",
        fontSize: "1.125rem",
        padding:"2px 10px",
        color:"#007a33",
        margin:"10px",
    },
    slash:{
        fontSize:"1.5 rem",
        fontWeight:"bold",
        color:"#007a33",
        margin:"10px",
        "@media screen and (max-width: 1100px)": {
            display:"none"
        }
    },
    hamburger:{
        display:"none",
        alignItems:"center",
        justifyContent:"flex-end"
,        "@media screen and (max-width: 900px)": {
            display:"flex",
            marginRight:"25px"
        }
    },
    logo:{
        marginLeft:"100px",
        borderRadius:"50%",
        width:"75px",
        height:"75px",

    }
})

export default useStyles;