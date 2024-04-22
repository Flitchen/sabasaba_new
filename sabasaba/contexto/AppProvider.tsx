import React, { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'

let AppContext = createContext({});

function AppProvider({children} : PropsWithChildren) {
const SERVER_URL: String = "http://api.7saba.com/";
  const [is_logged_in, set_is_logged_in] = useState(0)
  const [is_selected_id, set_is_selected_id] = useState()
  const [Iliyochaguliwa, setIliyochaguliwa] = useState('');
  function pick_language(language: string){
    console.log(language)
  }
  return (
    <AppContext.Provider value={{SERVER_URL,is_selected_id, set_is_selected_id,is_logged_in, set_is_logged_in,Iliyochaguliwa, setIliyochaguliwa}}>
        {children}
    </AppContext.Provider>
  )
}

export default AppProvider

export var useApp = () => useContext(AppContext)