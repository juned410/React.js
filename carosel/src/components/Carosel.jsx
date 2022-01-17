import {Carousel} from "react-bootstrap";
import "./H1.css";

export const Carosel = () => {
  return (
    <div><Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="images/slide1.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>THE TAJ MAHEL</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="images/slide2.jpg"
        alt="Second slide"
        height="500px"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="images/slide3.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <div className="testing">
    <h1>this is heading</h1>
  </div>
  </div>
  );
};
