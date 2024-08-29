import {
    createUseStyles 
} from "react-jss";
import {
    clickEvent 
} from "../../themes/helpers";

const useStyles = createUseStyles({
    contentContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        display: "flex",
        width:"70%",
        "@media screen and (max-width: 900px)": {
            justifyContent: "space-evenly",
            backgroundColor: "lightgray",
            flexDirection: "column",
            transition: "all .5s",
            alignItems: "center",
            position: "fixed",
            display: "flex",
            opacity: "0.9",
            height: "80vh",
            width: "350px",
            top: "100px",
            right: ({
                isOpen 
            }) => (isOpen ? "0px" : "-350px"),
            zIndex: "2",
        },
    },
    icon: {
        justifyContent: "center",
        alignItems: "center",
        ...clickEvent(),
        display: "flex",
        margin: "10px",
        height: "auto",
        width: "40px",
        "@media screen and (max-width: 1100px)": {
            height: "25px",
            width: "25px",
        },
        "& svg": {
            height: "25px",
            width: "25px",
        },
    },
    container: {
        backgroundColor: ({
            colors 
        }) => colors.primary,
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center",
        userSelect: "none",
        display: "flex",
        height: "100px",
        width: "100%",
        "@media screen and (max-width: 900px)": {
            justifyContent: "space-between",
        },
    },
    titleContentContainer: {
        justifyContent: "flex-end",
        justifyContent: "center",
        textDecoration: "none",
        alignItems: "center",
        display: "flex",
        width: "90%",
        "@media screen and (max-width: 900px)": {
            flexDirection: "column",
            gap:"30px",
            "& >div": {
                justifyContent: "center",
                alignItems: "center",
                width: "150px",
            },
        },
    },
    titleContent: {
        color:({
            colors
        })=>colors.mainTitleColor,
        textDecoration: "none",
        textShadow:"1px 1px gray",
        padding: "2px 10px",
        fontSize: "1.75rem",
        fontWeight: "bold",
        margin: "0 50px",
        "&:hover": {
            borderRadius: "5px",
            cursor: "pointer",
        },
        "@media screen and (max-width: 1300px)": {
            margin:"0 25px"
        },
        "@media screen and (max-width: 900px)": {
            height: "100%",
            width: "100%",
            padding: "0",
            margin: "0",
        },
    },
    memberContainer: {
        justifyContent: "flex-end",
        alignItems: "center",
        display: "flex",
        width: "55%",
        minWidth:"125px",
        "@media screen and (max-width: 1100px)": {
            flexDirection: "column",
        },
        "@media screen and (max-width: 900px)": {
            flexDirection: "row",
            margin: "0",
        },
        "& span": {
            fontSize: "1.5 rem",
            fontWeight: "bold",
            color:({
                colors
            })=>colors.mainTitleColor,
            margin: "10px",
            "@media screen and (max-width: 1100px)": {
                display: "none",
            },
        },
    },
    memberContent: {
        textDecoration: "none",
        fontSize: "1.125rem",
        padding: "2px 10px",
        color: ({
            colors 
        }) => colors.mainTitleColor,
        margin: "10px",
    },
    hamburger: {
        justifyContent: "flex-end",
        alignItems: "center",
        display: "none",
        "@media screen and (max-width: 900px)": {
            marginRight: "25px",
            display: "flex",
        },
    },
    logo: {
        borderRadius: "50%",
        height: "75px",
        width: "75px",
        "@media screen and (max-width: 900px)": {
            marginLeft: "25px",
        },
    },
    iconGroup: {
        display: "flex",
        "@media screen and (max-width: 1100px)": {
            flexDirection: "column",
            margin: "0",
        },
        "@media screen and (max-width: 900px)": {
            flexDirection: "row",
            margin: "0",
        },
    },
    logoContainer: {
        "@media screen and (max-widht: 900px)": {
            width: "50%",
        },
    },
    line: {
        justifyContent:"center",
        position:"absolute",
        alignItems:"center",
        display:"flex",
        width: "100%",
        top:"98px",
        "& div":{
            backgroundColor:"#318A5E",
            height:"2px",
            width:"90%",
        }
    },
    profile:{
        justifyContent:"space-evenly",
        alignItems:"center",
        display:"flex",
        width:"15%",
        "& svg":{
            color:"#318A5E",
            height:"auto",
            width:"35px",
        },
        "& div label":{
            color: ({
                colors 
            }) => colors.mainTitleColor,
            fontWeight:"bold",
            fontSize:"1.5rem",
        },
        "@media screen and (max-width: 1100px)": {
            flexDirection:"column",
            gap:"10px"
        }
    },
    profileContent: {
        backgroundColor:"black",
        position:"absolute",
        height:"100px",
        width:"100px",
        top:"100px",
    },
});

export default useStyles;
