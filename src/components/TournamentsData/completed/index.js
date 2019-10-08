// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import { Completed as CompletedTournament } from '../../_shared/_tournaments';

export default class Completed extends Component {
    render() {
        return (
            <section className={Styles.container}>
                <CompletedTournament />
                <CompletedTournament />
                <CompletedTournament />
                <CompletedTournament />
                <CompletedTournament />
                <CompletedTournament />
                <CompletedTournament />
            </section>
        );
    }
}
