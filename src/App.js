import SearchBar from './component/searchfunction';
import './App.css';

function App() {
  return (
    <div className="App">
        <SearchBar 
          // label = 'Search your food: '
          onSearch='123'
        />
    </div>
  );
}

export default App;
