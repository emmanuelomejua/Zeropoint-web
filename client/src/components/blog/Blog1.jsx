import './blog1.css'
import img1 from '../../assets/thum3.jpg'
import { Link } from 'react-router-dom'
import SingleBlog from '../../pages/singleBlog/SingleBlog'


const Blog1 = () => {
  return (
    <div className='blog'>
       <img src={img1} alt='' className='blogImg'/>
       <div className='blogInfo'>
        <Link to='/blog:id' element={<SingleBlog/>} style={{textDecoration: 'none', color: 'inherit'}}>
           <h2 className='blogTitle'> Mauris ut felis malesuada eros varius Tristique </h2>
        </Link>
           
            <span className='blogDate'>{new Date().toDateString()}</span>
       </div>
       <p className='blogDesc'>
            Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitorMauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitorMauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor. Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.
            Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.
            Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.
       </p>
    </div>
  )
}

export default Blog1
