import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Main from './pages/main';
import Profile from './pages/profile';
import PageContainer from './components/PageContainer';
import Navbar from './components/Navbar/NavbarIndex';
import Form from './components/Form';
import { app } from './firebase-config';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  const handleAction = ({id}:{id:any}) => {
    const authentication = getAuth();
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then(({response}:{response:any}) => {
          navigate('/main')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch(({error}:{error:any}) => {
          console.log(error.code)
          if (error.code === 'auth/wrong-password') {
            toast.error('Please check the Password');
          }
          if (error.code === 'auth/user-not-found') {
            toast.error('Please check the Email');
          }
        })
    }
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then(({response}:{response:any}) => {
          navigate('/main')
          sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        .catch(({error}:{error:any}) => {
          if (error.code === 'auth/email-already-in-use') {
            toast.error('Email Already in Use');
          }
        })
    }
  }

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/main')
    }
  }, [])



  return (
    <div className="App">
       <>  <Navbar />
      <ToastContainer />
      <Switch>
          <Route path='/login'
            element={
              <Form
                title="Login"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction({id:1})}
              />}
          />
          <Route path='/register'
            element={
              <Form
                title="Register"
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction({id:2})}
              />}
          />
      
        <Route path="/Profile">
          <PageContainer>
          <Profile />
          </PageContainer>
        </Route>

        <Route path="/">
          <PageContainer>
            <Main/>
          </PageContainer>
        </Route>
      </Switch>
      </>
  </div>
  );
}

export default App;
