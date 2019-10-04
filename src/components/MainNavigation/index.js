// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import logo from '../../theme/assets/svg/logoBigHorizontal.svg';
import settings from '../../theme/assets/svg/settings.svg';
import logoShortYellow from '../../theme/assets/svg/logoShortYellow.svg';

const navLinks = [
    {
        name: 'Profile',
        active: true,
    },
    {
        name: 'Tourneys',
        active: true,
    },
    {
        name: 'Friends',
        active: false,
    },
    {
        name: 'Team',
        active: false,
    },
    {
        name: 'News',
        active: false,
    },
];

export default class MainNavigation extends Component {
    _handleNavigation = ({ target: { innerText } }) => {
        const { handleTabChange } = this.props;

        handleTabChange(innerText);
    };

    render() {
        const { activeTab } = this.props;

        return (
            <section className={Styles.container}>
                <div className={Styles.top}>
                    <img src={logo} alt="" className={Styles.logo} />
                    <img src={logoShortYellow} alt="" className={Styles.userpic} />
                    <p className={Styles.username}>
                        Welcome,
                        <br />
                        <span>Who Is John Galt?</span>
                    </p>
                    <img src={settings} alt="" className={Styles.settings} />
                </div>

                {navLinks.map((item, index) => (
                    <div
                        onClick={item.active ? this._handleNavigation : undefined}
                        className={`${Styles.navlink} ${!item.active &&
                            Styles.disabled} ${activeTab === item.name && Styles.active}`}
                        key={index}
                    >
                        {item.name}
                    </div>
                ))}
            </section>
        );
    }
}
