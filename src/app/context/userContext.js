import {
    createContext, useContext ,useEffect,useState
} from "react";
import {
    jwtDecode 
}from 'jwt-decode';
import {
    useNavigate 
} from "react-router-dom";

const UserContext = createContext();
export const UserProvider=({
    children
}) =>{
    const [user, setUser] = useState();
    const [isLogin , setIsLogin]= useState(false);
    const navigate=useNavigate();
    const logOut = () =>{
        setIsLogin(false);
        setUser(null);
        localStorage.removeItem('token');
        navigate("/home");
    };
    const isTokenExpired=(token)=>{
        const tokenPayload=JSON.parse(atob(token.split('.')[1]));
        const currentTime=Math.floor(Date.now()/1000);
        return tokenPayload.exp && currentTime > tokenPayload.exp;
    };
    const fetchData =  async() =>{
        const token =  localStorage.getItem('token');
        const data = await jwtDecode(token);
        const payload={
            userName:data.userName,
            token:token
        };
        console.log("payload",payload);
        if(payload.token === undefined){
            console.log("çıkış");
            logOut();
        }
        else if(data){
            setIsLogin(true);
            await setUser(payload);
        }
        else{
            logOut();
        }
    };
    useEffect(()=>{
        fetchData();
    },[]);
    const signIn = (userData)=>{
        setUser(userData);
        setIsLogin(true);
    };
    const values={
        user,
        setUser,
        isLogin,
        setIsLogin,
        signIn,
        logOut,
    };
    return(
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    );
};
export const userAuth =  ()=>  useContext(UserContext);
