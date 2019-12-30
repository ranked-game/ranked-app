// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Instruments
import { DotaData } from './dota';
import { R6Data } from './r6s';
import logo from '../../theme/assets/svg/logoShort.svg';

// Actions
import { uiActions } from '../../bus/ui/actions';

const mapStateToProps = (state) => ({
    lastGame: state.profile
        .get('matchHistory')
        .get('matches')
        ?.last()
        ?.toJS(),
});

const mapDispatchToProps = {
    fillLeftSide: uiActions.fillLeftSide,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class LastMatchBox extends Component {
    _openGameDetails = () => {
        const { fillLeftSide } = this.props;

        fillLeftSide('SpiderwebChart', {
            title: `Last match performance`,
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
        const { className, lastGame } = this.props;

        return (
            <section className={`${Styles.container} ${className}`}>
                <p className={Styles.label}>Last match</p>
                <div
                    className={`${Styles.data} ${lastGame?.gameId === '10826' && Styles.r6s}`}
                    onClick={this._openGameDetails}
                >
                    {lastGame?.gameId === '7314' ? (
                        <DotaData Styles={Styles} gameData={lastGame} />
                    ) : lastGame?.gameId === '10826' ? (
                        <R6Data Styles={Styles} gameData={lastGame} />
                    ) : (
                        <div className={Styles.loading}>
                            <img src={logo} alt='' />
                            <p>Calling FBI to retrieve your personal data...</p>
                        </div>
                    )}
                </div>
            </section>
        );
    }
}
