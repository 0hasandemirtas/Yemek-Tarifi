import {
    createContext, useContext ,useEffect,useState
} from "react";
import {
    jwtDecode 
}from 'jwt-decode';

const UserContext = createContext();
export const UserProvider=({
    children
}) =>{
    const [user, setUser] = useState();
    const [isLogin , setIsLogin]= useState(false);
    
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData =  async() =>{
        const token =  localStorage.getItem('token');
        const data = await jwtDecode(token);
        console.log("tokenss",token);
        console.log("dataa",data);
        const payload={
            userName:data.userName,
            token:token
        };
        console.log("payload",payload);
        if(data){
            setIsLogin(true);
            await setUser(payload);
        }
        else{
            setIsLogin(false);
            setUser(null);
        }
        console.log("zehra2",user);
    };
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
        setIsLogin,
        signIn,
    };
    return(
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
};
export const userAuth =  ()=>  useContext(UserContext);
