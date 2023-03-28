import { Search } from '@mui/icons-material'
import './blogcat.css'

const BlogCat = () => {
  return (
    <div className='blogcat'>

      <div className='topcat'>
            <span className='inputCont'>
            <input type='' placeholder='Search...' className='input1'/>
            <Search/>
            </span>
      </div>

      <div className='centercat'>
        <h4 className='catTitle'>Category</h4>
        <span className='catItem'>Politics</span>
        <span className='catItem'>Technology</span>
        <span className='catItem'>Sports</span>
        <span className='catItem'>Education</span>
        <span className='catItem'>Others</span>
      </div>

      <div className='dcat'>
        <h4 className='catTitle'>Reent Posts</h4>
        <span className='catItem'>Post</span>
        <span className='catItem'>Post</span>
        <span className='catItem'>Post</span>
        <span className='catItem'>Post</span>
      </div>
    </div>
  )
}

export default BlogCat
