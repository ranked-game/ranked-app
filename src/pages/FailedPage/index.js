// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Components
import TopControlBar from '../../components/TopControlBar';

export default class SuccessPage extends Component {
    componentDidMount = () => {
        setTimeout(() => {
            window.location.assign(
                'overwolf-extension://gkdpbpcoeckfaoghjgpagdamgijpigddeeennllh/login.html',
            );
        }, 3000);
    };

    render() {
        return (
            <>
                <TopControlBar />
                <section className={Styles.container}>
                    <p className={Styles.title}>Whooops! Something went wrong :(</p>
                    <p className={Styles.subtitle}>
                        Random number generator will choose who of our development team gets fired
                        while you're being redirected to login page
                    </p>
                </section>
            </>
        );
    }
}
