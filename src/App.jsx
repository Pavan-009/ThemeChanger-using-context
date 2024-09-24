
import { useEffect, useState } from 'react'
import './App.css'
import Card from './Components/Card'
import ThemeBtn from './Components/Themebtn'
import { ThemeContextProvider } from './contexts/Theme'

function App() {

  const [themeMode,setThemeMode] = useState("light");

  const darkTheme = ()=>{setThemeMode('dark')}

  const lighttheme = () => {setThemeMode('light')}

  useEffect(()=>{

    document.querySelector('html').classList.remove('dark','light');
    document.querySelector('html').classList.add(themeMode);

  },[themeMode])
  return (

    <ThemeContextProvider value = {{themeMode,darkTheme,lighttheme}}>
<div className="flex flex-wrap min-h-screen items-center">
<div className="w-full">
    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
    <ThemeBtn/>
    </div>
    <div className="w-full max-w-sm mx-auto">
    <Card/>
    </div>
</div>
</div> 
    </ThemeContextProvider>
  )
}

export default App
