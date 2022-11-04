import { Parallax } from 'react-parallax';
import Space from "../img/space.jpg"
const ImageOne = () => (
    <Parallax className='image'  bgImage={Space}  strength={800}>
       <div className='content'>
        <span className='img-txt'>A trip to space </span>

       </div>
    </Parallax>
);
export default ImageOne