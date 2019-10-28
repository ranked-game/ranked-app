// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Actions
import { uiActions } from '../../bus/ui/actions';

// Test
// import SteamID from 'steamid';
// const sid = new SteamID('76561198143141868');

const mapStateToProps = (state) => ({
    lastGame: state.profile.get('lastGame').toJS(),
});

const mapDispatchToProps = {
    fillLeftSide: uiActions.fillLeftSide,
};

@connect(
    mapStateToProps,
    mapDispatchToProps,
)
export default class LastMatchBox extends Component {
    _openGameDetails = () => {
        const {
            fillLeftSide,
            lastGame: { matchId },
        } = this.props;

        fillLeftSide('SpiderwebChart', {
            title: `Match #${matchId} performance`,
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
            className,
            lastGame: {
                playerHeroImage,
                kills,
                deaths,
                assists,
                victory,
                direImages,
                radiantImages,
            },
        } = this.props;

        return (
            <section className={`${Styles.container} ${className}`}>
                <p className={Styles.label}>Last match</p>
                <div className={Styles.data} onClick={this._openGameDetails}>
                    <div className={Styles.details}>
                        <img src={playerHeroImage} alt="" />
                        <p className={`${Styles.stats} ${Styles.kills}`}>
                            {kills} <br />
                            <span>Kills</span>
                        </p>
                        <p className={`${Styles.stats} ${Styles.borders}`}>
                            {deaths} <br />
                            <span>Deaths</span>
                        </p>
                        <p className={`${Styles.stats} ${Styles.assists}`}>
                            {assists} <br />
                            <span>Assists</span>
                        </p>
                        <div className={Styles.matchOutcome}>
                            <p>Match outcome:</p>
                            <div className={victory ? Styles.victory : Styles.defeat}>
                                {victory ? 'Victory' : 'Defeat'}
                            </div>
                        </div>
                    </div>
                    <div className={Styles.roster}>
                        {radiantImages.map((item, index) => (
                            <img src={item} alt="" key={index} />
                        ))}
                        <p>VS.</p>
                        {direImages.map((item, index) => (
                            <img src={item} alt="" key={index} />
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}
