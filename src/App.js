import './App.css';
import {Component} from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      filtered_monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => this.setState(
            () => {
              return {
                monsters: users,
                filtered_monsters: Object.assign(users)
              }
            },
            () => {
              console.log('state -=>', this.state)
            }
        ))
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value.toLowerCase() })
  }


  render () {
    const { monsters, searchField } = this.state
    const { onSearchChange } = this

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    })

    return ( <div className="App">
        <h1 className='app-title'>Monster Friends</h1>
        <SearchBox searchbox_handler={onSearchChange }
                   default_str='Mosnter Search'
                   classame='search-box'
        />
        <CardList monsters={filteredMonsters} />

    </div>
    )
  }
}

export default App;
