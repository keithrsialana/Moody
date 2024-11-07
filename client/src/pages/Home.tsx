import React, { useContext } from "react";
import MoodContext from "../context/MoodContext";

const style = {
  moodHelp: {
    color: 'white'
  },
};


const Home: React.FC = () => {

  const [inputValue, setInputValue] = React.useState('');
  const context = useContext(MoodContext);
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
    //store mood in database, also store current datetime. this will be for the history later. 
    // pass mood to the playlist page using useContext
    setMood(inputValue)



  };

  return (
    <div className="container text-center pt-5 vh-100">
      <form action="" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="">How are you feeling today?</label>
        <input
          className="form-control required"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          id="moodInput"
          placeholder="I'm feeling..."
        />
        <div style={style.moodHelp} id="mood-help" className="form-text">We'll never share your mood with anyone else.</div>
        <input type="submit" className="btn-primary" />
      </form>

    </div>
  )
}

export default Home