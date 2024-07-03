import './App.css';
import RouterConfig from './Routes/RouterConfig';
import Footer from './components/footer';
import Header from './components/header';
import { ThemeProvider } from './context/themeContext';
import { LanguageProvider } from './context/languageContext';
function App() {
  return (
    <div className="App">
      <ThemeProvider>
      <LanguageProvider> 
      <userProvider>
        <Header/>
        <RouterConfig/>
        <Footer/>
      </userProvider>
      </LanguageProvider> 
      </ThemeProvider>
    </div>
  );
}

export default App;
