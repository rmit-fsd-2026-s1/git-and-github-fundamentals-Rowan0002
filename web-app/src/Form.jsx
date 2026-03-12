
import new_logo from './new_logo.png';
import './App.css';

function ButtonChange() {
  window.location.href = "/FormCode";
  console.log("test");
}

function Form(){
    return (
        <div className="App">
          <header>
            <img src={new_logo} className="Image" alt="logo" />
            <h1>
              Welcome to Epic cool app registration! Please fill out the following:
            </h1>
            <form>
              <label id="namelabel">First Name: </label>
              <input type="text" id="name_input"></input>
              <br></br>
              <label>Email: </label>
              <input type="email" id="email_input"></input><br></br>
              
              
            </form>
            <button type="button" id="submitbutton" onClick={()=>ButtonChange }>test</button>
    
          </header>
        </div>
      );
}


export default Form