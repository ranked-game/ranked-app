// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Instruments
import { DotaRoster } from '..';

// Test
import Dota2API from 'dota2-web-api';
const dota2Api = new Dota2API('3A1B5FE4C6F1BAC35AB4F597B14770DC', 'en_us');

import SteamID from 'steamid';
const sid = new SteamID('76561198143141868');

import { lastGameData } from '../../utils/mocks';

const mapStateToProps = (state) => ({
    ...state,
});

@connect(mapStateToProps)
export default class LastMatchBox extends Component {
    state = {
        inventoryImages: [],
        heroImage: '',
        accountId: '',
        kills: 0,
        deaths: 0,
        assists: 0,
        lastHits: 0,
        denies: 0,
        playerHero: '',
        playerSteamId: '',
        bestMultikill: '',
        skillBuild: [],
        victory: true,
        playerTeam: '',
        maximumKillStreak: 0,
    };

    componentDidMount = () => {
        const {
            kills,
            deaths,
            assists,
            lastHits,
            denies,
            playerHero,
            playerInventory,
            playerSteamId,
            bestMultikill,
            skillBuild,
            victory,
            playerTeam,
            maximumKillStreak,
        } = lastGameData;

        const inventoryImages = playerInventory.map((item) => dota2Api.getItemImage(item));
        const heroImage = dota2Api.getHeroImage(playerHero, 'vert.jpg');
        const accountId = sid
            .getSteam3RenderedID()
            .slice(1, -1)
            .split(':')
            .reverse()[0];

        this.setState({
            inventoryImages,
            heroImage,
            accountId,
            kills,
            deaths,
            assists,
            lastHits,
            denies,
            playerHero,
            playerSteamId,
            bestMultikill,
            skillBuild,
            victory,
            playerTeam,
            maximumKillStreak,
        });
    };

    render() {
        const { className } = this.props;
        const { heroImage, kills, deaths, assists, victory } = this.state;

        return (
            <section className={`${Styles.container} ${className}`}>
                <p className={Styles.lastMatch}>Last match</p>
                <p className={Styles.date}>22 Oct, 10:32 PM</p>
                <img src={heroImage} alt="" className={Styles.heroImage} />
                <p className={Styles.matchOutcome}>
                    Match outcome: <br />
                    <span>{victory ? 'Victory' : 'Defeat'}</span>
                </p>
                <DotaRoster className={Styles.roster} />
                <p className={Styles.details}>{'<< Details '}</p>
                <p className={Styles.kda}>{`${kills} / ${deaths} / ${assists}`}</p>
            </section>
        );
    }
}
