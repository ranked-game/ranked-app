// Core
import React from 'react';

// Instruments
import Dota2API from 'dota2-web-api';

export const DotaData = ({ Styles, gameData }) => {
    const {
        // duration,
        // created,
        data: {
            playerHero,
            kills,
            deaths,
            assists,
            victory,
            roster: { radiant, dire },
        },
    } = gameData;
    const dota2Api = new Dota2API('3A1B5FE4C6F1BAC35AB4F597B14770DC', 'en_us');

    const playerHeroImage = dota2Api.getHeroImage(playerHero, 'vert.jpg');
    const direImages = dire.map(({ hero }) => dota2Api.getHeroImage(hero, 'vert.jpg'));
    const radiantImages = radiant.map(({ hero }) => dota2Api.getHeroImage(hero, 'vert.jpg'));

    return (
        <>
            <div className={Styles.dotaDetails}>
                <img src={playerHeroImage} alt='' />
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
                    <img src={item} alt='' key={index} />
                ))}
                <p>VS.</p>
                {direImages.map((item, index) => (
                    <img src={item} alt='' key={index} />
                ))}
            </div>
        </>
    );
};
