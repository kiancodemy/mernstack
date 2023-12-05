import { useParams } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import axios from "axios";

function Productscreen() {
  const { id } = useParams();
  const [product, setitem] = useState({});

  useEffect(() => {
    const getbyid = async () => {
      const { data } = await axios.get(`/api/products/${id}`);

      setitem(data);
    };
    getbyid();
  }, [id]);

  return (
    <div style={{ padding: "0 10px" }}>
      <Link to="/" className="btn btn-light my-3">
        Go back
      </Link>
      <Row>
        <Col md={5}>
          <Image
            style={{ borderRadius: "10px" }}
            src={product.image}
            alt={product.image}
            fluid
          ></Image>
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={product.rating}
                text={`${product.numReviews} review`}
              ></Rating>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>price:</Col>
                  <Col>
                    <strong>{product.price}</strong>
                  </Col>

                  <Col></Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>status</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? "instock" : "out of stock"}
                    </strong>
                  </Col>

                  <Col></Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  <span>Add to cart</span>
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Productscreen;
