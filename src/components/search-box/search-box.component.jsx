import { Component} from "react"
import './search-box.styles.css'

class SearchBox extends Component {


  render() {
    const { searchbox_handler, default_str, className } = this.props
    return (
        <input
            type='search'
            className={`search-box ${className}`}
            placeholder={default_str}
            onChange={searchbox_handler}/>
    )
  }
}

export default SearchBox
