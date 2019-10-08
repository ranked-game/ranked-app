// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Instruments
import { Ongoing, Available, Completed } from '../TournamentsData';

// Actions
import { uiActions } from '../../bus/allActions';

const mapDispatchToProps = {
    fillRightSide: uiActions.fillRightSide,
};

@connect(
    null,
    mapDispatchToProps,
)
export default class Tournaments extends Component {
    state = {
        tabs: ['Ongoing', 'Available', 'Completed'],
    };

    _switchTab = ({ target: { innerText } }) => {
        const { fillRightSide } = this.props;

        fillRightSide(null, { active: innerText });
    };

    render() {
        const { tabs } = this.state;
        const { active = 'Available' } = this.props;

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
