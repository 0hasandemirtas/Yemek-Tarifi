import './App.css';
import RouterConfig from './Routes/RouterConfig';
import Footer from './components/footer';
import Header from './components/header';
import {
    ThemeProvider 
} from './context/themeContext';
import {
    LanguageProvider 
} from './context/languageContext';
const App=()=> {
    return (
        <div className="App">
            <ThemeProvider>
                <LanguageProvider> 
                    <Header/>
                    <RouterConfig/>
                    <Footer/>
                </LanguageProvider> 
            </ThemeProvider>
        </div>
    );
};

export default App;
