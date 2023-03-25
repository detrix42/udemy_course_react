import './App.css';
import { useState, useEffect } from 'react'

import CardList from "./components/card-list/card-list.component"
import _CardList from "./components/card-list/card-list.component"
import SearchBox from "./components/search-box/search-box.component"

const App = () => {
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((monster_list) => {
          // console.log('monster_list:', monster_list)
          setMonsters(monster_list)
        })
  },[])

  useEffect(() => {
    setFilteredMonsters(monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    }))
  }, [monsters, searchField])


  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLowerCase())
  }

  console.log('app filtered monsters:', searchField, filteredMonsters)

  return (
  <div className="App">
    <h1 className='app-title'>Monster Friends</h1>
    <SearchBox searchbox_handler={ onSearchChange }
               default_str='Monster Search'
               classame='search-box'
    />
    <CardList monsters={filteredMonsters} />

  </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       monsters: [],
//       searchField: '',
//       filtered_monsters: []
//     }
//   }
//
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then((response) => response.json())
//         .then((users) => this.setState(
//             () => {
//               return {
//                 monsters: users,
//                 filtered_monsters: Object.assign(users)
//               }
//             },
//             () => {
//               console.log('state -=>', this.state)
//             }
//         ))
//   }
//
//   onSearchChange = (event) => {
//     this.setState({ searchField: event.target.value.toLowerCase() })
//   }
//
//
//   render () {
//     const { monsters, searchField } = this.state
//     const { onSearchChange } = this
//
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchField)
//     })
//
//     return ( <div className="App">
//         <h1 className='app-title'>Monster Friends</h1>
//         <SearchBox searchbox_handler={onSearchChange }
//                    default_str='Mosnter Search'
//                    classame='search-box'
//         />
//         <CardList monsters={filteredMonsters} />
//
//     </div>
//     )
//   }
// }

export default App;
