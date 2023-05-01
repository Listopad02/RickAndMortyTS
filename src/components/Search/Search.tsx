import { FC } from 'react'
import "./Search.scss"

const Search: FC = () => {
  return (
    <form className='Search'>
      <input 
        type="text" 
        placeholder='Enter character name...'
      />
    </form>
  )
}

export default Search