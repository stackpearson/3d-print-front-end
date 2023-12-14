import '../styles/Landing.css'
import designImg from '../assets/designing-on-computer.jpg';
import printerImg from '../assets/printer.jpg';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Landing() {
  return (<>
    <div className="landing">

      <div className='landing-intro'>
        <div>
          <p>3D Print Pardadise is here to transform your ideas into reality. Just let us know what you have in mind then one of our representatives will reach out to help finalize a design with you. Our printing experts will take that design and get to work printing it while you sit back and relax!</p><br/>
          <ul>
            <li>No large startup costs for a printer</li>
            <li>No wasting time or materials getting settings dialed in</li>
            <li>No experience necessary</li>
          </ul><br/>
          <Link to='/submit'>
            <Button variant="primary" size="lg">
              Get Started!
            </Button>{' '}
          </Link>
        </div>
      </div>

      <div className='landing-image-container'>
        <img className='landing-image' src={designImg} alt='Digital drawing tablet being drawn on' />
        {/* <img className='landing-image' src={printerImg} alt='Model house being printed with a 3d printer' /> */}
      </div>
    </div>
</>);
}

export default Landing;