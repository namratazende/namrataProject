import React from 'react'
import {Card} from 'react-bootstrap'
import slide1 from './../Images/slide1.jpg';


export const Contact =() => {
        return (
            <div className="class3 m-5">
                <h2 className="text-center">  Contact Us</h2>
       
  
    <Card className="text-center">
    <Card.Img variant="top" src={slide1} style={{height : 550 }}/>

  <Card.Body>
    <h2>Ouick Contact</h2>    
    
    <Card.Text>
        <h3>If you have any questions simply use the following contact details.</h3>
        <br/>
        Address :153, Nagar City Road, Hadapsar, Pune-411013.
        <br/>
        Contact :+ (91) 800 700 6611
        <br/>
        Email : care@ourhospitals.com

    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted"> BEST MEDICAL CARE YOU CAN GET FOR YOU AND YOUR FAMILY.
</Card.Footer>
</Card>
            </div>
        )

}

export default Contact;