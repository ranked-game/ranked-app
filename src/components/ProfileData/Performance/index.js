// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Actions
import { uiActions } from '../../../bus/ui/actions';

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
export default class Performance extends Component {
    _openDetails = ({ target: { id, innerText } }) => {
        const { fillLeftSide } = this.props;

        fillLeftSide(id, { title: `${innerText} chart` });
    };

    render() {
        return (
            <section className={Styles.container}>
                <div className={Styles.timeSpent} id="LineChart" onClick={this._openDetails}>
                    Time spent
                </div>
                <div className={Styles.points} id="LineChart" onClick={this._openDetails}>
                    Points
                </div>
                <div className={Styles.tournaments} id="LineChart" onClick={this._openDetails}>
                    Tournaments data
                </div>
                <div
                    className={Styles.soloAndParty}
                    id="SpiderwebChart"
                    onClick={this._openDetails}
                >
                    Solo and party points
                </div>
            </section>
        );
    }
}
