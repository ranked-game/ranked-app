// Core
import React from 'react';
import ReactHighcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';
HighchartsMore(ReactHighcharts.Highcharts);

// Styles
import Styles from './styles.module.scss';

// Instruments
import { createSeries } from './utils';

export const SpiderwebChart = ({ title = '', data = {}, categories = [] }) => {
    const options = {
        chart: {
            polar: true,
            backgroundColor: '#1e1154',
            borderRadius: 4,
            type: 'area',
            height: '65%',
        },

        title: {
            text: title,
            y: 20,
            style: {
                color: '#fff',
                fontFamily: "'SF Pro Display', sans-serif",
                fontSize: '1.25rem',
            },
        },

        pane: {
            size: '80%',
        },

        plotOptions: {
            line: {
                color: '#695ca0',
            },
        },

        xAxis: {
            categories,
            labels: {
                style: {
                    color: '#9d92c9',
                },
            },

            gridLineColor: '#695ca0',
            gridLineWidth: 1.5,
            tickmarkPlacement: 'on',
            lineWidth: 0,
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            gridLineColor: '#695ca0',
            gridLineWidth: 0.5,
            min: 0,
            max: 10,
            tickAmount: 5,
            labels: {
                enabled: false,
            },
        },

        tooltip: {
            shared: true,
            backgroundColor: '#10053f',
            borderColor: '#695ca0',
            borderRadius: 4,
            borderWidth: 1,
            followPointer: true,
            style: {
                color: 'white',
            },
        },

        legend: {
            enabled: false,
        },

        series: createSeries(data),
    };

    return (
        <section className={Styles.container}>
            <ReactHighcharts config={options} />
        </section>
    );
};
