import './blogCat.css'
import { Search } from '@mui/icons-material'

const BlogCat = () => {
  return (
    <div className='blogcat'>
      <div className='top'>
        <div className='searchItem'>
          <input type='text' placeholder='Search...' className='input1'/>
          <Search className='icon'/>
        </div>
       
      </div>
      <div className='center'>
        <h4>Category</h4>
        <span className='catItem'>Technology</span>
        <span className='catItem'>Politics</span>
        <span className='catItem'>Culture & Arts</span>
        <span className='catItem'>Education</span>
        <span className='catItem'>Others</span>
        
      </div>
      <div className='down'>
        <h4>Recent Post</h4>
        <span className='catItem'></span>
        <span className='catItem'></span>
        <span className='catItem'></span>
        <span className='catItem'></span>
      </div>
    </div>
  )
}

export default BlogCat
