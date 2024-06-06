import React, {useState} from 'react';
import 'mdbreact/dist/css/mdb.css';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import SignupPage from './Signup';
import Protected from '../../components/Protected';

function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            console.log(userCredential);
            const user= userCredential.user;
            localStorage.setItem('token', user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            navigate("/home");
        } catch (error) {
            console.error(error);
            
        }
    }

  return (
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
        </MDBCol>

        <MDBCol col='4' md='6'>
        <h1>Login</h1>

            <form onSubmit={handleSubmit}>

            

          <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" value={password} onChange={(e) => setPassword(e.target.value)}/>


      

          <MDBBtn className="mb-4 w-100" type='submit' size="lg">Login</MDBBtn>

          <div className="text-center">
    <p>Don't have an account? <Link to="/" component={SignupPage} >Register</Link></p>
         </div>

         
          </form>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default LoginPage;