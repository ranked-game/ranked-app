// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Actions
import { uiActions } from '../../bus/ui/actions';

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = {
    fillLeftSide: uiActions.fillLeftSide,
};

@connect(
    mapStateToProps,
    mapDispatchToProps,
)
export default class TimeSpentBox extends Component {
    _openDetails = () => {
        const { fillLeftSide } = this.props;

        fillLeftSide('LineChart', { title: 'Time spent' });
    };

    render() {
        const { className } = this.props;

        return (
            <section className={`${Styles.container} ${className}`} onClick={this._openDetails}>
                <span className={Styles.label}>Time spent</span>
                <div className={Styles.data}>
                    <p className={Styles.text}>During this week:</p>
                    <p className={Styles.dimension}>
                        42
                        <br />
                        <span>hours</span>
                    </p>
                </div>
            </section>
        );
    }
}
