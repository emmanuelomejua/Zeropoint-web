import './app.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home'
import SingleBlog from './pages/singleBlog/SingleBlog';
import SingleService from './pages/singleservice/SingleService'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <main className="app">
       <Navbar/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/contact' element={ <Contact/>}/>
        <Route path='/blog' element={ <SingleBlog/>}/>
        <Route path='/service' element={ <SingleService/>}/>
      </Routes>
    </main>
  );
}

export default App;
