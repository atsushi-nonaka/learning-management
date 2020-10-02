import React, { PureComponent } from 'react'
import {
    BarChart, 
    Bar, 
    Cell, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    Legend
} from 'recharts';
import { connect } from 'react-redux'
import selectedDataList from '../selector/data'

export class Chart extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  getData = () => {
      const data = []
      const counts = {}
      const map = this.props.dataList.map((data) => data.language)
  
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
      return data
  }
  
  render() {
    const data = this.getData()
    if(data.length === 0){
      return(
        <div>
          データが存在するときグラフが表示されます.
        </div>
      )
    }

    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="counts" fill="#8884d8" />
      </BarChart>
    );
  }
}

const mapStateToProps = (state) => ({
    dataList: selectedDataList(state.data, state.filters)
})

export default connect(mapStateToProps)(Chart)