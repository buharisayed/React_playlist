import { Parallax } from 'react-parallax';
import Space3 from "../img/space3.jpg"
const ImageThree = () => (
    <Parallax className='image'  bgImage={Space3}  strength={800}>
       <div className='content'>
        <span className='img-txt'>A trip to space </span>

       </div>
    </Parallax>
);
export default ImageThree