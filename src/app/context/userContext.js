import { createContext, useContext } from "react";

const defaultValue={
    name:'',
    email:'',
};
const userContext = createContext(defaultValue);
export const userProvider=({children}) =>{
    const [user, setUser] = useState(defaultValue);
    const updateUser = (updatedUser) =>{
        setUser((prevState) =>({...prevState,...updatedUser}));
    };
    const values={
        user,
        updateUser
    }
    return(
        <userContext.Provider value={values}>
            {children}
        </userContext.Provider>
    );
};
 export const updatedUser = ()=>useContext(userContext);
