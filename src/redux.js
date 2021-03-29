import { createStore } from 'redux';

//actions
export const lineChart = (lineChartData) => ({
    type: 'LINE_CHART',
    lineChartData
});

export const otherChart = (otherChartData) => ({
    type: 'OTHER_CHART', 
    otherChartData
});

//reducers
const initialState = {
    lineChartData : [],
    otherChartData: []
}

export const reducers = (state = initialState, action) => {
    switch(action.type) {
        case 'LINE_CHART':
            return Object.assign({}, state, {
                lineChartData: state.lineChartData.concat(action.lineChartData)
              });
        case 'OTHER_CHART':
            return Object.assign({}, state, {
                otherChartData: state.otherChartData.concat(action.otherChartData)
              });
        default:
            return state;
    }
}

//store
export const store = createStore(reducers)