import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PatientList from './components/PatientList';
import NotFound from './components/NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPatient from './components/AddPatient';
import About from './components/About';
import Contact from './components/Contact';
import Hospital from './components/Hospital';

import { Link } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
      <div>
        <div  className="text-center m-5">
          <h1 >Welcome to Our Multispeciality Hospital</h1>

          <Link to="/hospital" className="btn btn-success m-2">Hospital</Link>
          <Link to="/" className="btn btn-success m-2">Patients</Link>
          <Link to="/about" className="btn btn-success m-2">About Us</Link>
          <Link to="/contact" className="btn btn-success m-2">Contact Us</Link>
        </div>
        
        <div>
          <Switch>
            <Route exact path="/" component={PatientList} />
            <Route path="/add" component={AddPatient} />
            <Route path="/about" component={About} />

            <Route path="/contact" component={Contact} />
            <Route path="/hospital" component={Hospital} />

            <Route path="/patients/edit/:id" component={AddPatient} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;