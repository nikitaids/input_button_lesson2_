import React, {ChangeEvent, useState} from "react";

type FullinputPropsType = {
    addMessage: (title:string) => void
}

export const FullInput = (props:FullinputPropsType) =>{

    let[title,setTitle] = useState("")

    const OnChangeInputHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.currentTarget.value)
    }

    const OnClickHandler=() =>{
        props.addMessage(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={OnChangeInputHandler} type="text"/>
            <button onClick={OnClickHandler}>+</button>
        </div>
    )
}