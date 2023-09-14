import Slider from '../Slider/Slider';
import Menu from '../Menu/Menu';
import Feedback from '../Feedback/Feedback';
import './main.css';

const Main = () => {
  return (
    <>
    <div className="sliderContainer">
      <Slider/>
    </div>
    <Menu/>
    <Feedback/>
    </>
  )
}

export default Main