import { FC } from 'react'
import Search from "../Search/Search"
import Filters from "../Filters/Filters"
import "./Navbar.scss"

const Navbar: FC = () => {
  return (
    <div className='Navbar'>
      <h1>The Rick and Morty API</h1>
      <Search />
      <Filters />
    </div>
  )
}

export default Navbar