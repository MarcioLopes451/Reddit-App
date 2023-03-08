import React, {useState} from "react";


export const Subreddit = () => {
    const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
        <h2 className="subreddit-title">Subreddits</h2>
      <button onClick={handleOpen} className='subreddit-btn'>Popular Communites</button>
      {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button>BBIB</button>
          </li>
          <li className="menu-item">
            <button>Ask Reddit</button>
          </li>
        </ul>
      ) : null}
       <button onClick={handleOpen} className='subreddit-btn'>Gaming</button>
      
    </div>
  );
}