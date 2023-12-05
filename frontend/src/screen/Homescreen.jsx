import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import axios from "axios";

function Homescreen() {
  const [get, set] = useState([]);
  useEffect(() => {
    const gett = async () => {
      console.log("done");

      const { data } = await axios.get("/api/products");
      console.log(data);
      set(data);
      console.log("done");
    };
    gett();
  }, []);
  return (
    <>
      <h1>latest ProductS</h1>
      <Row>
        {get.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product}></Product>
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Homescreen;
