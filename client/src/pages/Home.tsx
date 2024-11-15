import React, { useContext, useEffect } from "react";
import MoodContext from "../context/MoodContext";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/LoginContext";
import axios from 'axios';



const Home: React.FC = () => {

  const [inputValue, setInputValue] = React.useState('');
  const context = useContext(MoodContext);
  const userContext: any = useContext(UserContext);
  const { loginToken } = userContext;
  const navigate = useNavigate();

  // if user isn't logged in, forcefully push user to login page
  useEffect(() => {
    if (!loginToken.username)
      navigate('/login');
  }, []);

  if (!context) {
    throw new Error("Mood must be used within a MoodProvider");
  }

  async function sendMood(mood: string) {
    await axios.post('/openai/api/data', { mood })
      .then(response => {
        console.log('Response from server:', response.data);
        const playlistObj = {username: loginToken.username, playlist: response.data};
        localStorage.setItem(`${loginToken.username}_playlist`, JSON.stringify(playlistObj));
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const { mood, setMood } = context;
  
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // store mood in database, also store current datetime. this will be for the history later. 
    // pass mood to the playlist page using useContext
    setMood(inputValue);
    await sendMood(mood);
    navigate('/currentplaylist');

  };

  function onMoodChange(e: any) {
    setInputValue(e.target.value)
  }

  return (
    <div className="container text-center pt-5 vh-100">
      <form action="" onSubmit={handleSubmit}>
        <label className="form-label " htmlFor="">How are you feeling today?</label>
        <input
          className="form-control required w-50 p-3 mx-auto p-2"
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