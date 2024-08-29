import {
    createUseStyles 
} from "react-jss";

const useStyles = createUseStyles({
    container: {
        backgroundColor:({
            colors
        })=> colors.primary ,
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        display: "flex",
        width: "100%",
    },
    topContainer: {
        justifyContent: "space-evenly",
        justifyContent:"center",
        alignItems:"center",
        marginTop: "50px",
        display: "flex",
        "& img": {
            borderRadius: "15px",
            width: "300px",
            margin:"10px",
        },
        "& div": {
            margin:"10px",
            width: "300px",
            color: ({
                colors 
            }) => colors.textColor,
        },
        "@media screen and (max-width: 900px)":{
            flexDirection:"column",
        }
    },
    contentContainer: {
        borderRadius: "10px",
        height: "700px",
        width: "70%",
        backgroundColor: ({
            colors 
        }) => colors.backgroundColor,
        "& h1": {
            marginTop: "50px",
            color:({
                colors
            })=>colors.titleColor,
        },
        "@media screen and (max-width: 900px)":{
            height:"900px"
        }
        
    },
    recipesIcon: {
        justifyContent: "space-evenly",
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        "& img": {
            height: "20px",
            color: "green",
            width: "20px",
        },
    },
    recipesIcons: {
        justifyContent: "space-evenly",
        borderTop:"15px solid white",
        border: "1px solid white",
        alignItems: "center",
        borderRadius:"15px",
        display: "flex",
        height: "35%",
        width:"30%",
    },
    recipesIconsContainer:{
        justifyContent:"center",
        alignItems:"center",
        display:"flex",
        width:"100%",
        height:"35%",
    }
});

export default useStyles;
