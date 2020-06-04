import React, {useState, useEffect} from 'react';
import * as AuthService from './AuthService'
import { useHistory } from 'react-router-dom';

const Login = () => {

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [responseCode, setResponseCode] = useState(null);

    let history = useHistory();

    useEffect(() => {
        if(AuthService.loggedIn()){
            history.replace('/');
        }
    });

    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs({...inputs, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSubmitted(true);
        if(inputs.email && inputs.password){
            try{
                const response = await AuthService.login(inputs);
                setResponseCode(response.status);
                setError("");
                history.replace('/');
            }catch (error)
            {
                setError(error.message);
                setResponseCode(null);
            }
        }
    }

    // eve.holt@reqres.in

    return (
        <div className = "w-50">
            <h2>Login</h2>
            {error && <div className = "alert alert-danger" role="alert">{error}</div>}
            {responseCode === 200 && <div className="alert alert-success">Login Successfull</div>}
            <form autoComplete = "off">
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="email" 
                        name="email"
                        className={`form-control ${submitted && !inputs.email ? 'is-invalid' : ''}` }
                        value={inputs.email} 
                        onChange={handleChange}
                    />
                    {submitted && !inputs.email && <small className="text-danger">Email requerido</small>}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input 
                        type="password" 
                        name="password"
                        className={`form-control ${submitted && !inputs.password ? 'is-invalid' : ''}` }
                        value={inputs.password} 
                        onChange={handleChange}
                    />
                    {submitted && !inputs.password && <small className="text-danger">Password requerido</small>}
                </div>
                <div>
                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;