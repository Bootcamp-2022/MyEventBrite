import { Container } from "react-bootstrap";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./Screens/HomeScreen";
import EventScreen1 from "./Screens/EventScreen1";
import CartScreen from './Screens/CartScreen'
import Reserve from './components/Reserve'
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";

function App() {
  return (
    <>
    <Router>
      <Header />
      <main>
        <Container>
        <Routes>
       < Route path='/' element={<HomeScreen />} exact />
       < Route path='/login' element={<LoginScreen />}  />
       <Route path="/profile" element={<ProfileScreen />} />
       <Route path="/register" element={<RegisterScreen />} />
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

