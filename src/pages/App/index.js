// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Components
import { MainNavigation, AccountSummary, ProfileDetails, Tournaments } from '../../components';

export default class App extends Component {
    state = {
        activeTab: 'Tourneys',
    };

    _handleTabChange = (activeTab) => {
        this.setState({
            activeTab,
        });
    };

    render() {
        const { activeTab } = this.state;

        return (
            <section className={Styles.container}>
                <div className={Styles.left}>
                    <MainNavigation handleTabChange={this._handleTabChange} activeTab={activeTab} />
                    <AccountSummary />
                    <div id={Styles.adDiv} />
                </div>
                <div className={Styles.right}>
                    {activeTab === 'Profile' && <ProfileDetails />}
                    {activeTab === 'Tourneys' && <Tournaments />}
                </div>
            </section>
        );
    }
}
