import BlogCat from '../blogCat/BlogCat'
import './blogdetail.css'
import { Person } from '@mui/icons-material'
import img1 from '../../assets/thum3.jpg'

const BlogDetail = () => {
  return (
    <div className='blogdetail'>
      <div className='blogCat'>
        <BlogCat/>
      </div>
      <div className='details'>
        <img src={img1} alt='Post' className='blogImg1' />

        <div className='dInfo'>
        <h2 className='blogTitle'> Mauris ut felis malesuada eros varius Tristique</h2>

        <div className='wrap'>
            <span className='blogDate1'>{new Date().toDateString()}</span>
            <span className='blogAuthor'>< Person/>By Blessing Peter</span>
        </div>

        </div>
        <p className='blogDesc1'>
        Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitorMauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitorMauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor. Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.
            Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.
            Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.

            Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitorMauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitorMauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor. Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.
            Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.
            Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.
        </p>
      </div>
    </div>
  )
}

export default BlogDetail
