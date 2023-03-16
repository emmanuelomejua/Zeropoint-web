import './app.css';
import CountUp from 'react-countup'

function App() {
  return (
    <main className="app">
      Hello Jherrie
      <CountUp
          start={0}
          end={100000}
          duration={5}
        /> 
    </main>
  );
}

export default App;
