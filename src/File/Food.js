import React, { useContext } from 'react'
import { Store } from './Datastore'
import '../App.css'
import { Link } from 'react-router-dom';
function Food() {
  const [DData]=useContext(Store);
  return (
    <div className='Mainc'>
      <div className='seccnt'>
        <h1 className='b1'>Food</h1>
       {DData.filter((item)=>item.cat==='Food').map((data,bolly)=>{
            return(
                <>
              
                <div className='bcontainer' key={bolly}>
                  <div >
                <img className='img' src={data.image} alt='Not Found'/>
                </div>
                <div className='dsc'>
               <Link to={`/Detail/${data.id}`}> <h3>{data.Heading}</h3></Link>
                <p className='ds'>{data.description}</p>
                <p className='ds'>{data.date}</p>
                
                </div>
                
                </div>
                <hr className='hr'/>
                </>
                 
            )
        })

        } 
      
        </div>
        <div className='seccnt'>
          <h1  className='b1'>Top Posts</h1>
        {DData.filter((item)=>(item.cat==='Food') && (item.id===45)).map((data,bolly)=>{
            return(
                <>
              
                <div className='blcontainer' key={bolly}>
                  <div >
                <img className='bsimg' src={data.image} alt='Not Found'/>
                </div>
                <div className='bdsc'>
                <span className='bsh'>{data.Heading}</span> <span id='st'  className='number'>1</span>
                </div>
                <p className='ds'>{data.date}</p>
              <hr></hr>
                </div>
                </>
            )
        })
      }

{
  DData.filter((item)=>item.id===39).map((data,ind)=>{
    return(
      <div className='short' key={ind}>
        <div className='bsimg'>
         <img className='bsimg1' src={data.image} alt='Not Found'/>
         </div>
         <div className='bdsc2'>
                <h3 className='bsh'>{data.Heading}</h3> 
                <span className='ds'>{data.date}</span>
                </div>
                <div id='number'><span  className='number'>2</span></div>

             
      </div>
    )
   

  })
}
        <hr/>
        {
  DData.filter((item)=>item.id===49).map((data,ind)=>{
    return(
      <div className='short' key={ind}>
        <div className='bsimg'>
         <img className='bsimg1' src={data.image} alt='Not Found'/>
         </div>
         <div className='bdsc2'>
                <h3 className='bsh'>{data.Heading}</h3> 
                <span className='ds'>{data.date}</span>
                </div>
                <div id='number'><span  className='number'>3</span></div>

             
      </div>
    )
   

  })
}
        <hr/>
        {
  DData.filter((item)=>item.id===44).map((data,ind)=>{
    return(
      <div className='short' key={ind}>
        <div className='bsimg'>
         <img className='bsimg1' src={data.image} alt='Not Found'/>
         </div>
         <div className='bdsc2'>
                <h3 className='bsh'>{data.Heading}</h3> 
                <span className='ds'>{data.date}</span>
                </div>
                <div id='number'><span  className='number'>4</span></div>

             
      </div>
    )
   

  })
}
<div className='Adds'>
  Advertisement
</div>

        </div>
        
    </div>
   
  )
}

export default Food