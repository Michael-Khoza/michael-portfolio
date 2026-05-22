import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Credentials from './components/Credentials'
import Experience from './components/Experience'
import AIAgent from './components/AIAgent'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Credentials />
        <Experience />
        <AIAgent />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
