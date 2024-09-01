import {
    createUseStyles 
} from "react-jss";
import {
    clickEvent 
} from "../../themes/helpers";

const useStyles = createUseStyles({
    recipesContentContainer: {
        color: ({
            colors 
        }) => colors.titleColor,
        border:"solid 2px white",
        boxShadow:"1px 2px gray",
        borderRadius:"15px",
        ...clickEvent(),
        margin: "15px",
        height: "40%",
        width: "20%",
        "& img": {
            borderRadius: "15px",
            width: "90%",
            marginTop:"10px",
        },
        "& h2":{
            backgroundColor:({
                colors 
            }) => colors.cardTitleColor,
            borderRadius:"15px",
            margin:"15px 15px",
            padding:"10px 0",
        },
        "@media screen and (max-width: 1100px)": {
            width: "200px",
        },
    },
    titleGroup: {
        justifyContent: "space-evenly",
        backgroundColor:({
            colors 
        }) => colors.cardTitleColor,
        borderRadius:"15px",
        margin:"0 15px",
        display: "flex",
        "& > span": {
            fontSize: "15px",
        },
    },
    recipesContent: {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        "& img": {
            height: "20px",
            color: "green",
            width: "20px",
        },
    },
    button: {
        backgroundColor: ({
            colors 
        }) => colors.buttonColor,
        color: ({
            colors 
        }) => colors.buttonTextColor,
        borderRadius: "10px",
        padding: "5px 10px",
        ...clickEvent(),
        margin: "10px",
    },
    controlContainer: {
        justifyContent: "space-evenly",
        alignItems: "center",
        display: "flex",
        "& svg ": {
            height: "auto",
            width: "20px",
        },
    },
});
export default useStyles;
