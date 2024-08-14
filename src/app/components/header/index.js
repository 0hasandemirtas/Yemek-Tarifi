import React, {
    useEffect 
} from "react";
import useStyles from "./stylesheet";
import {
    Link 
} from "react-router-dom";
import Hamburger from "hamburger-react";
import {
    useState 
} from "react";
import {
    GrLanguage 
} from "react-icons/gr";
import {
    VscColorMode 
} from "react-icons/vsc";
import {
    useTheme 
} from "../../context/themeContext";
import {
    useLanguage 
} from "../../context/languageContext";
import {
    userAuth
} from "../../context/userContext";
import {
    CgProfile 
} from "react-icons/cg";
const Header = () => {
    const {
        activeTheme, changeTheme 
    } = useTheme();
    const {
        activeLanguage, changeLanguage 
    } = useLanguage();
    const [isOpen, setOpen] = useState(false);
    const {
        isLogin,
        setIsLogin
    }=userAuth();
    const classes = useStyles({
        colors: activeTheme.color, isOpen ,isLogin
    });
    const lang = activeLanguage.translations;
    useEffect(()=>{

        console.log(isLogin);
    });
    return (
        <div className={classes.container}>
            <div className={classes.logoContainer}>
                <img
                    className={classes.logo}
                    src="./images/yemekLogo.jpg"
                    alt="yemekLogo"
                />
            </div>
            <div className={classes.contentContainer}>
                <div className={classes.titleContentContainer}>
                    <div>
                        <Link className={classes.titleContent} to="/">
                            {lang.home}
                        </Link>
                    </div>
                    <div>
                        <Link className={classes.titleContent} to="recipes">
                            {lang.recipes}
                        </Link>
                    </div>
                    <div>
                        <Link 
                            className={classes.titleContent} 
                            to="myRecipes"
                            style={{
                                display: isLogin ? "flex" : "none"
                            }}
                        >
                            {lang.myRecipes}
                        </Link>
                    </div>
                </div>
                <div 
                    className={classes.memberContainer}
                    style={{
                        display: isLogin ? "none" : "flex"
                    }}
                >
                    <Link className={classes.memberContent} to="login">
                        {lang.signIn}
                    </Link>
                    <span>/</span>
                    <Link className={classes.memberContent} to="signUp">
                        {lang.signUp}
                    </Link>
                </div>
                <div className={classes.iconGroup}>
                    <div className={classes.icon}>
                        <GrLanguage onClick={() => changeLanguage()} color="#318A5E" />
                    </div>
                    <div className={classes.icon}>
                        <VscColorMode onClick={() => changeTheme()}  color="#318A5E"/>
                    </div>
                </div>
                <div className={classes.profile} >
                    <CgProfile
                        style={{
                            display: isLogin ? "flex" : "none",
                        }}
                    />
                </div>
            </div>
            <div className={classes.hamburger}>
                <Hamburger style={{
                    size:"20px"
                }}toggled={isOpen} toggle={setOpen} />
            </div>
            <div className={classes.line} >
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;
