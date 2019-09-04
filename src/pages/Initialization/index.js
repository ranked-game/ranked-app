// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import getRandomFunnyMessage from '../../utils/randomFunnyMessage';
import logo from '../../theme/assets/svg/logoBigVertical.svg';
import Spinner from '../../components/_shared/Spinner';

export default class Initialization extends Component {
    render() {
        return (
            <section className={Styles.container}>
                <img src={logo} alt="" className={Styles.logo} />
                <Spinner size="4rem" loader />
                <p>{getRandomFunnyMessage()}</p>
            </section>
        );
    }
}
