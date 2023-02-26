import React from "react";

export default function Background(props){
    return (
        <div className="backdrop" onClick={props.onClick} />
    )
}