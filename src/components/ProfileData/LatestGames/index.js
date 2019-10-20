// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Instruments
import { GameHistoryRow } from '../../_shared/_profile';

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
export default class LatestGames extends Component {
    componentDidMount = () => {
        const { fillLeftSide } = this.props;

        fillLeftSide();
    };

    _openGameDetails = ({ target: { id } }) => {
        const { fillLeftSide, games } = this.props;

        fillLeftSide('GameDetails', { id, games });
    };

    render() {
        return (
            <section className={Styles.container}>
                <GameHistoryRow openGameDetails={this._openGameDetails} />
                <GameHistoryRow openGameDetails={this._openGameDetails} />
                <GameHistoryRow openGameDetails={this._openGameDetails} />
                <GameHistoryRow openGameDetails={this._openGameDetails} />
                <GameHistoryRow openGameDetails={this._openGameDetails} />
                <GameHistoryRow openGameDetails={this._openGameDetails} />
                <GameHistoryRow openGameDetails={this._openGameDetails} />
            </section>
        );
    }
}
