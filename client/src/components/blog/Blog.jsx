import './blog.css'
import img1 from '../../assets/thum2.jpg'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className='blog'>
      <img src={img1} alt='' className='blogImg'/>
      <section className='blogInfo'>
        <Link to='/blog/:id' className='link'>
        <h2 className='btitle'>Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor</h2>
        </Link>

        <span className='bDate'>{new Date().toDateString()}</span>
        <p className='blogDesc'>Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor Mauris ut felis malesuada eros varius tristique a at orci. Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor Mauris ut felis malesuada eros varius tristique a at orci.  Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor Mauris ut felis malesuada eros varius tristique a at orci. Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor Mauris ut felis malesuada eros varius tristique a at orci Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor Mauris ut felis malesuada eros varius tristique a at orci Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cum voluptatum sapiente magni eos in quam porro soluta, voluptatem, ducimus eveniet facilis autem tempore, nisi suscipit voluptate sed fuga sint. Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor Mauris ut felis malesuada eros varius tristique a at orci. Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor Mauris ut felis malesuada eros varius tristique a at orci Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor Mauris ut felis malesuada eros varius tristique a at orci Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati cum voluptatum sapiente magni eos in quam porro soluta, voluptatem, ducimus eveniet facilis autem tempore, nisi suscipit voluptate sed fuga sint.</p>
      </section>
    </div>
  )
}

export default Blog
