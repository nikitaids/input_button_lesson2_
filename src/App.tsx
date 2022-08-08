import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/Fullinput";
import {Input} from "./components/input";
import {Button} from "./components/button";


type MessageType = {
    message:string
}

function App() {

    let [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'}
        ]
    )

    let[title,setTitle] = useState("")



    const addMessage=(title:string)=>{
        let NewMessage = {message: title }
        setMessage([NewMessage,...message])
        setTitle("")
    }

    return (
        <div className="App">
            Hello, samurai! Let's go!
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={"+"} callback={()=>{addMessage(title)}}/>
            {message.map((m, id) => {
                    return (<div key={id}>{m.message}</div>)
                }
            )}

        </div>

    );
}

export default App;
