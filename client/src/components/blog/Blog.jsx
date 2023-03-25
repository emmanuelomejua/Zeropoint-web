import './blog.css'
import img1 from '../../assets/thum1.jpg'

const Blog = () => {
  return (
    <div className='blog'>
      <div className='container'>
        <img src={img1} alt='Post' className='blogImg'/>
        <h2 className='blogTitle'> Mauris ut felis malesuada eros varius Tristique</h2>
        <p className='blogDesc'>
            Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitorMauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitorMauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor. Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.
            Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.
            Mauris ut felis malesuada eros varius tristique a at orci. Nulla vulputate, leo sit amet rhoncus suscipit, enim ex venenatis ipsum, et porttitor.
            </p>

        <span className='blogDate'><i>{new Date().toDateString()}</i></span>
      </div>
    </div>
  )
}

export default Blog
