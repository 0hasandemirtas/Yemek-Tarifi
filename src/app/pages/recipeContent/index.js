import {
    useParams 
} from "react-router-dom";
import useStyles from "./stylesheet";
import {
    useEffect, useState 
} from "react";
import axios from "axios";
import {
    useLanguage 
} from "../../context/languageContext";
import {
    useTheme 
} from "../../context/themeContext";
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
    });
    const {
        id 
    } = useParams();
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios
            .get(`http://localhost:3001/api/questions/${id}`)
            .then((res) => {
                const recipes = res.data;
                if (recipes.code === 200) {
                    setRecipes(res.data.payload);
                    setIsLoading(false);
                } else {
                    throw new Error(res.message);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.error(err);
            })
            .finally(() => setIsLoading(false));
    }, []);
    return (
        <div className={classes.container}>
            <div className={classes.contentContainer}>
                <h1>{recipes.title}</h1>
                <div className={classes.topContainer}>
                    <img src="../images/yemek1.jpg" />
                    <div>
                        <span>
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum
              lorem ipsum
                        </span>
                    </div>
                </div>
                <div className={classes.recipesIcons}>
                    <div className={classes.recipesIcon}>
                        <img src="../images/zaman.png" alt="zaman" />
                        <span>
                            {recipes.minute} {lang.minute}
                        </span>
                    </div>
                    <div className={classes.recipesIcon}>
                        <img src="../images/kişi.png" alt="zaman" />
                        <span>
                            {recipes.people} {lang.people}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeContent;
