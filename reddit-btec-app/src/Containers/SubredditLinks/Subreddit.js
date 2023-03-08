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
                <button>{props.button}</button>
                <button>{props.button1}</button>
                </li>
                </ul>
            )}
        </div>

        
    )
}
