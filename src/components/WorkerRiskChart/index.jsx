import { Bubble } from 'react-chartjs-2';
import { occupations } from './data';
import React from 'react'

import { Typography, Slider } from '@material-ui/core';

function mapToChartData() {
    const ls = occupations

    const computeRadius = (r) => r * 40 / 3635550.0
    return ls.map(l => {
        return {
            x: l.physical_proximity,
            y: l.exposed_to_disease_or_infections,
            r: computeRadius(l.emp),
            wage: l.wage,
            emp: l.emp,
            name: l.name,
            emp_percentile: l.emp_percentile,
            wage_percentile: l.wage_percentile,
        }
    })

}


function RangeSlider({ onChange, value, title, max }) {

    const handleChange = (event, newValue) => {
        onChange(newValue);
    };

    return (
        <>
            <div className="slider">
                <Typography id="range-slider" gutterBottom>
                    {title}                </Typography>
                <Slider
                    min={0}
                    max={max ?? undefined}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"

                />
            </div>
        </>
    );
}
function inRange(value, range) {
    const min = range[0], max = range[1]
    if (value >= min && value <= max) {
        return true
    } else {
        return false
    }

}

function WorkerRiskChart() {

    const [state, setstate] = React.useState({ dataPoints: mapToChartData(), physical_proximity: [0, 100], exposed_to_disease_or_infections: [0, 100] })

    function onChangeSliderValue(key, value) {
        setstate({ ...state, [key]: value })
    }

    const { dataPoints, physical_proximity, exposed_to_disease_or_infections } = state
    const filtereddata = mapToChartData()

        .filter(d => inRange(d.x, physical_proximity))
        .filter(d => inRange(d.y, exposed_to_disease_or_infections))



    const data = {
        datasets: [{

            label: 'More Radius = More Employment',
            data: filtereddata,
            borderColor: '#fff',
            backgroundColor: 'purple',
        }]
    }

    const xLabel = 'Physical Proximity', yLabel = 'Exposure to disease'
    return <>
        <div className='controls'>
            <RangeSlider {...{ title: xLabel, onChange: (v) => { onChangeSliderValue('physical_proximity', v) }, value: physical_proximity }} />
            <RangeSlider {...{ title: yLabel, onChange: (v) => { onChangeSliderValue('exposed_to_disease_or_infections', v) }, value: exposed_to_disease_or_infections }} />

        </div>

        <div className="workerRisk ">
            <Bubble data={data} options={{

                defaultColor: 'red',
                responsive: true,
                aspectRatio: false,

                scales: {


                    yAxes: [{
                        ticks: { suggestedMax: 100, suggestedMin: 0, min: 0, max: 100 },
                        color: 'red',
                        scaleLabel: {
                            display: true,
                            labelString: yLabel
                        }
                    }],
                    xAxes: [{
                        ticks: { suggestedMax: 100, suggestedMin: 0, min: 0, max: 100 },

                        scaleLabel: {
                            display: true,

                            labelString: xLabel
                        }
                    }],
                },
                tooltips: {

                    callbacks: {
                        title: function () {

                        },
                        label: function (tooltipItem) {

                            const idx = tooltipItem.index
                            const item = dataPoints[idx]
                            const xValue = item.x
                            const yValue = item.x
                            const income = item.wage
                            const name = item.name
                            const emp = item.emp

                            var xandv = `${xLabel}: ${xValue}   ${yLabel}: ${yValue}`

                            if (name) {
                                xandv = name + '    ' + xandv
                            }
                            if (income) {
                                xandv = xandv + `    Annual Income: $${income}`
                            }
                            if (emp) {
                                xandv = xandv + `    Employment: ${emp}`
                            }
                            return xandv
                        },
                        afterLabel: function () {

                        }
                    }
                },
            }} />
        </div>
    </>
}


export default WorkerRiskChart