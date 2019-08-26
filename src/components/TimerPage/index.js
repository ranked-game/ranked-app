// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import Spinner from '../_shared/Spinner';

export default class TimerPage extends Component {
    render() {
        return (
            <section className={Styles.container}>
                <Spinner size="27rem">
                    <p>19 days</p>
                    <p>15 hours</p>
                    <p>34 mins</p>
                    <p>18 secs</p>
                </Spinner>
            </section>
        );
    }
}
