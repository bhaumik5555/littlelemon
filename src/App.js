import './App.css';
import Header from './Components/Header/Header'
import Navigation from './Components/Nav/Nav'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
        <Header/>
        <Navigation/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
