// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import { Ongoing, Available, Completed } from '../TournamentsData';

export default class Tournaments extends Component {
    state = {
        tabs: ['Ongoing', 'Available', 'Completed'],
        active: 'Ongoing',
    };

    _switchTab = ({ target: { innerText } }) => {
        this.setState({
            active: innerText,
        });
    };

    render() {
        const { tabs, active } = this.state;

        return (
            <section className={Styles.container}>
                <div className={Styles.tabsContainer}>
                    {tabs.map((item, index) => (
                        <div
                            className={`${Styles.tab} ${item === active && Styles.active}`}
                            onClick={this._switchTab}
                            key={index}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                {active === 'Ongoing' && <Ongoing />}
                {active === 'Available' && <Available />}
                {active === 'Completed' && <Completed />}
            </section>
        );
    }
}
