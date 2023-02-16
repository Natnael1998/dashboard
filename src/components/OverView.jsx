import React from 'react'
import {GoSearch} from "react-icons/go"
import {BsFillBellFill,BsDashLg ,BsPlusSquareFill} from "react-icons/bs"
import {RxDividerVertical} from "react-icons/rx"
import { Line } from 'react-chartjs-2'
import "../Overview.css"


import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement

} from "chart.js"
import { UserAuth } from '../context/AuthContext'
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement

)
const OverView = () => {
  const { user, logOut } = UserAuth();
  const data = {
    labels:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],
    datasets :[{
      
data:[20,32,36,25,0,40,57,45,44,43,41,34,22,5,15],
backGroundColor:"transparent",
borderColor:"#3751FF",
pointBorderColor:"transparent",
pointBorderWidth:4,
tension:0.5,




    },
    {
      
      data:[10,42,45,49,45,45,45,45,59,59,54,53,52,51,50,49],
      backGroundColor:"transparent",
      borderColor:"#DFE0EB",
      pointBorderColor:"transparent",
      pointBorderWidth:4,
      tension:0.5,
      
      
      
          }
  
  
  ]
  };
  const options = {
    plugins:{
     
    
    },
    scales:{
     
      x :{
        position:"right",
        reverse:true,
       
        grid:{
          display :false,
          
        }
      },
      y :{
        border:{
          display:false
        },
      
        position:"right",
      
      }
     

    }
  };
  return (
    <div className='overview'>
<div className='overviewContain'>
<div className='overviewNav'>
  <div>
  <h1 className='overviewNavText'>
  Overview
</h1>
  </div>

<div className='overviewMain'>
<div className='overviewIcon'> 
<GoSearch  className='searchIcon'/>
<div className='bellContain'>
<BsFillBellFill  className='bellIcon'/>
<div className='ball'></div>
</div>
<RxDividerVertical size={32}  className='line'/>
</div>

<div className='account'>
  <p>{user?.email ? user?.email.slice(0, user?.email.lastIndexOf("@")) : "default"}</p>
  <img src="https://th.bing.com/th/id/OIP.IrUBHhdMo6wWLFueKNreRwHaHa?pid=ImgDet&rs=1" alt="" />
  
</div>



</div>

</div>



<div className='boxContain'>

  <div className='box'>
<p>Unresolved</p>
<h1>60</h1>
  </div>

  <div className='box'>
<p>Overdue</p>
<h1>16</h1>
  </div>

  <div className='box'>
<p>Open</p>
<h1>43</h1>
  </div>

  <div className='box'>
<p>On hold</p>
<h1>64</h1>
  </div>


</div>


<div className='graphContain'>
  <div className='graphMain'>
  <div className='graphItems'>
    <div className='graphtext'>
      <h1>Today's trends</h1>
      <p>as of 25 May 2019, 9:41 PM</p>
    </div>

    <div className='legend'>
<BsDashLg  color='#3751FF' size={19}/>
<p>Today</p>

<BsDashLg  color='#DFE0EB' size={19}/>
<p>Yesterday</p>


    </div>

  </div>
  <div className='line'>
  <Line  data={data} options={options}></Line>
 

  </div>
  
  </div>
 
  
  


<div className='graphDataContain'>
<div className='graphData'>
<p>Resolved</p>
<h1>449</h1>
</div>

<div className='graphData'>
<p>Received</p>
<h1>426</h1>
</div>

<div className='graphData'>
<p>Average first response time</p>
<h1>33m</h1>
</div>

<div className='graphData'>
<p>Average response time</p>
<h1>3h 8m</h1>
</div>

<div className='graphData'>
<p>Resolution within SLA</p>
<h1>94%</h1>
</div>

</div>

</div>



<div className='overviewFooter'>
<div className='footer'>
<div className='footerText'>
  <div className='footerTexts'>
  <h1 >Unresolved tickets</h1>
  <p >Group: Support</p>
  </div>

  <div>
    <p className='blue'>View details</p>
  </div>
  
</div>
<div className='footerDetails'>
<div >
  <h2 className='footerDetailsText'>Waiting on Feature Request</h2>
 
</div>

<div>
  <h2 className='footerDetailsNumber'>4238</h2>
</div>


</div>


<div className='footerDetails'>
<div >
  <h2 className='footerDetailsText'>Awaiting Customer Response</h2>
 
</div>

<div>
  <h2 className='footerDetailsNumber'>1005</h2>
</div>


</div>


<div className='footerDetails'>
<div >
  <h2 className='footerDetailsText'>Awaiting Developer Fix</h2>
 
</div>

<div>
  <h2 className='footerDetailsNumber'>914</h2>
</div>


</div>


<div className='footerDetails'>
<div >
  <h2 className='footerDetailsText'>Pending</h2>
 
</div>

<div>
  <h2 className='footerDetailsNumber'>281</h2>
</div>


</div>










</div>


<div className='footer'>
<div className='footerText'>
  <div className='footerTexts'>
  <h1 >Tasks</h1>
  <p >Today</p>
  </div>

  <div>
    <p className='blue'>View all</p>
  </div>
  
</div>
<div className='footerDetails'>
<div >
  
  <h2 className='footerDetailsText'>Create new task</h2>
 
</div>

<div>
  <h2 className='footerDetailsNumber'>
    <BsPlusSquareFill />
  </h2>
</div>


</div>


<div className='footerDetails'>
<div className='checkBox'>

<input type="checkbox" />
  <h2 className='footerDetailsText'>Finish ticket update</h2>
 
</div>

<div>

  <h2 className='footerDetailsText urgent'>URGENT</h2>
</div>


</div>


<div className='footerDetails'>
<div className='checkBox'>
  <input type="checkbox" />
  <h2  className='footerDetailsText'>Create new ticket example</h2>
 
</div>

<div>
  <h2 className='footerDetailsText new'>NEW</h2>
</div>


</div>


<div className='footerDetails'>
<div className='checkBox'>
  <input type="checkbox" />
  <h2 className='footerDetailsText'>Update ticket report</h2>
 
</div>

<div>
  <h2 className='footerDetailsText defualt'>DEFAULT</h2>
</div>


</div>










</div>


</div>






</div>
    </div>
  )
}

export default OverView