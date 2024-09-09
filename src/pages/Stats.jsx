import { emailService } from "../services/email.service"
import { useEffect, useState} from "react"
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);








export  function Stats (){

    const [data, setData] = useState({})

    useEffect( ()  =>  {
         getData()
    },[])

    async function getData() {
        const folders = await emailService.countStatusTypes()
        // data.datasets[0].data = Object.values(folders)
        // console.log("test",data.datasets[0].data)
        var data = {
            labels: ['inbox', 'sent', 'draft', 'trash'],
            datasets: [
              {
                label: '# of Votes',
                data: Object.values(folders),
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
              },
            ],
          };
          //console.log(data)
          setData(data)
    }

   

    
    //console.log("before",data)
    if(Object.keys(data).length === 0) return
    return <Pie data={data} />
}