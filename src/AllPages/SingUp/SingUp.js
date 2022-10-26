import React from 'react';
import { useContext } from 'react';
import { Container } from 'react-bootstrap';
// import { GoogleAuthProvider } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

import { AuthContex } from '../../contex/AuthProvider/AuthProvider';

const SingUp = () => {
    const googleProvider = new GoogleAuthProvider();
    const { googleProviderLogin } = useContext(AuthContex);
    const googleSingIn = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <Container>
            <form className='d-flex justify-content-center align-items-center p-1 p-5'>
                <div className=' '>
                    <div className="form-outline mb-4">
                        <input type="email" id="form2Example1" className="form-control" />
                        <label className="form-label" for="form2Example1">Name</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="email" id="form2Example1" className="form-control" />
                        <label className="form-label" for="form2Example1">Photo URL</label>
                    </div>
                    <div className="form-outline mb-4">
                        <input type="email" id="form2Example1" className="form-control" />
                        <label className="form-label" for="form2Example1">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                        <input type="password" id="form2Example2" className="form-control" />
                        <label className="form-label" for="form2Example2">Password</label>
                    </div>

                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="form2Example31" />
                                <label className="form-check-label" for="form2Example31"> Remember me </label>
                            </div>
                        </div>

                        <div className="col">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                    <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>

                    <div className="text-center">
                        <p>or sign up with:</p>
                        <button type="button" className="btn btn-link btn-floating mx-1">
                            Facebook
                        </button>

                        <button type="button" onClick={googleSingIn} className="btn btn-link btn-floating mx-1">
                            Google
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            Github
                        </button>
                    </div></div>
            </form>
        </Container >
    );
};

export default SingUp;