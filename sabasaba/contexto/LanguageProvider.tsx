import React, { PropsWithChildren, createContext, useContext, useState } from 'react'

let LanguageContext = createContext({});

function LanguageProvider({children} : PropsWithChildren) {
  const [selected_language, set_selected_language] = useState("En")
  function pick_language(language: string){
    console.log(language)
  }
  return (
    <LanguageContext.Provider value={{language:"zh",pick_language}}>
        {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider

export var useLang = () => useContext(LanguageContext)