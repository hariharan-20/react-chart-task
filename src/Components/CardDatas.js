import { Component } from 'react';
import { connect } from 'react-redux';
import { otherChart  } from '../redux';
import axios from 'axios';
import { PieChart, Pie } from 'recharts';
import 'react-bootstrap';

const mapStateToProps = (store) => ({
    otherChartData: store.otherChartData
});

const mapDispatchToProps = (dispatch) => {
    return {    
        otherChart: otherChartData => dispatch(otherChart(otherChartData))
    }
}

class CardDatas extends Component {  
    constructor(props){
        super(props)
    
        this.state = {
            bimpact: [],
            assigned: [],
            activity: [],
            dataqty: [],
            himpact: [],
            toperr: []
        }
    }      
    
    componentDidMount() {
        //API Request
        axios.get('https://5fc952922af77700165ae75d.mockapi.io/api/task/card-data')
        .then((otherData) => {        
            this.props.otherChart(otherData.data)   
            const dataObj = this.props.otherChartData                 

            //Filter Data Object
            dataObj.filter((data) => {
                this.setState({
                    dataqty:this.state.dataqty.concat([data.data_quality]),
                    toperr:this.state.toperr.concat([data.top_error]),
                    assigned:this.state.assigned.concat([data.assigned]),
                    bimpact:this.state.bimpact.concat([data.business_impact]),
                    himpact:this.state.himpact.concat([data.highest_impact]),
                    activity:this.state.activity.concat([data.activity_stream])
                }) 
            })                                               
        })
        .catch((error) => {
            console.log(error);
        })
    }
    
    render(){                                      
        return (
            <div class="container">
                <div class = "row">
                    <div class="col-sm-4">Pie chart 1</div>
                    <div class="col-sm-4">col 2</div>
                    <div class="col-sm-4">Pie chart</div>
                </div>
                
                {/* <PieChart width={400} height={400}>
                <Pie                
                    data={this.state.dataqty}
                    cx={200}
                    cy={200}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="high"                
                />
                </PieChart> */}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardDatas);