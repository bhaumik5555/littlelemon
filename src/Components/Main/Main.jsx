import Slider from '../Slider/Slider';
import Intro from '../Intro/Intro';
import Menu from '../Menu/Menu';
import Feedback from '../Feedback/Feedback';
import './main.css';

const Main = () => {
  return (
    <>
    <div className="sliderContainer">
      <Slider/>
    </div>
    <Intro/>
    <Menu/>
    <Feedback/>
    </>
  )
}

export default Main