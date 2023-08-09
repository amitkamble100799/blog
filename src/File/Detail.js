import { useContext } from "react";
import Avatar from '../img/Avatar.png'
import { Store } from "./Datastore";
import {useParams } from "react-router-dom";
import {AiTwotoneLike} from 'react-icons/ai'
import {GrShareOption} from 'react-icons/gr'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterSquare} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'

const Detail = () => {
    const [DData]=useContext(Store);
  var {id}=useParams();
  id=Number(id);

  return (
    <>
    <div className="detail1">
      {DData.filter((item)=>item.id===id).map((data,bolly)=>{
            return(
                <>
              <div className="mdetai"  key={bolly}> 
             
              <div className='like-share'>
             <div className='like'>
                 <AiTwotoneLike/> 
                     <p>Like</p>
                        </div>
                  <div className='share'>
                   <GrShareOption/> 
                   <p>Share</p>
                        </div>
    
              </div>
              
              <div>
                 <div className='mimage'>
                 <h3>{data.Heading}</h3>
                 <div className="avtaricon">
                 <div className="avtar">
                  <div className="avimg">
                  <img src={Avatar} alt='Not Found'/>
                  </div>
                   <div>
                  <p>{data.name}</p>
                  <p className='ds'>{data.date}</p>
                 </div>
                 </div>
                 <div className="lg">
                 < AiFillFacebook/>
                <AiFillTwitterSquare/>
                <AiFillInstagram/>
                <AiFillYoutube/>
                 </div>
                
                 </div>
                  <div >
                <img className='im' src={data.image} alt='Not Found'/>
                </div>
                <div className='dsc'>
                <p className='dtds'>{data.fulldescription}</p>
                </div>
                <div className="js1">
                <span className="js">React</span>  <span className="js">Javascript</span> <span  className="js">animaton</span>
              <p> <AiTwotoneLike/> </p>
              <hr/>
              <div className="avtar1">
                  <div className="avimg">
                  <img src={Avatar} alt='Not Found'/>
                  </div>
                   <div>
                    <span className='ds'>Written</span>
                  <p>{data.name}</p>
                  <p className='ds'>{data.date}</p>
                 </div>
                 </div>
              <hr/>
              </div>
                </div>
               
              </div>
             
              </div>
                </>
            )
        })

        }
   
   </div>
   <div></div>
   <div className="detailsmall">
    <p className="mr">
    <h4 >More From The Siren</h4>
    <hr className="mr1"/>
    </p>
    
   <div>
   {DData.filter((item)=>(item.id===32)).map((data,bolly)=>{
          return(
              <>
             <div className='blcontainer1' key={bolly}>
               <img className='dmg' src={data.image} alt='Not Found'/>
               <p className='bsh'>{data.Heading}</p>
               <div className="avc">
              <div>
               
              <img src={Avatar} alt='Not Found' className="av"/>
              
              </div>
              <div>
              
               <p className='ds'>{data.date}</p>
               <p className='ds'>{data.name}</p>
               </div>
               </div>
          </div>
              </>
          )
      })
    }
</div>
<div>
{DData.filter((item)=>(item.id===51)).map((data,bolly)=>{
          return(
              <>
             <div className='blcontainer1' key={bolly}>
               <img className='dmg' src={data.image} alt='Not Found'/>
               <p className='bsh'>{data.Heading}</p>
               <div className="avc">
              <div>
              <img  src={Avatar} alt='Not Found' className="av"/>
              </div>
              <div>
               <p className='ds'>{data.date}</p>
               <p className='ds'>{data.name}</p>
               </div>
               </div>
          </div>
              </>
          )
      })
    }
</div>
<div>
{DData.filter((item)=>(item.id===9)).map((data,bolly)=>{
          return(
              <>
             <div className='blcontainer1' key={bolly}>
               <img className='dmg' src={data.image} alt='Not Found'/>
               <p className='bsh'>{data.Heading}</p>
               <div className="avc">
              <div>
               
              <img src={Avatar} alt='Not Found' className="av"/>
              
              </div>
              <div>
              
               <p className='ds'>{data.date}</p>
               <p className='ds'>{data.name}</p>
               </div>
               </div>
          </div>
              </>
          )
      })
    }
</div>

   </div>
        </>
  )
}

export default Detail
