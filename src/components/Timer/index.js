// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import CompoundTimer from 'react-compound-timer';

export default class Timer extends Component {
    render() {
        const { seconds } = this.props;
        return (
            <section className={Styles.container}>
                <CompoundTimer
                    initialTime={seconds * 1000}
                    direction="backward"
                    lastUnit="d"
                    formatValue={(value) => `${value < 10 ? `0${value}` : value}`}
                >
                    <div className={Styles.timerShit}>
                        <CompoundTimer.Days /> <span>days</span>
                    </div>
                    :
                    <div className={Styles.timerShit}>
                        <CompoundTimer.Hours /> <span>hours</span>
                    </div>
                    :
                    <div className={Styles.timerShit}>
                        <CompoundTimer.Minutes /> <span>minutes</span>
                    </div>
                    :
                    <div className={Styles.timerShit}>
                        <CompoundTimer.Seconds /> <span>seconds</span>
                    </div>
                </CompoundTimer>
            </section>
        );
    }
}
