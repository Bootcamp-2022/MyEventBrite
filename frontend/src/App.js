import { Container } from "react-bootstrap";
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./Screens/HomeScreen";


function App() {
  return (
    <>
    <Router>
      <Header />
      <main>
        <Container>
        <Routes>
       < Route path='/' element={<HomeScreen />} exact />
       </Routes>
        </Container>
      </main>
      <Footer />
      </Router>
    </>
  );
}

export default App;
