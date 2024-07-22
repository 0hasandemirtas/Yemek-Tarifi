import {
    createUseStyles 
} from "react-jss";

const useStyles = createUseStyles({
    container: {
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
