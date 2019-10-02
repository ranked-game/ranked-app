// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Instruments
import moment from 'moment';
import Firebase from '../../utils/firebase';
import { Spinner } from '../../components/_shared';
import { Timer } from '../../components';
import logo from '../../theme/assets/svg/logoBigHorizontal.svg';

// Actions
import { authActions } from '../../bus/auth/actions';

const mapDispatchToProps = {
    logoutAsync: authActions.logoutAsync,
};

@connect(
    null,
    mapDispatchToProps,
)
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

        if (!localStorage.getItem('ranked-remember-me')) localStorage.clear();
    };

    _logout = () => {
        const { logoutAsync } = this.props;
        logoutAsync();

        overwolf.windows.obtainDeclaredWindow('login', (result) => {
            const {
                window: { id },
                status,
            } = result;

            if (status === 'success') {
                overwolf.windows.restore(id);
            }
        });

        overwolf.windows.getCurrentWindow((result) => {
            const {
                window: { id },
                status,
            } = result;

            if (status === 'success') {
                overwolf.windows.close(id);
            }
        });
    };

    render() {
        const { secondsToStart } = this.state;

        return (
            <section className={Styles.container}>
                <img src={logo} alt="logo" />
                <Spinner size="27rem">
                    <div className={Styles.dataContainer}>
                        <p>Time to closed beta launch:</p>
                        {secondsToStart ? (
                            <Timer seconds={secondsToStart} />
                        ) : (
                            <Spinner size="5rem" loader />
                        )}
                    </div>
                </Spinner>
                <p className={Styles.logoutButton} onClick={this._logout}>
                    Logout
                </p>
            </section>
        );
    }
}
