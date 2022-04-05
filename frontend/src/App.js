import { Container } from "react-bootstrap";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./Screens/HomeScreen";
//import EventScreen from "./Screens/EventScreen";
import EventScreen1 from "./Screens/EventScreen1";
import CartScreen from './Screens/CartScreen'
import Reserve from './components/Reserve'

function App() {
  return (
    <>
    <Router>
      <Header />
      <main>
        <Container>
        <Routes>
       < Route path='/' element={<HomeScreen />} exact />
       <Route path='/event/:id' element={<EventScreen1 />} /> 
       <Route path= '/reserve/:id' element={<Reserve />} />
       <Route path= '/cart/:id' element={<CartScreen />} />
       <Route path= '/tickets' element={<CartScreen />} />
         </Routes>     
        </Container>
      </main>
      <Footer />
      </Router>
    </>
  );
}

export default App;
