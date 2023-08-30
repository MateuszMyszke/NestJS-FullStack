import TextInput from '../TextInput/TextInput';
import styles from './RegisterForm.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { API_URL } from '../../../confing';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';


const RegisterForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [status, setStatus] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password, passwordRepeat);

    const requestData = {
      email,
      password,
      passwordRepeat
    }

    const option = {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData),
    };

    setStatus('loading');
    fetch(`${API_URL}/auth/register`, option)
      .then(res => {
        if(res.status === 201){
          setStatus('success');
        } else if(res.status === 400){
          setStatus('clientError');
        } else if(res.status === 409){
          setStatus('loginError');
        } else{
          setStatus('serverError');
        }
      })
      .catch(err => {
        setStatus('serverError');
      });
  }

  return(
    <form className={styles.register} onSubmit={handleSubmit}>
      <h1>Sign up</h1>

      {status === "success" &&(
        <Alert variant='success'>
          <Alert.Heading>Success!</Alert.Heading>
          <p>You have been successful registered</p>
        </Alert>
      )}

      {status === "serverError" &&( 
        <Alert variant='danger'>
          <Alert.Heading>Something went wrong!</Alert.Heading>
          <p>Unexpected error please try again</p>
        </Alert>
      )}

      {status === "clientError" &&( 
        <Alert variant='danger'>
          <Alert.Heading>Not enough data</Alert.Heading>
          <p>You have to fill all the fields</p>
        </Alert>
      )}

      {status === "loginError" &&( 
        <Alert variant='warning'>
          <Alert.Heading>Login already in use</Alert.Heading>
          <p>You have to use other login</p>
        </Alert>
      )}

      {status === "loading" &&( 
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      <div className={styles.dform}>
        <label>Email: </label>
        <TextInput value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" type="text"></TextInput>
      </div>
      <div className={styles.dform}>
        <label>Password: </label>
        <TextInput value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" type="password"></TextInput>
      </div>
      <div className={styles.dform}>
        <label>PasswordRepeat: </label>
        <TextInput value={passwordRepeat} onChange={e => setPasswordRepeat(e.target.value)} placeholder="Enter passwordRepeat" type="password"></TextInput>
      </div>
      <Button type="submit" value="Submit">Submit</Button>
    </form>
  )
};

export default RegisterForm;