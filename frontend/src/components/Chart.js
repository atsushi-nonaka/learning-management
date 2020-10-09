import React from 'react'
import ReactApexChart from 'react-apexcharts'
import { connect } from 'react-redux'
import selectedDataList from '../selector/data'

const ApexChart = (props) => (
    <div id="chart">
      <div id="pie-chart">
        <ReactApexChart options={props.options[0]} series={props.countList} type="donut" />
      </div>
      <div id="bar-chart">
        <ReactApexChart options={props.options[1]} series={props.options[1].series} type="bar" />
      </div>
    </div>
)

const mapStateToProps = (state) => {
    const data = []
    const counts = {}
    const filterdData = selectedDataList(state.data, state.filters)
    const map = filterdData.map((data) => data.language)

    for(let i=0;i< map.length;i++){
        let key = map[i];
        counts[key] = (counts[key])? counts[key] + 1 : 1 
    }
    
    for (const key in counts) {
        data.push({
            name: key,
            counts: counts[key]
        });
    }

    const labels = data.map((data) => data.name)
    const countList = data.map((data) => data.counts)

    const donutOptions = {
      chart: {
        type: 'donut',
        height: '500px'
      },
      labels
    }

    const barOptions = {
      series: [{
        data: countList
      }],
      chart: {
        type: 'bar',
        zoom: {
          enabled: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true,
        }
      },
      xaxis: {
        categories: labels,
      }
    }
    
    return {
      countList,
      options: [donutOptions, barOptions]
    }
}

export default connect(mapStateToProps)(ApexChart)