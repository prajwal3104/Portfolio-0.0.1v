import Link from 'next/link';
import styles from './style_index.css';
import Spline from '@splinetool/react-spline'; // Assuming Spline is installed
import NavBar from '../components/NavBar';

const Index = () => {
  return (
    <div>
        <link rel="stylesheet" href="/style.css" />
        <NavBar />

      <div className="about">
        <div className="flex-item">
          <Spline scene="https://prod.spline.design/KcIgl93f6iYDfXx9/scene.splinecode" />
        </div>
        <div className="Name">
          <p>Hey 👋 <br /> Prajwal here!</p>

        </div>
      </div>
    </div>
  );
};

export default Index;
