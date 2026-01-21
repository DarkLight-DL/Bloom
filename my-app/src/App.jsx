// import './App.css'
// import "@fontsource/roboto"
// import Home from "./components/Home"

// function App() {

//   return (
//     <>
//       <Home />
//     </>
//   )
// }

// export default App



import './App.css'
import "@fontsource/roboto"
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Heading from './components/Heading';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Heading />
      <About />
      <Footer />

    </>

  );
}

export default App;
