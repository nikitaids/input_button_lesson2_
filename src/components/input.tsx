import React, {ChangeEvent} from 'react';

type InputPropsType = {
    title:string
    setTitle:(title:string)=>void
}

export const Input = (props:InputPropsType) => {

    const OnChangeInputHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        props.setTitle(event.currentTarget.value)
    }


    return (
        <div>
            <input value={props.title} onChange={OnChangeInputHandler}/>
        </div>
    );
};

