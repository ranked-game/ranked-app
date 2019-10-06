// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import { Ongoing as OngoingTournament } from '../../_shared/_tournaments';

export default class Ongoing extends Component {
    render() {
        return (
            <section className={Styles.container}>
                <OngoingTournament />
                <OngoingTournament />
                <OngoingTournament />
                <OngoingTournament />
                <OngoingTournament />
                <OngoingTournament />
                <OngoingTournament />
            </section>
        );
    }
}
