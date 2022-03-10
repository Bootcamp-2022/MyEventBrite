import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./Screens/HomeScreen";


function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <HomeScreen/>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
