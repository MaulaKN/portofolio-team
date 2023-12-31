import { Button, Card } from 'react-bootstrap';
import web from '../assets/img/web-developer.jpg'
import uiux from '../assets/img/uiux.jpg';
import '../App.css'

function Service() {
  return (
    <section className="service" id="service">
      <div>
        <h2>Layanan Kami</h2>
        <p></p>
        <div className='list-service'>
          <div className='card-service' style={{ width: '30rem' }}>
              <Card >
              <Card.Img variant="top" src={web} />
              <Card.Body>
                  <Card.Title>Web Developer</Card.Title>
                    <Card.Text>
                      
                    </Card.Text>
                  <Button variant="primary">Go</Button>
              </Card.Body>
              </Card>
              <Card>
              <Card.Img variant="top" src={uiux} />
              <Card.Body>
                  <Card.Title>UI/UX Designer</Card.Title>
                    <Card.Text>
                      
                    </Card.Text>
                  <Button variant="primary">Go</Button>
              </Card.Body>
              </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;