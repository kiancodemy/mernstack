import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Homescreen from "./screen/Homescreen";
function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Homescreen></Homescreen>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
