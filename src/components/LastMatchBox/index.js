// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Test
// import SteamID from 'steamid';
// const sid = new SteamID('76561198143141868');

const mapStateToProps = (state) => ({
    lastGame: state.profile.get('lastGame').toJS(),
});

@connect(mapStateToProps)
export default class LastMatchBox extends Component {
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
                <div className={Styles.data}>
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
