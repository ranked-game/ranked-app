// Core
import React from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import ReactHighcharts from 'react-highcharts';

export const LineChart = ({ title = 'No title :(', values = [] }) => {
    const getDaysOfTheWeek = () => {
        const daysList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const today = new Date().getDay();

        const firstPart = daysList.slice(today + 1, 7);
        const secondPart = daysList.slice(0, today + 1);

        return [...firstPart, ...secondPart];
    };

    const checkArrayLengthAndFill = () => {
        if (values.length === 7) return values;
        if (values.length > 7) return values.slice(-7);

        const amountToAdd = 7 - values.length;
        return [...Array(amountToAdd).fill(0), ...values];
    };

    const options = {
        title: {
            text: title,
            y: 15,
            style: {
                color: '#fff',
                fontFamily: "'SF Pro Display', sans-serif",
                fontSize: '1.25rem',
            },
        },
        chart: {
            backgroundColor: '#1e1154',
            borderRadius: 4,
            type: 'spline',
            height: '65%',
        },
        series: [
            {
                data: checkArrayLengthAndFill(),
            },
        ],
        tooltip: {
            backgroundColor: '#10053f',
            borderColor: '#695ca0',
            borderRadius: 4,
            borderWidth: 1,
            followPointer: true,
            style: {
                color: 'white',
            },
        },
        plotOptions: {
            spline: {
                color: '#fead0f',
            },
        },
        legend: {
            enabled: false,
        },
        yAxis: {
            title: null,
            gridLineColor: '#695ca0',
            gridLineWidth: 0.5,
            lineWidth: 0.5,
            lineColor: '#695ca0',
            tickAmount: 5,
            labels: {
                style: {
                    color: '#9d92c9',
                },
            },
        },
        xAxis: {
            title: null,
            categories: getDaysOfTheWeek(),
            tickWidth: 0,
            lineWidth: 0.5,
            lineColor: '#695ca0',
            crosshair: {
                color: '#695ca0',
                dashStyle: 'Dash',
                width: 1,
            },
            labels: {
                style: {
                    color: '#9d92c9',
                },
            },
        },
    };

    return (
        <section className={Styles.container}>
            <ReactHighcharts config={options} />
        </section>
    );
};
