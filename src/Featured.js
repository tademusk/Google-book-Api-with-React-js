import React ,{useState} from 'react';
import './Featured.scss';
import SearchIcon from '@mui/icons-material/Search';

function Featured() {

  const [search, setSearch] = useState('');

  return (
    <div className='featured'>
       <img width='100%' src="https://s26162.pcdn.co/wp-content/uploads/sites/2/2022/05/Book.jpg" alt="" />
       <div className="info">
          <div className="searchbar">
            <input type="text" className='input' placeholder ='searchBook'
            value={search} onChange = {e=>setSearch(e.target.value)}
            onKeyPress={search} />
            <div className="searchIcon">
              <SearchIcon className='icon'/>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Featured
