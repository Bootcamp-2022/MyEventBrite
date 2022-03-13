import { Container } from "react-bootstrap";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./Screens/HomeScreen";
//import EventScreen from "./Screens/EventScreen";
import EventScreen1 from "./Screens/EventScreen1";

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
         </Routes>     
        </Container>
      </main>
      <Footer />
      </Router>
    </>
  );
}

export default App;
