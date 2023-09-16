import Slider from '../Slider/Slider';
import Menu from '../Menu/Menu';
import Intro from '../Intro/Intro';
// import Feedback from '../Feedback/Feedback';
import './main.css';

const Main = () => {
  return (
    <>
    <div className="sliderContainer">
      <Slider/>
    </div>
    <Intro/>
    <Menu/>
    {/* <Feedback/> */}
    </>
  )
}

export default Main