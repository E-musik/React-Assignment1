import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div className='box'>
        <div className='left'>
          <div className='overlay'>
            <h1>HELLO WORLD</h1>
            <p>Great way to greet You</p>
            <span>
            <p>login with social media</p>
            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i> Login with Facebook</a>
            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a>
            </span>

          </div>
        </div>

        <div className='right'>
          <h4>Login</h4>
          <p>Don't have an account? <a href="#" Create your account></a> It takes less than a munite</p>
          <div className='input'>
            <input type="text" placeholder='User Name' />
            <br />
            <input type="password" placeholder='password'/>
          </div>
          
          <br />
          <div className='Remember-Me--Forget-Password'>
          <label>
              <input type="checkbox" name="item" checked/>
              <span class="text-checkbox"> Remember Me</span>
            </label>
            <p>Forget Password</p>
          </div>
          <br />
          <button>Login</button>  
        </div>
        

      </div>
    </>
  )
}

export default App
