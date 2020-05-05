import './App.css';
import React, { Component } from 'react'
import CardList from './components/card-list/CardList'
import { SearchBar } from './components/search-bar/SearchBar'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: [],
      searchField: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => console.log(this.setState({ monsters: users })))
  }
  handleChange(e) {
    this.setState({ searchField: e.target.value })
  }

  render() {
    //dest
    const { monsters, searchField } = this.state
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBar
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filterMonsters} />
      </div>
    )
  }
}

