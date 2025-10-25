import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({ theme, setTheme }) => {
    useEffect(()=>{
        const preferseDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(theme || (preferseDarkMode ? 'dark' : 'light'))
    }, [setTheme, theme])

    useEffect(()=>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')        
        }else{
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    },[theme])
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-[34px] h-[34px] p-1.5 border border-gray-500 rounded-full flex items-center justify-center"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <img src={assets.sun_icon} alt="Light mode" className="w-full h-full" />
      ) : (
        <img src={assets.moon_icon} alt="Dark mode" className="w-full h-full" />
      )}
    </button>
  )
}

export default ThemeToggleBtn
