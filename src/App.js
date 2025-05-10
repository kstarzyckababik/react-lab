import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";

function App() {
    const [email, setEmail] = useState('fracz@agh.edu.pl');
    const [ausername,setausername] = useState(null);
    function handleChange(event) {
        setEmail(event.target.value);
    }



    return (


        <div>
            <h1>System do zapisów na zajęcia</h1>

            <h2>Twój e-mail to {email}</h2>

            { !ausername &&(

            <div>

            <input type="text" value={email} onChange={handleChange}/>
            <button type="button" onClick={() => setausername(email)}>

                Wchodzę
            </button>
            </div>
                )}

            {ausername && (

                    <div>
                        <h4>ZALOGOWANY {email}</h4>
                    <a onClick={() => setausername(null)}> Wyloguj </a>
                    </div>
                )}

        </div>

    );
}
export default App;