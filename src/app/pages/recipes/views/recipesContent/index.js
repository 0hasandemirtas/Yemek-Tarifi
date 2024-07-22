import useStyles from "./sylesheet";
import {
    useTheme 
} from "../../../../context/themeContext";
import {
    useLanguage 
} from "../../../../context/languageContext";
import {
    useState 
} from "react";
const RecipeContent = () => {
    const {
        activeLanguage 
    } = useLanguage();
    const {
        activeTheme 
    } = useTheme();
    const lang = activeLanguage.translations;
    const classes = useStyles({
        colors: activeTheme.color 
    },open);
    const [open, setOpen] = useState(false);
    const Controller=()=>{
        setOpen(!open);
    };
    return (
        <>
            <div className={classes.container} onClick={Controller}>
                <div className={classes.box}>
            
                </div>
            </div>
        </>
    );
};

export default RecipeContent;
