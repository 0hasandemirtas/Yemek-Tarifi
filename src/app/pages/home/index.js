import {
    useLanguage 
} from "../../context/languageContext";
import useStyles from "./stylesheet";

const Home = () =>{
    const classes=useStyles(); 
    const {
        activeLanguage, changeLanguage
    }=useLanguage();
    const lang=activeLanguage.translations;
    return(
        <>
            <div className={classes.container}>
                <img
                    className={classes.backgroundImage}
                    src="./images/anasayfa.jpg"
                />
                <div className={classes.title}>
                    <label className={classes.titleContent} >{lang.welcome}</label>
                </div>
            </div>    
        </>
    );
};
export default Home;