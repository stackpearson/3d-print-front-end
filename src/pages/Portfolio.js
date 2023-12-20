import Carousel from 'react-bootstrap/Carousel';
import artImg from '../assets/art.jpg';
import yodaImg from '../assets/baby-yoda.jpg';
import caseImg from '../assets/case.jpg';
import dinoImg from '../assets/dino.jpg';
import headphoneImg from '../assets/headphone-holder.jpg';
import skullImg from '../assets/skull.jpg';
import '../styles/Portfolio.css';

function Portfolio() {
    return (<>
      <div className="portfolio">
        <Carousel>
        <Carousel.Item>
            <img src={artImg} alt='3d printed art'/>
            <Carousel.Caption>
            <h3>Printed art piece</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src={yodaImg} alt='3d printed baby yoda' />
            <Carousel.Caption>
            <h3>Baby Yoda</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src={caseImg} alt='3d printed memory card case' />
            <Carousel.Caption>
            <h3>Memory Card Case</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src={dinoImg} alt='3d printed dinosaur skull' />
            <Carousel.Caption>
            <h3>Fossil model</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src={headphoneImg} alt='3d printed headphone hanger' />
            <Carousel.Caption>
            <h3>Headphone Hanger</h3>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src={skullImg} alt='3d printed skull' />
            <Carousel.Caption>
            <h3>Skull Decoration</h3>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
      </div>
  </>);
  }
  
  export default Portfolio;