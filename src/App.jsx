
import './App.css';
import Generation from './components/generation';
import Greeting from './components/greeting';
import { Footer, Navbar } from './navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Greeting />
      <Generation />
      <Footer/>
    </div>
  );
}

export default App;