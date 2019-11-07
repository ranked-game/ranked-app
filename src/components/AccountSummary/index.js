// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Instruments
import logoShortYellow from '../../theme/assets/svg/logoShortYellow.svg';

const mapStateToProps = (state) => ({
    nickname: state.profile.get('nickname'),
});

@connect(
    mapStateToProps,
    null,
)
export default class AccountSummary extends Component {
    render() {
        const { nickname } = this.props;

        return (
            <section className={Styles.container}>
                <img src={logoShortYellow} alt="" className={Styles.userpic} />
                <p className={Styles.username}>{nickname}</p>
                <div className={Styles.infoBlock}>
                    <p className={Styles.value}>120</p>
                    <p className={Styles.key}>Level</p>
                </div>
                <div className={Styles.infoBlock}>
                    <p className={Styles.value}>42</p>
                    <p className={Styles.key}>Tournaments won</p>
                </div>
                <div className={Styles.infoBlock}>
                    <p className={Styles.value}>1400</p>
                    <p className={Styles.key}>Smth else</p>
                </div>
            </section>
        );
    }
}
