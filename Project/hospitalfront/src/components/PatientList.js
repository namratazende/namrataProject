import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import patientService from '../services/patient.service';



const PatientList = () => {

  const [patients, setPatients] = useState([]);

  const init = () => {
    patientService.getAll()
      .then(response => {
        console.log('Printing employees data', response.data);
        setPatients(response.data);
      })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    patientService.remove(id)
      .then(response => {
        console.log('employee deleted successfully', response.data);
        init();
      })
      .catch(error => {
        console.log('Something went wrong', error);
      })
  }

  return (
    
   
    <div className="container">
     
      <h3>List of Patients</h3>
      <hr/>
      <div>
        <Link to="/add" className="btn btn-primary mb-2">Add Patient</Link>
        

        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Contact</th>

            </tr>
          </thead>
          <tbody>
          {
            patients.map(patient => (
              <tr key={patient.id}>
                <td>{patient.firstName}</td>
                <td>{patient.lastName}</td>
                <td>{patient.age}</td>

                <td>{patient.gender}</td>

                <td>{patient.address}</td>
                <td>{patient.contactNo}</td>
                <td>
                  <Link className="btn btn-info" to={`/patients/edit/${patient.id}`}>Update</Link>
                  
                  <button className="btn btn-danger ml-2" onClick={() => {
                    handleDelete(patient.id);
                  }}>Delete</button>
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
        
      </div>
    </div>
    
  );
}

export default PatientList;