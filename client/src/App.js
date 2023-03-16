import './app.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'

function App() {
  return (
    <main className="app">
      <Navbar/>
      <Home/>
    </main>
  );
}

export default App;
