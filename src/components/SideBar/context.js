import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, SetIsSidebarOpen] = useState(false);
  
  const openSidebar = () => {
    SetIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    SetIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
//custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
