import {
    createContext, useContext ,useState
} from "react";


const UserContext = createContext();
export const UserProvider=({
    children
}) =>{
    const [user, setUser] = useState(null);
    const [isLogin , setIsLogin]= useState(false);
    const signIn = (userData)=>{
        setUser(userData);
        setIsLogin(true);
    };
    const logOut = () =>{
        setIsLogin(false);
        setUser(null);
    };
    const values={
        user,
        signIn,
        logOut,
        isLogin,
        setIsLogin
    };
    return(
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
};
export const updatedUser = ()=>useContext(UserContext);
