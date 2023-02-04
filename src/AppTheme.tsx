import React,{ useContext } from 'react'
import "./appTheme.css";
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';

const AppTheme = () => {
   return (
      <DarkModeProvider>
         <Header />
         <Main />
         <Footer />
      </DarkModeProvider>
   )
}

const Header = () => {
   return (
      <header className="header">
         Header
      </header>
   )
}

const Main = () => {
   return (
      <main className="main">
         Main
         <Profiles />
         <Productss />
      </main>
   )
}

const Profiles = () => {
   return (
      <div>
         Profiles
         <User />
      </div>
   )
}

const User = () => {
   return (
      <div>
         User
      </div>
   )
}

const Productss = () => {
   return (
      <div>
         Productss
         <ProductDetail/>
      </div>
   )
}

const ProductDetail = () => {
   const {darkMode, toggleDarkMode} = useContext(DarkModeContext)
   return (
      <div>
         ProductDetail
         <p>Dark Mode : <span>{darkMode.toString()}</span></p>
         <button onClick={() => toggleDarkMode()}>Toggle</button>
      </div>
   )
}

const Footer = () => {
   return (
      <footer className="footer">
         Footer
      </footer>
   )
}
export default AppTheme
