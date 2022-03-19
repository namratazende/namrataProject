import React from 'react'
import {CardGroup} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import slide11 from './../Images/slide11.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function About()
{
    return(
        <div>
            <div className="class2 m-5">
                <h1 className="text-center"> About Us</h1>
                <CardGroup>
  <Card>
    <Card.Img variant="top" src={slide11} style={{height : 550 }}/>
    
  </Card>
  
  <Card>
   
    <Card.Body>
      <h1>BEST MEDICAL CARE YOU CAN GET FOR YOU AND YOUR FAMILY</h1>
      <h5>
      OurHospital Multispecialty Hospital and Diagnostic Centre Pvt Ltd 
      is A Reliable and one of the Best Cancer Treatment Hospital 
      in Pune,Oncology Treatment Hospital in Pune,General Surgery
       Hospital in Pune,Laparoscopic Surgery Hospital in Pune,Piles,
       Fissure,Fistula Treatment Hospital in Pune,Gynecology Treatment 
       Hospital in Pune,gastroenterology Hospital in Pune,Diabetology 
       Hospital in Pune,Urology Hospital in Pune,Orthopedic
        and Joint/Knee Replacement Surgery Hospital in Dhankawadi,
        Pune. OurHospital Multispecialty Hospital and Diagnostic Centre Pvt 
        Ltd are leading multi-specialty hospital situated at 
        Dhankawadi,Pune. Providing Comprehensive, High quality 
        and ethical medical health care to people. The 50 bedded 
        Multi Disciplinary Super-speciality Hospital, started with 
        the objective of providing world class healthcare specialised 
        medical facilities at reasonable costs. Pawar Multispeciality 
        Hospital and Diagnostic Centre Pvt. Ltd. cares about you and your 
        health care needs. You can entrust your health care in the right
         hands. At Pawar Multispeciality Hospital, we combine our efficient 
         manpower with technological advancements to bring you the best 
         healthcare solutions. When you need the latest Health Care for 
         you and your family, Pawar Multispeciality Hospital and Diagnostic 
         Centre Pvt. Ltd. Pune is there to cater for your health needs. .
      </h5>
    </Card.Body>

  </Card>




   
      
  
</CardGroup>
               
            </div>
        </div>

        
    )
}

export default About;
