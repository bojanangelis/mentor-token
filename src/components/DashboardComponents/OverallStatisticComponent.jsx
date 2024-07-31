import React, { useState } from 'react'
import './DashboardStyles.scss'
import ReactApexChart from 'react-apexcharts'

const OverallStatisticComponent = () => {
  const [series, setSeries] = useState([
    {
      name: 'Semos',
      data: [10, 41, 90, 51, 49, 62, 69, 91, 148],
      min: 10,
      max: 60,
    },
  ])
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      colors: ['#696CFF'],
    },
    title: {
      text: 'Overrall target accomplishment over the year',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['white', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    yaxis: {
      show: false,
    },
  })

  return (
    <div className='overallStatistic--view'>
      <h2>Statistics</h2>

      <ReactApexChart
        className='chart-apex'
        options={options}
        series={series}
        type='line'
        height={350}
      />
    </div>
  )
}

export default OverallStatisticComponent

// example
// class ApexChart extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {

//       series: [{
//           name: "Desktops",
//           data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
//       }],
//       options: {
//         chart: {
//           height: 350,
//           type: 'line',
//           zoom: {
//             enabled: false
//           }
//         },
//         dataLabels: {
//           enabled: false
//         },
//         stroke: {
//           curve: 'straight'
//         },
//         title: {
//           text: 'Product Trends by Month',
//           align: 'left'
//         },
//         grid: {
//           row: {
//             colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
//             opacity: 0.5
//           },
//         },
//         xaxis: {
//           categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
//         }
//       },

//     };
//   }

//   render() {
//     return (
//       <div>
//         <div id="chart">
//           <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
//         </div>
//         <div id="html-dist"></div>
//       </div>
//     );
//   }
// }

// const domContainer = document.querySelector('#app');
// ReactDOM.render(React.createElement(ApexChart), domContainer);
