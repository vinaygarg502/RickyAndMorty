import React , {useState, useEffect} from 'react';
import SearchForm from './components/form/Search';
import Cards from './components/card/Cards';
import Filter from './components/filters/Filters';
import './App.scss';


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [filterCategories, setFilterCategories] = useState({Species:[],Gender:[],Origin:[]});
  const [order, setOrder] = useState('');

  useEffect(() => {
    getData();
  }, [filterCategories]);

  const filterArray = (array, filters) => {
    const filterKeys = Object.keys(filters);
    return array.filter(item => {
      return filterKeys.every(key => {
        if(filters[key].length===0){
          return true;
        }
        else if(key==='Origin') {
          return filters[key].includes(item[key.toLowerCase()]['name'].split(' ')[0].toLowerCase());
        }
        return filters[key].includes(item[key.toLowerCase()].toLowerCase());
      });
    });
  }

  const getFilteredCharacters = (event) => {
    const [category, value] = event.target.name.split('-');
    if(!event.target.checked){
      const index = filterCategories[category].indexOf(value);
      filterCategories[category].splice(index, 1);
      setFilterCategories(Object.assign({}, filterCategories));
      return false;
    }
    filterCategories[category].push(value);
    setFilterCategories(Object.assign({}, filterCategories));
  }
  const getData =() => {
    fetch("https://rickandmortyapi.com/api/character/ ")
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(filterArray(result.results, filterCategories));;
      },
      (error) => {
        setIsLoaded(true);
      }
    )
  };

  const handleInputChange = (event) => {
    event.preventDefault();
    const form = document.querySelector('#searchForm');
    const searchInput = form.elements["searchText"];
    if(searchInput.value){
      setItems(items.filter(item => {
        if(((item.name.toLowerCase()).split(" ")).includes(searchInput.value.toLowerCase())){
          return item;
        }
      }));
    }
    else {
      getData();
    }
  }

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
    if(event.target.value === 'descending'){
      items.sort((a, b) => {
        return b.id - a.id;
      });
    }
    else {
      items.sort((a, b) => {
        return a.id - b.id;
      });
    }
    
    setItems(items);
  }

  return (
    <div className="main-container">
      <Filter getFilteredCharacters = {getFilteredCharacters}/>
      <div className="container">
        <SearchForm handleInputChange={handleInputChange} handleOrderChange={handleOrderChange} order = {order}/>
        <Cards isLoaded = {isLoaded} items = {items}/>
      </div>
    </div>
  );
}

export default App;
