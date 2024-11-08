import React, { Dispatch, ReactNode, SetStateAction } from "react"

interface MoodContextType {
  mood: string;
  setMood: Dispatch<SetStateAction<string>>;
}

interface MoodProviderProps {
  children: ReactNode;
}

export const MoodContext = React.createContext<MoodContextType | undefined>(undefined);

export const MoodProvider: React.FC<MoodProviderProps> = ({ children }) => {
  const [mood, setMood] = React.useState<string>('');


  return (
    <MoodContext.Provider value={{ mood, setMood }}>
      {children}
    </MoodContext.Provider>
  );

}


export default MoodContext