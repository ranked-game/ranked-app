// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import moment from 'moment';
import Firebase from '../../utils/firebase';
import Spinner from '../_shared/Spinner';

export default class TimerPage extends Component {
    state = {
        secondsToStart: 10000000,
        interval: null,
    };

    componentDidMount = () => {
        const db = Firebase.firestore();

        db.collection('closedBetaStartDate')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    const { date } = doc.data();

                    const goalTime = moment(date).utc();
                    const now = moment().utc();

                    const diff = goalTime.diff(now, 'seconds');

                    this.setState({
                        secondsToStart: diff,
                        interval: setInterval(() => {
                            this.setState((prevState) => ({
                                secondsToStart: --prevState.secondsToStart,
                            }));
                        }, 1000),
                    });
                });
            });
    };

    componentWillUnmount = () => {
        const { interval } = this.state;

        clearInterval(interval);
    };

    render() {
        const { secondsToStart } = this.state;

        return (
            <section className={Styles.container}>
                <p>Time to closed beta:</p>
                <Spinner size="27rem">
                    <p>{secondsToStart} seconds</p>
                </Spinner>
            </section>
        );
    }
}
