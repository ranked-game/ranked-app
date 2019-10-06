// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Instruments
import logo from '../../theme/assets/svg/logoBigHorizontal.svg';
import settings from '../../theme/assets/svg/settings.svg';
import logoShortYellow from '../../theme/assets/svg/logoShortYellow.svg';

// Actions
import { uiActions } from '../../bus/allActions';

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

const mapStateToProps = (state) => ({
    rightSide: state.ui.get('rightSide'),
});

const mapDispatchToProps = {
    fillRightSide: uiActions.fillRightSide,
};

@connect(
    mapStateToProps,
    mapDispatchToProps,
)
export default class MainNavigation extends Component {
    _handleNavigation = ({ target: { innerText } }) => {
        const { fillRightSide } = this.props;

        fillRightSide(innerText);
    };

    render() {
        const { rightSide } = this.props;

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
                            Styles.disabled} ${rightSide === item.name && Styles.active}`}
                        key={index}
                    >
                        {item.name}
                    </div>
                ))}
            </section>
        );
    }
}
