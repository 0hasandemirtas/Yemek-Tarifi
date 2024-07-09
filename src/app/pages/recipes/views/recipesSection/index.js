import React, { useEffect , useState} from "react";
import useStyles from "./stylesheet";
import axios from "axios";
import RecipesGroup from "../../../../components/recipesGroup";

const RecipesSections = () =>{
    const [recipes,setRecipes]=useState([]);
    const [isLoading, setIsLoading]=useState(true);
    const classes=useStyles();
    const apiURL="http://localhost:3000";
    useEffect(() => {
        const  getData = async () => {
        await axios.get("http://localhost:3000")
            .then((res) => {
                if(res.code===200){
                    setRecipes(res.payload);
                    setIsLoading(false);
                    console.log(res.payload.title);
                    console.log("asd");
                }
                else{
                    throw new Error(res.message);
                }
            })
            .catch((err) => {
                alert(err.message);
                console.error(err);
            })
            .finally(()=>setIsLoading(false));
        }
        getData();
    },[]);
    return(
        <div>
            {
                isLoading ?
                <span>loading</span>
                :
                recipes.map((item,index)=>{
                    return(
                    <RecipesGroup
                        key={`recipes-${index}`}              
                        photoURL={item.photoURL}
                        title={item.title}
                        minute={item.minute}
                        people={item.people}
                    />)
                })


            }
        </div>
    )
    
}

export default RecipesSections;