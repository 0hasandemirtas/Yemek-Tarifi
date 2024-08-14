import {
    createContext, useContext ,useState
} from "react";


const UserContext = createContext();
export const UserProvider=({
    children
}) =>{
    const [user, setUser] = useState();
    const [isLogin , setIsLogin]= useState(false);
    const signIn = (userData)=>{
        setUser(userData);
        setIsLogin(true);
        console.log("context user",user);
    };
    const logOut = () =>{
        setIsLogin(false);
        setUser(null);
    };
    const values={
        user,
        setUser,
        isLogin,
        setIsLogin
    };
    return(
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
};
export const userAuth =  ()=> useContext(UserContext);
