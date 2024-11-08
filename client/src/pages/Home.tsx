import React, { useContext, useEffect } from "react";
import MoodContext from "../context/MoodContext";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/LoginContext";

const Home: React.FC = () => {

  const [inputValue, setInputValue] = React.useState('');
  const context = useContext(MoodContext);
  const userContext:any = useContext(UserContext);
  const {loggedInUser} = userContext;
  const naviate = useNavigate();
  
  useEffect(()=>{
    if(!loggedInUser.username)
      naviate('/login');
  },[]);

  if (!context) {
    throw new Error("Mood must be used within a MoodProvider");
  }
  const { mood, setMood } = context;
  React.useEffect(() => {
    console.log(`the mood is now ${mood}`);
  }, [mood]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`the mood was ${mood}`);
    console.log('Submitted value:', inputValue);
    // store mood in database, also store current datetime. this will be for the history later. 
    // pass mood to the playlist page using useContext
    setMood(inputValue);
  };

  function onMoodChange(e:any){
    setInputValue(e.target.value)
  }

  return (
    <div className="container text-center pt-5 vh-100">
      <form action="" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="">How are you feeling today?</label>
        <input
          className="form-control required"
          value={inputValue}
          onChange={onMoodChange}
          type="text"
          id="moodInput"
          placeholder="I'm feeling..."
        />
        <div id="mood-help">We'll never share your mood with anyone else.</div>
        <input type="submit" className="btn-primary" />
      </form>

    </div>
  )
}

export default Home