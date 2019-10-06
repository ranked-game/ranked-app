// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Components
import { Available as AvailableTournament } from '../../_shared/_tournaments';

export default class Available extends Component {
    render() {
        return (
            <section className={Styles.container}>
                <p className={Styles.title}>Available now</p>
                <AvailableTournament header />
                <div className={Styles.data}>
                    <AvailableTournament />
                    <AvailableTournament />
                    <AvailableTournament />
                    <AvailableTournament />
                    <AvailableTournament />
                    <AvailableTournament />
                    <AvailableTournament />
                    <AvailableTournament />
                    <AvailableTournament />
                    <AvailableTournament />
                    <AvailableTournament />
                    <AvailableTournament />
                    <AvailableTournament />
                </div>
                <p className={Styles.title}>Upcoming tournaments</p>
                <AvailableTournament header upcoming />
                <div className={Styles.data}>
                    <AvailableTournament upcoming />
                    <AvailableTournament upcoming />
                    <AvailableTournament upcoming />
                    <AvailableTournament upcoming />
                    <AvailableTournament upcoming />
                    <AvailableTournament upcoming />
                    <AvailableTournament upcoming />
                    <AvailableTournament upcoming />
                    <AvailableTournament upcoming />
                    <AvailableTournament upcoming />
                    <AvailableTournament upcoming />
                </div>
            </section>
        );
    }
}
