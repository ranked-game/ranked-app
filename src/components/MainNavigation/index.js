// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import logo from '../../theme/assets/svg/logoBigHorizontal.svg';
import settings from '../../theme/assets/svg/settings.svg';
import logoShortYellow from '../../theme/assets/svg/logoShortYellow.svg';

export default class MainNavigation extends Component {
    render() {
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

                {/* links */}
                <div className={Styles.navlink}>Profile</div>
                <div className={Styles.navlink}>Tourneys</div>
                <div className={`${Styles.navlink} ${Styles.disabled}`}>Friends</div>
                <div className={`${Styles.navlink} ${Styles.disabled}`}>Team</div>
                <div className={`${Styles.navlink} ${Styles.disabled}`}>News</div>
            </section>
        );
    }
}
