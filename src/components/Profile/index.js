// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Instruments
import { HallOfFame, LatestGames, Performance } from '../ProfileData';

// Actions
import { uiActions } from '../../bus/allActions';

const mapDispatchToProps = {
    fillRightSide: uiActions.fillRightSide,
};

@connect(null, mapDispatchToProps)
export default class Profile extends Component {
    state = {
        tabs: ['Performance', 'Latest games', 'Hall of Fame'],
    };

    componentDidMount = () => {
        const { active, fillRightSide } = this.props;
        const { tabs } = this.state;

        if (!tabs.includes(active)) {
            fillRightSide(null, { active: 'Latest games' });
        }
    };

    _switchTab = ({ target: { innerText } }) => {
        const { fillRightSide } = this.props;

        fillRightSide(null, { active: innerText });
    };

    render() {
        const { tabs } = this.state;
        const { active = 'Latest games' } = this.props;

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
                {active === 'Performance' && <Performance />}
                {active === 'Latest games' && <LatestGames />}
                {active === 'Hall of Fame' && <HallOfFame />}
            </section>
        );
    }
}
