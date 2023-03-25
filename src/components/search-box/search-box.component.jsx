import './search-box.styles.css'

const SearchBox = ({ searchbox_handler, default_str, className }) => {

    return (
        <input
            type='search'
            className={`search-box ${className}`}
            placeholder={default_str}
            onChange={searchbox_handler}/>
    )
  }

export default SearchBox
