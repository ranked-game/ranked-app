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
export default class SoloVsPartyBox extends Component {
    _openDetails = () => {
        const { fillLeftSide } = this.props;

        fillLeftSide('SpiderwebChart', { title: 'Solo vs Party' });
    };

    render() {
        const { className } = this.props;

        return (
            <section className={`${Styles.container} ${className}`} onClick={this._openDetails}>
                <div className={Styles.labels}>
                    <span className={Styles.labelLeft}>Solo points</span>
                    <span className={Styles.labelRight}>Party points</span>
                </div>
            </section>
        );
    }
}
