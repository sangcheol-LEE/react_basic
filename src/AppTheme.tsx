import React,{ useContext } from 'react'
import "./appTheme.css";

const AppTheme = () => {
   return (
      <>
         <Header />
         <Main />
         <Footer />
      </>
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
   return (
      <div>
         ProductDetail
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
