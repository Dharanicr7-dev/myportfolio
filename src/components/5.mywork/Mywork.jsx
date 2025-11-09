import React from 'react'
import './mywork.css'
import mywork from '../../assets/mywork.jpg'
import mywork_data from '../../assets/mywork_data'
import showmore from '../../assets/arr.png'

const Mywork = () => {
  return (
    <div id='work' className='mywork'>
        <div className="mywork-title">
            <h1>My Work</h1>
            {/* <img src={mywork} alt="" /> */}
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return <img key={index} src={work.w_img} alt="" />
            })}
        <div className="mywork-showmore">
            <p>Show More</p>
            <img src={showmore} alt="" />    
        </div>              
                      
        </div>
        
    </div>
  )
}

export default Mywork