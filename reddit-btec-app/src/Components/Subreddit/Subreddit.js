import { DropdownMenu } from "../../Containers/SubredditLinks/Subreddit";
export const Subreddit = () => {

  return (
    <div className="dropdown">
        <h2 className="subreddit-title">Subreddit</h2>
        <DropdownMenu 
        title={'Popular Communities'}
        button={'Home'}
        button1={'AskReddit'}
        />
        <DropdownMenu 
        title={'Gaming'}
        button={'Warframe'}
        button1={'Fallout'}
        />
        <DropdownMenu 
        title={'Sports'}
        button={'Football'}
        button1={'Basketball'}
        />
        <DropdownMenu 
        title={'Random'}
        button={'Interestingasfuck'}
        button1={'facepalm'}
        />
        <DropdownMenu 
        title={'Health & Fitness'}
        button={'Vegan'}
        button1={'Bodybuilding'}
        />
        <DropdownMenu 
        title={'Dating'}
        button={'Tinder'}
        button1={'Hinge'}
        />
        <DropdownMenu 
        title={'Masclininity'}
        button={'NoFap'}
        button1={'Self Improvement'}
        />
        
    </div>
  );
}