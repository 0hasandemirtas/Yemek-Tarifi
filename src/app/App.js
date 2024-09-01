import './App.css';
import RouterConfig from './Routes/RouterConfig';
import {
    Header, Footer
} from "./components";
import {
    ThemeProvider 
} from './context/themeContext';
import {
    LanguageProvider 
} from './context/languageContext';
import {
    UserProvider 
} from './context/userContext';

const App=()=> {
    return (
        <div className="App">
            <ThemeProvider>
                <LanguageProvider> 
                    <UserProvider>
                        <Header/>
                        <RouterConfig/>
                        <Footer/>
                    </UserProvider>
                </LanguageProvider> 
            </ThemeProvider>
        </div>
    );
};

export default App;
