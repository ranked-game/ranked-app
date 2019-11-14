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
    matchHistory: state.profile
        .get('matchHistory')
        .reverse()
        .toJS(),
});

const mapDispatchToProps = {
    fillLeftSide: uiActions.fillLeftSide,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class LatestGames extends Component {
    componentDidMount = () => {
        const { fillLeftSide } = this.props;

        fillLeftSide();
    };

    render() {
        const { matchHistory } = this.props;

        return (
            <section className={Styles.container}>
                {matchHistory.map(({ gameId, data }, index) =>
                    gameId === '7314' ? (
                        <GameHistoryRow
                            key={index}
                            data={{
                                gameId: gameId,
                                score: `${data.kills} / ${data.deaths} / ${data.assists}`,
                                victory: data.victory,
                            }}
                        />
                    ) : (
                        <GameHistoryRow
                            key={index}
                            data={{
                                gameId: gameId,
                                victory: data.victory,
                                score: data.score,
                            }}
                        />
                    ),
                )}
            </section>
        );
    }
}
