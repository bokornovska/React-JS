
import './App.css';
import Movie from './components/Movie';

function App() {

  const movies = [
    {title: 'Man of steel', year:2008, cast:['Pesho', 'Gosho', 'Ivan']},
    {title: 'Harry Potter', year:2007, cast:['Daniel', 'Ema', 'Voldemor']},
    {title: 'Lord Of the Rings', year:2009, cast:['Orlando Bloom', 'Gosho', 'Ivan']}
  ]
  return (
    <div className="App" >
      <h1>Movie List</h1>
      <Movie 
      title={movies[0].title} 
      year={movies[0].year}
      cast={movies[0].cast}
      isNew = {false}
      />
       <Movie 
      title={movies[1].title} 
      year={movies[1].year}
      cast={movies[1].cast}
      isNew = {false}
      />
       <Movie 
      title={movies[2].title} 
      year={movies[2].year}
      cast={movies[2].cast}
      isNew = {false}
      />
    </div>
  );
}

export default App;
