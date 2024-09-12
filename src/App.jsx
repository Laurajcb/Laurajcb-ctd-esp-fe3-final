import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './Components/utils/global.context';

import Navbar from './Components/Navbar'
import Home from './Routes/Home'
import Footer from './Components/Footer'
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail'

import styles from './Styles/globals.module.css';


function App() {
  return (
    <ContextProvider>
      <div className={styles.globals}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
          <Footer />
        </Router>
      </div>

    </ContextProvider>

  );
}

export default App;