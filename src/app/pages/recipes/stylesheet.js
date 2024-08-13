import {
    createUseStyles 
} from "react-jss";
import {
    clickEvent 
} from "../../themes/helpers";
const useStyles = createUseStyles({
    container: {
        backgroundColor:({
            colors
        })=>colors.primary,
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        userSelect: "none",
        display: "flex",
        width: "100%",
    },
    recipesGroup: {
        backgroundColor: ({
            colors 
        }) => colors.backgroundColor,
        boxShadow: "0 2px 5px black",
        justifyContent: "space-evenly",
        borderRadius: "20px",
        margin: "40px 0",
        flexWrap: "wrap",
        display: "flex",
        height: "auto",
        width: "80%",
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
    button: {
        width: "50px",
        height: "50px",
    },
    operationsContainer: {
        backgroundColor: ({
            colors 
        }) => colors.backgroundColor,
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: "15px",
        display: "flex",
        margin: "15px 0",
        height: "100px",
        width: "80%",
        "& button": {
            backgroundColor: ({
                colors 
            }) => colors.buttonColor,
            color: ({
                colors 
            }) => colors.buttonTextColor,
            padding: "10px 30px",
            borderRadius: "25px",
            ...clickEvent(),
        },
    },
    boxContainer: {
        display: ({
            open 
        }) => (open ? "flex" : "none"),
        justifyContent: "center",
        backgroundColor: "black",
        position: "fixed",
        opacity: "0.75",
        height: "100%",
        width: "100%",
    },
    box: {
        backgroundColor: ({
            colors 
        }) => colors.backgroundColor,
        borderRadius: "15px",
        marginTop: "50px",
        height: "75%",
        width: "30%",
        zIndex: "22",
    },
});
export default useStyles;
