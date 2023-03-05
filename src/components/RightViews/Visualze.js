import React from 'react'
import Plot from 'react-plotly.js'


const Visualze = () => {
  var data = [{
    values: [19, 26, 55],
    labels: ['Residential', 'Non-Residential', 'Utility'],
    type: 'pie',
    marker:{
      colors :  ['rgb(56, 75, 126)', 'rgb(18, 36, 37)', 'rgb(34, 53, 101)', 'rgb(36, 55, 57)', 'rgb(6, 4, 4)']
    }
  }];
  
  var layout = {
    height: 400,
    width: 500
  };
  
  return (
    <div className='visualize_container'>
      

      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red' },
          },
          { type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
        ]}
        layout={{ width: 700, height: 540, title: 'first plot' }}
      />

        <Plot 
        data={data}
        layout={layout}
        />

    </div>
  )
}

export default Visualze