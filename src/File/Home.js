import React, { useContext } from 'react'
import { Store } from './Datastore'

function Home() {
  const [DData]=useContext(Store)
  return (
    <>
    <div className='homemain'>
        {DData.filter((item)=>(item.cat==='Hollywood') && (item.id===70)).map((data,bolly)=>{
            return(
                <>
              
                <div className='Hcontainer' key={bolly}>
                 
                <img className='himg1' src={data.image} alt='Not Found'/>
                </div>
                </>
            )
        })
      }
      <div className='home2'>
      {DData.filter((item)=>(item.cat==='Hollywood') && (item.id===16) || (item.id===28) ).map((data,bolly)=>{
            return(
                <>
                <div className='Hcontainer' key={bolly}>
                <img className='himg2' src={data.image} alt='Not Found'/>
                </div>
                </>
            )
        })
      }
</div>
    </div>
   
      <h1 className='b2'>The Latest</h1>
      <div className='homelates'>
        <div> 
        {DData.filter((item)=>  (item.id===63)  ).map((data,home)=>{
        return(
          <div>
             <div   key={home}>
                <img className='himg3' src={data.image} alt='Not Found'/>
                </div>
                <div className='hdsc'>
                <h3>{data.Heading}</h3>
                <p className='hds'>{data.description}</p>
                </div>
          </div>
        )
      })

      }
        </div>
        <div>
        {DData.filter((item)=> (item.id===48) ).map((data,home)=>{
        return(
          <div>
             <div   key={home}>
                <img className='himg3' src={data.image} alt='Not Found'/>
                </div>
                <div className='hdsc'>
                <h3>{data.Heading}</h3>
                <p className='hds'>{data.description}</p>
                </div>
          </div>
        )
      })

      }
        </div>
        <div>
        {DData.filter((item)=> (item.id===17)).map((data,home)=>{
        return(
          <div>
             <div   key={home}>
                <img className='himg3' src={data.image} alt='Not Found'/>
                </div>
                <div className='hdsc'>
                <h3>{data.Heading}</h3>
                <p className='hds'>{data.description}</p>
                </div>
          </div>
        )
      })

      }
        </div>
     
    </div>
    <div>
      <h1 className='b2'>Latest Article</h1>
      <div className='Hmlates'>
<div className='latesArticle'>
  <div>
{DData.filter((item)=>(item.cat==='Hollywood') && (item.id>=26)).map((data,holly)=>{
            return(
                <>
              
                <div className='bcontainer1' key={holly}>
                  <div >
                <img className='himg5' src={data.image} alt='Not Found'/>
                </div>
                <div className='dsc1'>
           <h3 >{data.Heading}</h3>
                <p className='ds1'>{data.description}</p>
                </div>
                </div>
                </>
            )
        })
      }
      <div >

      {DData.filter((item)=>(item.cat==='Technology') && (item.id==27)).map((data)=>{
            return(
                <>            
                <img className='himg6' src={data.image} alt='Not Found'/>
                </>
            )
        })
      }

      </div>
     </div>
</div>
<div className='Addsabove'>
  <div className='Adds'>
 Advertisement
 </div>
      
      <div className='Addsbelow'>
        <h1 className='b1'>Latest Post</h1>
      {DData.filter((item)=> (item.id===17) || (item.id===63) || (item.id===48) || (item.id===26) ).map((data,home)=>{
        return(
          <div>
             <div   key={home}>
                <img className='himg4' src={data.image} alt='Not Found'/>
                </div>
                <div className='hdsc'>
                <h3>{data.Heading}</h3>
                <p className='hds'>{data.description}</p>
                </div>
          </div>
        )
      })

      }
    </div>
      
      </div>
    </div>
    </div>
    <div className='lateststory'>
      <h1  className='b2 b3'>Latest Story</h1>
      {DData.filter((item)=> (item.id===12) ).map((data,home)=>{
        return(
          <div className='p1' key={home}>
             
                <div className='lts'>
                <h3 className='lts1'>{data.Heading}</h3>
                <p className='lts2'>{data.fulldescription}</p>
                </div>
          </div>
        )
      })

      }
    </div>
    </>
  )
}

export default Home