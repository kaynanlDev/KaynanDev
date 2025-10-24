import './App.css'
import Header from './componentes/sections/Header'
import Hero from './componentes/sections/Hero'
import About from './componentes/sections/About'
import Services from './componentes/sections/Services'
import Projetos from './componentes/sections/Projetos'


function App() {
  return (
     <>
     <Header />
     <main>
      <Hero />
      <About />
      <Services />
      <Projetos />
     </main>
     </>
  )
}

export default App
