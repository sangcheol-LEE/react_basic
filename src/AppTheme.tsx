import React,{ useContext } from 'react'
import "./appTheme.css";
import { DarkModeContext, DarkModeProvider } from './context/DarkModeContext';

const AppTheme = () => {
   // 사용하고 싶은 컴포넌트 범위밖을 감싸준다.
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
   const {dark, handleToggle} = useContext(DarkModeContext)
   // context값으로 끌고와서 사용해줌
   return (
      <div>
         ProductDetail
         <p>Dark Mode :
            {
               dark
               ? <span style={{backgroundColor:"#000", color: "#fff"}}>Dark Mode</span>
               : <span>White Mode</span>

            }
         </p>
         <button onClick={()=> handleToggle()}>Click me</button>
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
