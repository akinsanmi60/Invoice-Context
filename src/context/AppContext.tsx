import React, { useState } from "react";
import localforage from "localforage";
import { APP_CONTEXT } from "../constants/localKeys";

type InitDataProp = {
  showNavbar: boolean;
  darkTheme: boolean;
  screenLoading: boolean;
  escapeOverflow: boolean;
  initLoading: boolean;
  nameH: string;
};

type ContextType = {
  stateData: InitDataProp;
  setStateData: React.Dispatch<React.SetStateAction<InitDataProp>>;
  toggleNavbar: () => void;
  setInitLoading: (booleanValue: boolean) => void;
  setScreenLoading: (booleanValue: boolean) => void;
  setEscapeOverflow: (booleanValue: boolean) => void;
};

export const AppCtx = React.createContext({} as ContextType);

type ContextProps = {
  children: React.ReactNode;
};

export const AppContextProvider = ({ children }: ContextProps) => {
  const [stateData, setStateData] = useState<InitDataProp>({
    showNavbar: true,
    darkTheme: false,
    screenLoading: false,
    escapeOverflow: false,
    initLoading: false,
    nameH: "Akinsami",
  });

  const toggleNavbar = React.useCallback(() => {
    setStateData(prev => {
      const updateData = {
        ...prev,
        showNavbar: !prev?.showNavbar,
      };

      const { darkTheme, initLoading, showNavbar } = updateData;
      localforage.setItem(APP_CONTEXT, { darkTheme, initLoading, showNavbar });
      return updateData;
    });
  }, []);

  const setInitLoading = React.useCallback((booleanValue: boolean) => {
    setStateData(prev => ({
      ...prev,
      initLoading: booleanValue,
    }));
  }, []);

  const setScreenLoading = React.useCallback((booleanValue: boolean) => {
    setStateData(prev => ({
      ...prev,
      screenLoading: booleanValue,
    }));
  }, []);

  const setEscapeOverflow = React.useCallback((booleanValue: boolean) => {
    setStateData(prev => ({ ...prev, escapeOverflow: booleanValue }));
  }, []);

  React.useEffect(() => {
    (async () => {
      const appContext: InitDataProp | null = await localforage.getItem(
        APP_CONTEXT,
      );
      if (appContext) {
        setStateData(prev => ({ ...prev, showNavbar: appContext.showNavbar }));
      }
    })();
  }, []);

  return (
    <AppCtx.Provider
      value={{
        stateData,
        setStateData,
        toggleNavbar,
        setInitLoading,
        setScreenLoading,
        setEscapeOverflow,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};

export const useAppContext = () => React.useContext(AppCtx);
