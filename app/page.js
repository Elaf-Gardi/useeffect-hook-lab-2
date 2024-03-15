"use client"
import Form from '../Components/Form/Form'
import UserCard from '../Components/UserCard/UserCard'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [user, setUser] = useState("");
  const [api, setApi] = useState(null)


  const fetchData = async(user) =>{
    try{
      const response = await fetch(`https://api.github.com/users/${user}
      `)
      const data = await response.json()
      console.log(data)
      setApi(data)
    }
    catch (error){
      console.error("Error fetching data:", error);
    }
  }

  useEffect (()=>{
    fetchData(user);
  }, [user])

  return (
    <div className="card">
      <Form submit = {setUser}/>
      {api && <UserCard data ={api}/> }
    </div>
  );
}
