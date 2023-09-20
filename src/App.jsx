import './App.css'
import Catagoties from './components/Catagories/Catagoties'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Navbar from './components/Navbar/Navbar'
import { Review } from './components/Review/Review'
import Services from './components/Service/services'
function App() {
 return (
    <main>
     <Navbar />
     <Header />
     <Catagoties />
     <Menu />
     <Review />
     <Services />
     <Footer />
    </main>
  )
}

export default App
