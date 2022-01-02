import './App.css';
import Form from './Form';

function App() {
  return (
   <div className="form-content-right">
     <form  className="form">
       <h1>Get started with us today! Create your account by filling out the information below.</h1>
       <div className="form-inputs">
         <label id="username" htmlFor= "username" className="form-label" >Username
           
         </label>
         <input type="text" name="username" className="form-input" placeholder="Enter your username"/>
       </div>
       <div className="form-inputs">
         <label id="email" htmlFor= "email" className="form-label" >Email
           
         </label>
         <input type="email" name="email" className="form-input" placeholder="Enter your email"/>
       </div>
       <div className="form-inputs">
         <label  htmlFor= "password" className="form-label" >Password
           
         </label>
         <input id="password" type="password" name="password" className="form-input" placeholder="Enter your password"/>
       </div>
       <div className="form-inputs">
         <label  htmlFor= "password2" className="form-label" >Confirm password
           
         </label>
         <input id="password2" type="password2" name="password2" className="form-input" placeholder="Enter your password2"/>
       </div>

     </form>
   </div>

  );
}

export default App;
