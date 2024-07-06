import { createUseStyles } from "react-jss";
import { clickEvent } from "../../themes/helpers";

const useStyles=createUseStyles({
    contentContainerVisible:{
        justifyContent:"space-between",
        alignItems:"center",
        display:"flex",
        "@media screen and (max-width: 900px)": {
            justifyContent:"space-evenly",
            backgroundColor:"lightgray",
            flexDirection:"column",
            transition:"all .5s",
            alignItems:"center",
            position:"absolute",
            display:"flex",
            opacity:"0.9",
            height:"80vh",
            width:"350px",
            top:"100px",
            right:"0px",
            zIndex:"2",
        },
    },
    contentContainerHidden:{
        justifyContent:"space-between",
        alignItems:"center",
        display:"flex",
        "@media screen and (max-width: 900px)": {
            backgroundColor:"lightgray",
            justifyContent:"center",
            flexDirection:"column",
            transition:"all .5s",
            alignItems:"center",
            position:"fixed",
            display:"flex",
            right:"-350px",
            width:"350px",
            height:"80vh",
            top:"100px",
            zIndex:"2",
        },
    },
    icon:{
        justifyContent:"center",
        alignItems:"center",
        ...clickEvent(),
        display:"flex",
        margin:"10px",
        height:"auto",
        width:"40px",
        "@media screen and (max-width: 900px)": {
            
        },
        "@media screen and (max-width: 1100px)": {
            height:"25px",
            width:"25px",
        },
        "& svg":{
            height:"25px",
            width:"25px",
        }
    },
    container: {
        backgroundColor:({colors})=> colors.backgroundColor,
        borderBottom:"2px solid green",
        justifyContent:"space-between",
        flexDirection:"row",
        alignItems:"center",
        userSelect:"none",
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
            flexDirection:"column",
            gap:"20px",
        },
        "& div:nth-child(3)": {
            display:"none"
        }
    },
    titleContentContainerHidden:{
        justifyContent:"flex-end",
        textDecoration:"none",
        alignItems:"center",
        display:"flex",
        width:"100%",
        "@media screen and (max-width: 900px)": {
            justifyContent:"center",
            flexDirection:"column",
            transition:"all .5s",
            alignItems:"center",
            background:"gray",
            position:"fixed",
            display:"flex",
            right:"-350px",
            width:"350px",
            height:"80vh",
            top:"100px",
            zIndex:"2",
        },
        "& div:nth-child(3)": {
            display:"none"
        }
    },
    titleContent:{
        color:({colors})=>colors.titleColor,
        borderBottom: "2px solid green",
        textDecoration:"none",
        padding:"2px 10px",
        fontSize: "1.5rem",
        fontWeight:"bold",
        margin:"0 50px",
        "&:hover":{
            borderRight: "2px solid green",
            borderLeft: "2px solid green",
            borderRadius:"5px",
            cursor:"pointer",
        },
        "@media screen and (max-width: 900px)": {
            border:"1px solid black",
            padding:"5px 125px",
            width:"175px"
        }
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
            flexDirection:"row"
        }
    },
    memberContent:{
        borderBottom:"1px solid green",
        textDecoration:"none",
        fontSize: "1.125rem",
        padding:"2px 10px",
        color:({colors})=>colors.titleColor,
        margin:"10px",
    },
    slash:{
        fontSize:"1.5 rem",
        fontWeight:"bold",
        color:"#007a33",
        margin:"10px",
        
    },
    hamburger:{
        justifyContent:"flex-end",
        alignItems:"center",
        display:"none",
        "@media screen and (max-width: 900px)": {
            marginRight:"25px",
            display:"flex",
        }
    },
    logo:{
        marginLeft:"100px",
        borderRadius:"50%",
        height:"75px",
        width:"75px",
        "@media screen and (max-width: 900px)": {
            marginLeft:"25px"
        }
    },
    iconGroup:{
        display:"flex",
        "@media screen and (max-width: 1100px)": {
            flexDirection:"column",
            marginRight:"50px",
            margin:"0",
        },
        "@media screen and (max-width: 900px)": {
            flexDirection:"row"
        }
    },
    logoContainer:{
        "@media screen and (max-widht: 900px)":{
            width:"50%"
        }
    },
});

export default useStyles;
