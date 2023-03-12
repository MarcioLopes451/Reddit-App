import React, {useState} from "react";

export function DropdownMenu(props){
    const [open, setOpen] = useState(false);
    

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div>
             <button className='subreddit-btn' onClick={handleOpen}>{props.title}</button>
            {open && (
                <div className={`edit ${open ? `active` : `inactive`}`}>
                <ul className='menu'>
                <li className='menu-item'>
                <a href="/" className="subreddit-links">
                    <img
                    src={props.img} 
                    alt={props.alt}>
                    </img>
                    {props.button}
                </a>
                <a href="/" className="subreddit-links1">
                    {props.button1}
                </a>
                </li>
                </ul>
                </div>

                )}
        </div>

        
    )
}
