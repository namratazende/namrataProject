import { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import patientService from "../services/patient.service";

const AddPatient = () => {
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');

    const[age, setAge] = useState('');
     const[gender, setGender] = useState('');
    const[address, setAddress] = useState('');

    const[contactNo, setContact] = useState('');

    const history = useHistory();
    const {id} = useParams();

    const savePatient = (e) => {
        e.preventDefault();
        
        const patient = {firstName,lastName,age,gender,address,contactNo, id};
        if (id) {
            //update
            patientService.update(patient)
                .then(response => {
                    console.log('Employee data updated successfully', response.data);
                    history.push('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                }) 
        } else {
            //create
            patientService.create(patient)
            .then(response => {
                console.log("employee added successfully", response.data);
                history.push("/");
            })
            .catch(error => {
                console.log('something went wroing', error);
            })
        }
    }

    useEffect(() => {
        if (id) {
            patientService.get(id)
                .then(patient => {
                    setFirstName(patient.data.firstName);
                    setLastName(patient.data.lastName);
                    setAge(patient.data.age);
                    setGender(patient.data.gender);
                    setAddress(patient.data.address);
                    setContact(patient.data.contactNo)
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [])
    return(
        <div className="container">
            <h3>Add Patients</h3>
            <hr/>
            <form>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter First Name of Patient"
                    />

                </div>

                <br/>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter Last Name of Patient"
                    />

                </div>

                <br/>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        placeholder="Enter Age"
                    />

                </div>

                <br/>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        placeholder="Mention Gender of Patient"
                    />

                </div>

                <br/>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter Address"
                    />
                </div>

                <br/>
                <div className="form-group">
                    <input 
                        type="text" 
                        className="form-control col-4"
                        id="contactNo"
                        value={contactNo}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Enter Contact Number"
                    />

                </div>
                <br/>
                <div >
                    <button onClick={(e) => savePatient(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr/>
            <Link to="/">Back to List</Link>
        </div>
    )
}

export default AddPatient;