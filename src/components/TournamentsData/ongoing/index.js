// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import { OngoingTournamentBlock } from '../../_shared';

export default class Ongoing extends Component {
    render() {
        return (
            <section className={Styles.container}>
                <OngoingTournamentBlock />
                <OngoingTournamentBlock />
                <OngoingTournamentBlock />
                <OngoingTournamentBlock />
                <OngoingTournamentBlock />
                <OngoingTournamentBlock />
                <OngoingTournamentBlock />
            </section>
        );
    }
}
