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

        fillLeftSide('SpiderwebChart', {
            title: 'Solo vs Party',
            data: {
                Solo: [1, 6, 4, 6, 7, 10],
                Party: [10, 5, 4, 10, 3, 8],
            },
        });
    };

    render() {
        const { className } = this.props;

        return (
            <section className={`${Styles.container} ${className}`} onClick={this._openDetails}>
                <span className={Styles.label}>Solo points</span>
                <div className={Styles.data}>
                    <p className={Styles.soloText}>Some kind of text</p>
                    <div className={Styles.soloNumber}>
                        42
                        <br />
                        <span>points</span>
                    </div>
                    <div className={Styles.partyNumber}>
                        13
                        <br />
                        <span>points</span>
                    </div>
                    <p className={Styles.partyText}>Some kind of text</p>
                </div>
            </section>
        );
    }
}
