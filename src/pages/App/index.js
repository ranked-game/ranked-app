// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Components
import { MainNavigation } from '../../components';

export default class App extends Component {
    state = {
        activeTab: 'Profile',
    };

    _handleTabChange = (activeTab) => {
        this.setState({
            activeTab,
        });
    };

    render() {
        return (
            <section className={Styles.container}>
                <div className={Styles.left}>
                    <MainNavigation handleTabChange={this._handleTabChange} />
                    <div>Some short info</div>
                    <div id={Styles.adDiv} />
                </div>
                <div className={Styles.right} />
            </section>
        );
    }
}
