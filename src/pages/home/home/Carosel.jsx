import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css'
import slider1 from '../../../assets/slider/cr_1.jpg'
import slider2 from '../../../assets/slider/cr_2.jpg'
import slider3 from '../../../assets/slider/cr_3.jpg'
import { Button, Form, InputGroup } from 'react-bootstrap';

function Carosel() {
  return (
    <Carousel>
      <div className='relative'>
        <div className='carosel-text row justify-content-center align-items-center'>
          <div className="col-md-6  col-10 banerDiss text-light">
            <h2 className='fw-bold tomato_color'>"Rev Up Your Imagination with the Ultimate Car Toy Collection!"</h2>
            <p className='text-justify'>"Explore a world of excitement and adventure with our extensive range of car toys. From sleek sports cars to rugged off-roaders, we have the perfect vehicles to fuel your child's imagination. Our high-quality and durable toys are designed to provide endless <span className="d-none d-md-block">hours of fun and entertainment. Discover the joy of zooming down imaginary tracks, conquering off-road terrain, and embarking on thrilling racing adventures. Shop now and let your child's imagination hit the accelerator!</span>"</p>
            <div className='px-5'>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter Yout Email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="danger" id="button-addon2">
                  Subcribe
                </Button>

              </InputGroup>
            </div>
          </div>

        </div>
        <img className='sliderImg relative' src={slider2} alt="Image 1" />
      </div>
      <div className='relative'>
        <div className='carosel-text row justify-content-center align-items-center'>
          <div className="col-md-6 col-10 banerDiss text-light">
            <h2 className='fw-bold tomato_color'>"Discover the Thrill of the Road with Our Car Toy Collection!"</h2>
            <p className='text-justify'>"Buckle up and get ready for the ride of your life with our unbeatable selection of car toys! From sleek sports cars to rugged off-roaders, we have something for every young driver. Our high-quality toys are built to last and designed to inspire <span className="d-none d-md-block">hours of fun and entertainment. Discover the joy of zooming down imaginary tracks, conquering off-road terrain, and embarking on thrilling racing adventures. Shop now and let your child's imagination hit the accelerator!</span>"</p>
            <div className='px-5'>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter Yout Email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="danger" id="button-addon2">
                  Subcribe
                </Button>

              </InputGroup>
            </div>
          </div>

        </div>
        <img className='sliderImg relative' src={slider3} alt="Image 1" />
      </div>
      <div className='relative'>
        <div className='carosel-text row justify-content-center align-items-center'>
          <div className="col-md-6 col-10 banerDiss text-light">
            <h2 className='fw-bold tomato_color'>"Rev Up Your Imagination with the Ultimate Car Toy Collection!"</h2>
            <p className='text-justify'>"Explore a world of excitement and adventure with our extensive range of car toys. From sleek sports cars to rugged off-roaders, we have the perfect vehicles to fuel your child's imagination. Our high-quality and durable toys are designed to provide endless <span className="d-none d-md-block">hours of fun and entertainment. Discover the joy of zooming down imaginary tracks, conquering off-road terrain, and embarking on thrilling racing adventures. Shop now and let your child's imagination hit the accelerator!</span>"</p>
            <div className='px-5'>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter Yout Email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="danger" id="button-addon2">
                  Subcribe
                </Button>

              </InputGroup>
            </div>
          </div>

        </div>
        <img className='sliderImg relative' src={slider1} alt="Image 1" />
      </div>
    </Carousel>
  )
}

export default Carosel