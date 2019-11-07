// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Actions
import { uiActions } from '../../bus/ui/actions';

const mapStateToProps = (state) => ({
    // soloPoints: state.profile.get('pointsEarnedLifetime').get('solo'),
    // partyPoints: state.profile.get('pointsEarnedLifetime').get('party'),
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
                Party: [
                    Math.ceil(Math.random() * 10),
                    Math.ceil(Math.random() * 10),
                    Math.ceil(Math.random() * 10),
                    Math.ceil(Math.random() * 10),
                    Math.ceil(Math.random() * 10),
                    Math.ceil(Math.random() * 10),
                ],
                Solo: [
                    Math.ceil(Math.random() * 10),
                    Math.ceil(Math.random() * 10),
                    Math.ceil(Math.random() * 10),
                    Math.ceil(Math.random() * 10),
                    Math.ceil(Math.random() * 10),
                    Math.ceil(Math.random() * 10),
                ],
            },
            categories: [
                'Time\xa0spent',
                'Games played',
                'Points earned',
                'Tournaments\xa0won',
                'Winrate',
                'Performance',
            ],
        });
    };

    render() {
        const { className, soloPoints = 0, partyPoints = 0 } = this.props;

        return (
            <section className={`${Styles.container} ${className}`} onClick={this._openDetails}>
                <span className={Styles.label}>Lifetime points earned</span>
                <div className={Styles.data}>
                    <p className={Styles.soloText}>Solo</p>
                    <div className={Styles.soloNumber}>
                        {soloPoints}
                        <br />
                        <span>points</span>
                    </div>
                    <div className={Styles.partyNumber}>
                        {partyPoints}
                        <br />
                        <span>points</span>
                    </div>
                    <p className={Styles.partyText}>Party</p>
                </div>
            </section>
        );
    }
}
