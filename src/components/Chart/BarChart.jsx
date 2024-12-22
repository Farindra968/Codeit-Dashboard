import React from 'react'
import Chart from 'react-apexcharts'

export default function BarChart() {
  return (
    <div>
      <Chart
        type="radialBar"
        series={[44, 55, 67, 83]}

        options={{
          chart: {
            type: 'radialBar',
          },
        }}
        
      />
    </div>
  )
}

 function BarChart1() {
    return (
        <div>
            <Chart
            type="area"
                series={[
                    {
                        name: 'Series',
                        data: [10, 10, 10, 18, 22, 16, 24, 20, 35, 30, 32, 28, 35, 36, 40, 50]
                }
                ]}
                
                options={{
                    chart: {
                        type: 'area',
                  },
                  dataLabels: {
                    enabled: false
                  },
                    stroke: {
                        curve: 'straight'
                    }
                }}
            >

            </Chart>
        </div>
    )
}
export {BarChart1}