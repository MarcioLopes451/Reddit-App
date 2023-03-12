import React, {useState} from "react";

export const Post = (props) => {
    const [open, setOpen] = useState(false);
    

    const handleOpen = () => {
        setOpen(!open);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div 
        className="posts-section">
            <form onSubmit={handleSubmit}>
            <h2>Title - {props.title}</h2>
            <input
            type='text'
            placeholder="Post..."
            />
            <div>{props.username}</div>
            <div>{props.time}</div>
            <div className="comments">
                <p onClick={handleOpen}>Comments</p>
                {open && (
                    <div className="comment-sections">
                        <p>{props.date}</p>
                        <h3>{props.usernames}</h3>
                        <p>{props.titles}</p>
                        <p>{props.comment}</p>
                    </div>
                )}
            </div>

            </form>
       
    </div>
    )
}