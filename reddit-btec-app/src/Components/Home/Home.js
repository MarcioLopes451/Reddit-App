import React from "react";
import { Subreddit } from "../Subreddit/Subreddit";
import { Posts } from "../Posts/Posts";

export default function Home() {
    return (
        <div>
            <Subreddit />
            <Posts />
        </div>
        
    )
}