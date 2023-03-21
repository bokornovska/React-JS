
import './App.css';
import Counter from './components/Counter';

import MovieList from './components/MovieList';
import Timer from './components/Timer'
function App() {

  const movies = [
    { title: 'Man of steel', year: 2008, cast: ['Pesho', 'Gosho', 'Ivan'] },
    { title: 'Harry Potter', year: 2007, cast: ['Daniel', 'Ema', 'Voldemor'] },
    { title: 'Lord Of the Rings', year: 2009, cast: ['Orlando Bloom', 'Gosho', 'Ivan'] }
  ]

  return (
    <div className="App" >
      <h1>React Demo</h1>

      <Counter canReset={true}/>
      
      <Timer start={10} />

      <MovieList movies={movies} />

    </div>
  );
}

export default App;
