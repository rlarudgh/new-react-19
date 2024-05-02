import { createContext, ReactNode, useReducer, Dispatch } from "react";

interface DarkModeType {
  darkMode: boolean;
}

interface DarkModeAction {
  type: "Click";
  darkMode: boolean;
}

type DarkModeDispatch = Dispatch<DarkModeAction>;

export const DarkModeContext = createContext<DarkModeType>({ darkMode: false });
export const DarkModeDispatch = createContext<DarkModeDispatch>(() => null);

const darkModeReducer = (state: DarkModeType, action: DarkModeAction) => {
  switch (action.darkMode) {
    case true:
      return {
        ...state,
        darkMode: true,
      };
    case false:
      return {
        ...state,
        darkMode: false,
      };
    default:
      return state;
  }
};

interface PropsType {
  children: ReactNode;
}

export function DarkModeProvider({ children }: PropsType) {
  const initialDarkModeState = {
    darkMode:
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches),
  } as const;
  const [darkMode, changeDarkModeDispatch] = useReducer(
    darkModeReducer,
    initialDarkModeState
  );

  return (
    <DarkModeContext.Provider value={darkMode}>
      <DarkModeDispatch.Provider value={changeDarkModeDispatch}>
        {children}
      </DarkModeDispatch.Provider>
    </DarkModeContext.Provider>
  );
}
