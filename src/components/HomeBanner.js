import React from 'react';
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";


const HomeBanner = () => {
    return(
      <div>
      <div className="home-banner">
        <div className="our-story">
          <h1 className="our-story-card-title" data-uia="hero-title">Effective Medicine, New Medicine Everyday.</h1>
          <h2 className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Welcome To VD RESEARCH CHEM</h2>

          <div className="input-group">
            <input type="text" className="form-control" placeholder="Drug Name" />
            <Link to = "/register" className="input-group-button btn btn-danger text-white">Search Now</Link>
          </div>
        </div>
        <div className="shadow"></div>
        <img className="concord-img vlv-creative" src="https://wallpaperaccess.com/full/4204907.jpg"  alt=""></img>
      </div>
      {/* Features Section */}
      <section className="white-section" id="features">
        <div>
          <div className="row">
            <div className="feature-box col-lg-4">
              <i className="icon fas fa-hand-holding-medical fa-4x"></i>
              <h3 className="feature-title">Our Journey in Healthcare Excellence</h3>
              <p>Discover the Vision, Mission, and Values That Drive PharmaHub's Commitment to Exceptional Patient Care and Scientific Advancement</p>
            </div>

            <div className="feature-box col-lg-4">
              <i className="icon fas fa-stethoscope fa-4x"></i>
              <h3 className="feature-title">Explore Our Comprehensive Product Line</h3>
              <p>Discover Cutting-edge Medicines, Healthcare Solutions, and Wellness Products Tailored to Meet Diverse Healthcare Needs.</p>
            </div>

            <div className="feature-box col-lg-4">
              <i className="icon fas fa-heart fa-4x"></i>
              <h3 className="feature-title">Beyond Medicines: Our Range of Services</h3>
              <p>Committed to Providing Holistic Healthcare Services, Including Consultations, Health Programs, and Patient Support Initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}

      <div className="container mt-5">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://i.pinimg.com/originals/08/8d/34/088d34a1b719babee183262b02edb280.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>Discover Quality Medicines</h2>
              <h3>Explore a wide range of effective and high-quality medicines for your well-being.</h3>
          </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://i.pinimg.com/originals/72/59/6e/72596e499f868bdfce8220559315fcf5.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
            <h2 >Healthcare Innovation</h2>
            <h3 >Experience innovative healthcare solutions designed to enhance your life and well-being.</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-image"
              src="https://i.pinimg.com/originals/6d/ab/ca/6dabcace6f64646d05e063802e91d404.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
            <h2>Trusted Pharmacy Services</h2>
            <h3>Reliable pharmacy services with a commitment to your health and satisfaction.</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <section className="white-section" id="features">
        <div>
          <div className="row">
          <div class="card card-container feature-box col-lg-4">
            <img src="https://d1m8gswelyy0gk.cloudfront.net/sites/default/files/styles/large/public/project/pictures/Prescription-280l.jpg?itok=XjMnYxrw" alt="Card Image" />
              <div class="card-content">
                  <h3 className='feature-title'>Online Prescription Refill and Ordering</h3>
                  {/* <p>This is a sample card with some content. You can customize it as needed.</p> */}
              </div>
          </div>

            <div class="card card-container feature-box col-lg-4">
            <img src="https://th.bing.com/th/id/OIP.xo5JTTupr9UbOEA5rTndSQHaFe?rs=1&pid=ImgDetMain" alt="Card Image" />
              <div class="card-content">
                  <h3 className='feature-title'>Over-the-Counter (OTC) Medications</h3>
                  {/* <p>This is a sample card with some content. You can customize it as needed.</p> */}
              </div>
          </div>

          <div class="card card-container feature-box col-lg-4">
            <img src="https://th.bing.com/th/id/OIP.Kq07Al8VNnzf0mvhEZKtkwHaFE?rs=1&pid=ImgDetMain" alt="Card Image" />
              <div class="card-content">
                  <h3 className='feature-title'>Drug Safety and Regulation</h3>
                  
              </div>
          </div>
          
          </div>
        </div>
      </section>

      </div>
    )
  }
  
  export default HomeBanner;