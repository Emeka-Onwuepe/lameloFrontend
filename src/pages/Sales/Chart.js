import React, { useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';



const Chart = ({pizzas, salad, wings, burger, platter, topping, background, border, shadow}) => {
    const res = [pizzas, salad, wings, burger, platter, topping]

    const datas={
        chartData:{
            labels: ["Pizza(s)", "Salad(s)", "Wing(s)", "Burger(s)", "Platter(s)", "Topping(s)"],
             datasets: [
                 {
                    label: "Quantity",
                    data: res,
                    backgroundColor: [
                        "rgba(255,99,132,0.6)",
                        "rgba(54,162,235,0.6)",
                        "rgba(255,206,86,0.6)",
                        "rgba(75,192,192,0.6)",
                        "rgba(153,102,255,0.6)",
                        "rgba(150,99,132,0.6)"
                    ],
                    borderWidth: 1
                 }
             ]
            
        
        }
    }


  

    return (
        <div className="chart">
            <Pie
                data={datas.chartData}
                options={{
                    title: {
                        display: true,
                        text: 'Daily Sales',
                        fontSize: 30
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                  
                }
                
             }
            />
           
            <Line
                data={datas.chartData}
                options={{
                   
                    legend: {
                        display: true,
                        position: 'bottom'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
                
             }
            />
        </div>
    )
}


export default Chart
