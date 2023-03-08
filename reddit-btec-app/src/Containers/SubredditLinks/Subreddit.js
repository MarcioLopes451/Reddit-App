import React, {useState} from "react";

export function DropdownMenu(props){
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }
    return (
        <div>
            <button className="subreddit-btn" onClick={handleOpen}>{props.title}</button>
            {open && (
                <ul className="menu">
                <li className="menu-item">
                <button className="subreddit-btn">
                    <img src={props.img} alt={props.alt}></img>
                    {props.button}
                </button>
                <button className="subreddit-btn1">
                    {props.button1}
                </button>
                </li>
                </ul>
            )}
        </div>

        
    )
}
