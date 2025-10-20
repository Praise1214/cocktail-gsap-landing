import { gsap } from 'gsap';
import Navbar from './components/Navbar.jsx';

import {ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
    </main>
  )
}

export default App
