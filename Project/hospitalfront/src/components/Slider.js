import React from 'react'
import {Carousel} from 'react-bootstrap'
import slide2 from './../Images/slide2.jpg';
import slide4 from './../Images/slide4.jpg';
import slide5 from './../Images/slide5.jpg';
import slide0 from './../Images/slide0.jpg';

export const Slider =() => {
        return (
            <div className="m-5">
               
                <Carousel>
        <Carousel.Item>
    <img
      className="d-block  w-100"
      style={{height : 600}}
      //style={{width : 1000}}
       
      src={slide4}
      alt="First slide"
    />
    <Carousel.Caption>
    <h1>Robotic Knee Joint</h1>
      <h1>Relacement</h1>
      <p>Our Hospistak is 1st in Pune,2nd in Maharashtra<br/> and 8th in the India to have this Robotic machine </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>

    <img
      className="d-block w-100"
     style={{height : 600}}

      src={slide2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h1 >Introducing MRI 3 Tesla</h1>
      <h1 >Mangnetom Vida</h1>
      <p >1st In India Redefining MRI imaging. We are in the process of upgradation.</p>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
            style={{height : 600}}

      src={slide0}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1 >Department of Mother and</h1>
      <h1 >Child Care</h1>
      <p >The Department of Obstetrics and Gynaecology offers<br/>dedicated services for the reproduction helth and<br/>gynaecological needs of women in a homely.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
            style={{height : 600}}

      src={slide4}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1 >Department Of</h1>
      <h1 >Neuroscience Unit</h1>
      <p >The specially of Neurosciences deals with diseases of brain and spine across all age groups</p>
    </Carousel.Caption>
  </Carousel.Item>




<Carousel.Item>
    <img
      className="d-block w-100"
            style={{height : 600}}

      src={slide5}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h1 >Advance Critical Care Unit</h1>
      <p >Our Hospital Emergency Department(ED) is association with<br/>
        the Department of Critical Care (ICU) provides timely,<br/>
        high-quality acute care to patients, 24 hours a day. </p>
    </Carousel.Caption>
  </Carousel.Item>


  
</Carousel>
            </div>
        )

}

export default Slider;