// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Components
import { TournamentBlock } from '../../_shared';

export default class Available extends Component {
    render() {
        return (
            <section className={Styles.container}>
                <p className={Styles.title}>Available now</p>
                <TournamentBlock header />
                <div className={Styles.data}>
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                </div>
                <p className={Styles.title}>Upcoming tournaments</p>
                <TournamentBlock header />
                <div className={Styles.data}>
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                    <TournamentBlock />
                </div>
            </section>
        );
    }
}
