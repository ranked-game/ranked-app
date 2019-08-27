// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import moment from 'moment';
import Firebase from '../../utils/firebase';
import Spinner from '../_shared/Spinner';
import Timer from '../Timer';
import logo from '../../theme/assets/svg/pseudoLogo.svg';

export default class TimerPage extends Component {
    state = {
        secondsToStart: null,
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
                    });
                });
            });
    };

    render() {
        const { secondsToStart } = this.state;

        return (
            <section className={Styles.container}>
                <img src={logo} alt="logo" />
                <Spinner size="27rem">
                    <div className={Styles.dataContainer}>
                        <p>Time to closed beta:</p>
                        {secondsToStart ? (
                            <Timer seconds={secondsToStart} />
                        ) : (
                            <Spinner size="5rem" loader />
                        )}
                    </div>
                </Spinner>
            </section>
        );
    }
}
