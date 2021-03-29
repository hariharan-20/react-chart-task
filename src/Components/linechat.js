import { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { lineChart } from '../redux';
import { LineChart, XAxis, YAxis, Tooltip, Line, CartesianGrid, Legend } from 'recharts';
import { Jumbotron } from 'react-bootstrap';

const mapStateToProps = (store) => ({
    lineChartData: store.lineChartData
});

const mapDispatchToProps = (dispatch) => {
    return {
      lineChart: lineChartData => dispatch(lineChart(lineChartData)),    
    }
  }

class LineCharts extends Component {
    componentDidMount() {
          axios.get('https://5fc952922af77700165ae75d.mockapi.io/api/task/line-chart')
            .then((lineChartData) => {
            this.props.lineChart(lineChartData.data)          
        })
        .catch((error) => {
          console.log(error);
        })
      }

    render() {                         
        return (
          <Jumbotron>
            Data Statistics
            <LineChart width={1400} height={300} data={this.props.lineChartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis type = "number" domain={[0, 500]}/>
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="incoming_data" stroke="#8884d8" />
            <Line type="monotone" dataKey="data_error" stroke="#82ca9d" />
            </LineChart>
          </Jumbotron>            
        );              
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineCharts);