
import React from 'react'
import { Routes ,Route , Navigate } from 'react-router-dom'
import {Home , AllFoods , Cart , Checkout , Contact , FoodDetails , Login , Register} from '../pages';


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}></Route>
        <Route path='/restaurant' element={<Navigate to='/home'/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/foods' element={<AllFoods/>}></Route>
        <Route path='/foods/:id' element={<FoodDetails/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
    </Routes>
  )
}

export default Routers
