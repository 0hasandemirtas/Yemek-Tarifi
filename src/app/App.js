import './App.css';
import RouterConfig from './Routes/RouterConfig';
import Footer from './components/footer';
import Header from './components/header';
import { ThemeProvider } from './context/themeContext';
function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Header/>
        <RouterConfig/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
