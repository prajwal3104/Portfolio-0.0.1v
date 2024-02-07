import Link from 'next/link';
import styles from '../components/style_index.css';
import Spline from '@splinetool/react-spline'; // Assuming Spline is installed
import NavBar from '../components/NavBar';

const Index = () => {
  return (
    <div>
      <NavBar />
      <div className="about">
        <div className="flex-item">
          <Spline scene="https://prod.spline.design/KcIgl93f6iYDfXx9/scene.splinecode" />
        </div>
        <div className="name-container">
            <p className='hey-text'> Hey 👋</p>
            <p className='name-text'> Prajwal here!</p>
            <p className="about-text"> Undergraduate student at Lovely Professional University, <br ></br>Punjab at India 🇮🇳</p>
            </div>
      </div>
    </div>
  );
};

export default Index;
