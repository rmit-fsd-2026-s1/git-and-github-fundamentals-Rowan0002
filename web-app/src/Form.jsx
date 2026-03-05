
import new_logo from './new_logo.png';
import './App.css';

function Form(){
    return (
        <div class="App">
          <header>
            <img src={new_logo} class="Image" alt="logo" />
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
            <button type="button" id="submitbutton" onclick="document.getElementById('div').innerHTML = <header>test</header>">test</button>
    
          </header>
        </div>
      );
}

export default Form