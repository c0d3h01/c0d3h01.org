import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full min-h-screen relative overflow-hidden text-white flex flex-col bg-gradient-to-b from-gray-900 to-gray-800">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center px-6 md:px-12">
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;