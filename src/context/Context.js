import React, { useState, useContext, createContext } from "react";



const AppContext = createContext();


const AppProvider = ({ children }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  const openCalendar = () => setIsCalendarOpen(true);
  const closeCalendar = () => setIsCalendarOpen(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <AppContext.Provider
      value={{
        isPopupOpen,
        openPopup,
        closePopup,
        isCalendarOpen,
        openCalendar,
        closeCalendar,
        searchQuery,
        handleSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
