import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
const Frase = () => {
    return (
        <>
            <Card>
      <Card.Img className="w-25" variant="top" src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638" />
      <Card.Body className="text-center">
        <Card.Title>personaje</Card.Title>
        <Card.Text>
          Frase
        </Card.Text>
      </Card.Body>
    </Card>
        </>
    );
};

export default Frase;