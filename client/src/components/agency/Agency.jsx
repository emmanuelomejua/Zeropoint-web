import './agency.css'
import img2 from '../../assets/web1.jpg'
import CountUp from 'react-countup';

const Agency = () => {
  return (
    <div className='agency'>
      <div className='agency-left'>
        <img src={img2} alt='Agency' className='imgAgency'/>
      </div>
      
      <div className='agency-right'>
        <h1 className='agencyhead'>Why our Agency?</h1>
        <p className='descAgency'>
        As the most popular JavaScript library for building modern, interactive user interfaces, React is an in-demand framework that'll bring real value to your career or next project. But like any technology, learning React can be tricky, and finding the right teacher can make things a whole lot easier.Maximilian Schwarzmüller is a bestselling instructor who has helped over two million students worldwide learn how to code, and his latest React video course (React—The Complete Guide) has over six hundred thousand students on Udemy.
        </p>

        <div  className='countContainer'>
        <span className='count'> <span className='countNumber'><CountUp delay={2} end={9875} /></span>Satisfied Clients</span>
        <span className='count'><span className='countNumber'><CountUp delay={2} end={7894} /></span>Projects Launched</span>
        <span className='count'><span className='countNumber'><CountUp delay={2} end={65} /></span>Years Completed</span>
        </div>

      </div>
    </div>
  )
}

export default Agency
