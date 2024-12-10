import React, { useRef } from 'react';
import moment from 'moment'

function DateObject() {

  

    let months=["January","February","March","April","May","June" ,"July","August","September","October","November","December"]
    let days=["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ]

    //9 ways to create a new date object:

    let birthDay =new Date(1999,2,22,12,30,12,100);
    //let birthDay=new Date(1999,2)
   //let birthDay=new Date(1999,2,22)
   //let birthDay=new Date(1999,2,22,12)
   //let birthDay=new Date(1999,2,22,12,30)
   //let birthDay=new Date(1999,2,22,12,30,12)

   //let birthDay=new Date(987654321012);
   //let birthDay=new Date("9 May 1996 ")
   //let birthDay=new Date()

    //Date Get Methods-9
    console.log(birthDay.getFullYear())
    console.log(months[ birthDay.getMonth()])
    console.log(birthDay.getDate())
    console.log(days[birthDay.getDay()])
    console.log(birthDay.getHours())
    console.log(birthDay.getMinutes())
    console.log(birthDay.getSeconds())
    console.log(birthDay.getMilliseconds())
    console.log(birthDay.getTime())

  return (
    <div>
      <form>
        <div>
          <h1>Date and Moment js</h1>
        <label>Date Of Birth </label>
        <input type="datetime-local" 
        
        onChange={(eo)=>{
           let selectedDate =new Date(eo.target.value);
           moment(selectedDate).add(1, 'days').calendar();  
           
           console.log(selectedDate.getFullYear())
           console.log(months[ selectedDate.getMonth()])
           console.log(selectedDate.getDate())
           console.log(days[selectedDate.getDay()])
           console.log(selectedDate.getHours())
           console.log(selectedDate.getMinutes())
           console.log(selectedDate.getSeconds())
           console.log(selectedDate.getMilliseconds())
           console.log(selectedDate.getTime())

           let timeDurationinMS =15*24*60*60*1000;
           let timeEndDurationinMS=selectedDate.getTime()+timeDurationinMS;
           let timeEndDuration=new Date(timeEndDurationinMS)
           console.log(timeEndDuration)

        }}></input>
        </div>
        <br></br>
       
      </form>

      <div>
            <button type="button" onClick={()=>{
          console.log(moment().format('MM Do YYYY, HH:mm:ss a'))
            }}>Moment</button>
            
        </div>
    </div>
  )
}

export default DateObject
