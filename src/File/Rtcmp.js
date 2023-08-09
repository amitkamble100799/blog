import React from 'react'
import Home from './Home'
import Bollywood from './Bollywood'
import Technology from './Technology'
import Hollywood from './Hollywood'
import Fitness from './Fitness'
import Food from './Food'
import Error from './Error'
import Lnkcmp from './Lnkcmp'
import {Routes,Route} from 'react-router-dom'
import Datastore from './Datastore'
import Detail from './Detail'
function Rtcmp() {
  return (
    <>
     <Lnkcmp />
     <Datastore >
    <Routes>
    
         <Route path='*' element={<Error/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/Detail/:id' element={<Detail/>}/>
        <Route path='/File/Bollywood' element={<Bollywood/>}/>
        <Route  path='/File/Technology' element={<Technology/>}/>
        <Route path='/File/Hollywood' element={<Hollywood/>}/>
        <Route path='/File/Fitness' element={<Fitness/>}/>
        <Route path='/File/Food' element={<Food/>}/>
       
    </Routes>
    </Datastore>
  
   
    </>
  )
}

export default Rtcmp