import {
    createUseStyles 
} from "react-jss";

const useStyles = createUseStyles({
    container: {
        background: 'url("../images/yemek-arkaplan-3.jpg")',
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        display: "flex",
        width: "100%",
    },
    topContainer: {
        justifyContent: "space-evenly",
        marginTop: "50px",
        display: "flex",
        "& img": {
            borderRadius: "15px",
            width: "300px",
        },
        "& div": {
            width: "300px",
            color: ({
                colors 
            }) => colors.textColor,
        },
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
        },
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
        alignItems: "center",
        display: "flex",
        height: "35%",
    },
});

export default useStyles;
