// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Instruments
import logo from '../../theme/assets/svg/dota-logo.svg';

// Actions
// import {} from '';

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = {
    // .....
};

@connect(
    mapStateToProps,
    mapDispatchToProps,
)
export default class DataRoster extends Component {
    render() {
        const { className } = this.props;

        return (
            <section className={`${Styles.container} ${className}`}>
                <div className={Styles.team}>
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                </div>
                <p>VS.</p>
                <div className={Styles.team}>
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                    <img src={logo} alt="" />
                </div>
            </section>
        );
    }
}
