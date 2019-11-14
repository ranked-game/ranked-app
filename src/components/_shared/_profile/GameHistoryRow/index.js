// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Instruments
import dotaLogo from '../../../../theme/assets/svg/dota-logo.svg';
import r6Logo from '../../../../theme/assets/images/r6-logo.jpg';

// Actions
import { uiActions } from '../../../../bus/ui/actions';

const mapDispatchToProps = {
    fillLeftSide: uiActions.fillLeftSide,
};

@connect(null, mapDispatchToProps)
export default class GameHistoryRow extends Component {
    _openGameDetails = () => {
        const { fillLeftSide } = this.props;

        fillLeftSide('SpiderwebChart', {
            title: 'Game performance',
            data: {
                Points: [
                    Math.ceil(Math.random() * 10),
                    Math.ceil(Math.random() * 10),
                    Math.ceil(Math.random() * 10),
                    Math.ceil(Math.random() * 10),
                    Math.ceil(Math.random() * 10),
                    Math.ceil(Math.random() * 10),
                ],
            },
            categories: ['Duration', 'KDA', 'Supporting', 'Pushing', 'XPM', 'GPM'],
        });
    };

    render() {
        const {
            active,
            data: {
                gameId,
                score,
                victory,
                tournamentName = `${gameId} Solo Ladder`,
                pointsEarned = Math.round(Math.random() * 50),
            },
        } = this.props;

        return (
            <section
                className={`${Styles.container} ${active && Styles.active}`}
                id={1}
                onClick={this._openGameDetails}
            >
                <img className={Styles.gameLogo} src={gameId === '7314' ? dotaLogo : r6Logo} />
                <>
                    <p className={Styles.title}>{gameId === '7314' ? 'KDA:' : 'Score:'}</p>
                    <p className={Styles.title}>Outcome:</p>
                    <p className={Styles.title}>Tournament name:</p>
                    <p className={Styles.title}>Points earned:</p>
                </>
                <>
                    <p className={Styles.data}>{score}</p>
                    <p className={Styles.data}>{victory ? 'Victory' : 'Defeat'}</p>
                    <p className={Styles.data}>{tournamentName}</p>
                    <p className={Styles.data}>{pointsEarned}</p>
                </>
            </section>
        );
    }
}
