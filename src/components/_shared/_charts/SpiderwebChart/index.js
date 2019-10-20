// Core
import React from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import ReactHighcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';
HighchartsMore(ReactHighcharts.Highcharts);

export const SpiderwebChart = ({ title = 'Solo vs Party', data = {} }) => {
    const verifyData = () => {
        const { solo, party } = data;
        const verifiedData = { ...data };

        if (!solo) {
            verifiedData.solo = Array(6).fill(0);
        }

        if (!party) {
            verifiedData.party = Array(6).fill(0);
        }

        return verifiedData;
    };

    const options = {
        chart: {
            polar: true,
            backgroundColor: '#1e1154',
            borderRadius: 4,
            type: 'line',
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
            categories: [
                'Time\xa0spent',
                'Games played',
                'Points earned',
                'Tournaments\xa0won',
                'Winrate',
                'Performance',
            ],
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

        series: [
            {
                name: 'Solo',
                data: verifyData().solo,
                color: '#179bdb',
                pointPlacement: 'on',
            },
            {
                name: 'Party',
                data: verifyData().party,
                color: '#fead0f',
                pointPlacement: 'on',
            },
        ],
    };

    return (
        <section className={Styles.container}>
            <ReactHighcharts config={options} />
        </section>
    );
};
