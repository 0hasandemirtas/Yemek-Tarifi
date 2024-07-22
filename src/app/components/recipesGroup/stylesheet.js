import {
    createUseStyles 
} from "react-jss";
import {
    clickEvent 
} from "../../themes/helpers";

const useStyles = createUseStyles({
    container: {
        backgroundColor: ({
            colors 
        }) => colors.backgroundColor,
        borderRight: "2px solid green",
        justifyContent: "space-evenly",
        borderLeft: "2px solid green",
        borderRadius: "20px",
        margin: "15px 0",
        flexWrap: "wrap",
        height: "auto",
        display: "flex",
        width: "80%",
    },
    recipesGroup: {
        display: "flex",
        justifyContent: "space-evenly",
    },
    recipesContentContainer: {
        color: ({
            colors 
        }) => colors.titleColor,
        borderBottom: "2px solid black",
        ...clickEvent(),
        margin: "15px",
        height: "40%",
        width: "20%",
        "& img": {
            borderRadius: "15px",
            width: "90%",
        },
        "@media screen and (max-width: 1100px)": {
            width: "200px",
        },
    },
    titleGroup: {
        display: "flex",
        justifyContent: "space-evenly",
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
    link: {
        textDecoration: "none",
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
