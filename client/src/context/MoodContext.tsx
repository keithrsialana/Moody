import React from "react"

interface MyComponentProps {
  children: React.ReactNode;
  mood: string;
  setMood: (mood: string) => void;

}

export const MoodContext = React.createContext('');

export const MoodProvider: React.FC<MyComponentProps> = ({ children }) => {
  const [mood, setMood] = React.useState<string>('');

  const setTheMood = (mood: string) => {
    setMood(mood);
  }

  const initialContextValue = { mood, setTheMood };


  return (
    <MoodContext.Provider value={initialContextValue.mood}>
      {children}
    </MoodContext.Provider>
  );

}


export default MoodContext