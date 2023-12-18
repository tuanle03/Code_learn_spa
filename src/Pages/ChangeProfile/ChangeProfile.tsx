import React from 'react'
import Header from '../../components/Header/Header'
import Profile from '../../components/Profile/Profile'
import Footer from '../../components/Footer/Footer';

const ChangeProfile = () => {
    const firstName = 'Huynh';
    const lastName = 'Bong';
    const username = 'bongzua';
    const email = 'abc@gmail.com';
    const password = 'user';
    const avatar= 'https://i.pinimg.com/564x/da/5e/bb/da5ebb9af8a1233498aefb48f57c5b7d.jpg';
  return (
    <div>
    <Header signIn={true} username={username} avatar={avatar} />
    <Profile firstName={firstName} lastName={lastName} username={username} email= {email} password= {password} avatar={avatar} />
    <Footer />
    </div>
  )
}

export default ChangeProfile