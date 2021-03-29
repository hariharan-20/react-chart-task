import { Component } from "react";
import { connect } from 'react-redux';

import LineChart from './Components/linechat'
import CardDatas from './Components/CardDatas'

const mapStateToProps = (store) => ({
  lineChartData: store.lineChartData,
  otherChartData: store.otherChartData
});

class App extends Component {
  render() {    
    return (      
      <div>
        <LineChart/>
        <CardDatas/>
      </div> 
    );
  }
}

export default connect(mapStateToProps)(App);