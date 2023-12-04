import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import Homescreen from "./screen/Homescreen";
import Productscreen from "./screen/productscreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="py-3">
          <Routes>
            <Route
              path="/"
              element={
                <Container>
                  <Homescreen></Homescreen>
                </Container>
              }
            ></Route>
            <Route path="/product/:id" element={<Productscreen />}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
