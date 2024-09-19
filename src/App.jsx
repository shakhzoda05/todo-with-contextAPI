import { useContext, useState } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'


function App() {

  return (
   
   <div className='p-10'>
     <Form/>
     <List/>
   </div>
   
  )
}

export default App
