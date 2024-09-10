import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Frase = ({ frasePersonaje }) => {
  return (
    <>
      <img
        className="w-50"
        variant="top"
        alt={frasePersonaje.character}
        src={frasePersonaje.image}
      />
      <Card>
        <Card.Body className="text-center">
          <Card.Title>{frasePersonaje.character}</Card.Title>
          <Card.Text>{frasePersonaje.quote}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Frase;
