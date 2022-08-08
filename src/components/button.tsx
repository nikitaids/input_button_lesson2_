import React from 'react';

type ButtonPropsType = {
    name:string
    callback:()=>void
}

export const Button = (props: ButtonPropsType) => {

    const OnClickHandler = () => {
        props.callback()
    }

    return (
        <button onClick={OnClickHandler}>{props.name}</button>
    );
};

