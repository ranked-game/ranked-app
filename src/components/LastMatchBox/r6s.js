// Core
import React from 'react';

// Temporary
import logo from '../../theme/assets/images/r6-logo.jpg';

export const R6Data = ({ Styles, gameData }) => {
    const {
        // created,
        // duration,
        data: {
            deaths,
            kills,
            headshots,
            // playerName,
            playerTeam,
            teamScore: { blue, orange },
            victory,
            score,
        },
    } = gameData;

    return (
        <>
            <div
                className={Styles.playerTeamFlag}
                style={{
                    background:
                        playerTeam === 'Orange'
                            ? 'linear-gradient(120deg, #fa781d 0%, #fa781d 52%, #00000000 87%)'
                            : 'linear-gradient(120deg, #1995F4 0%, #1995F4 52%, #00000000 87%)',
                }}
            >
                {playerTeam === 'Orange' ? orange : blue}
            </div>
            <div
                className={Styles.enemyTeamFlag}
                style={{
                    background:
                        playerTeam === 'Orange'
                            ? 'linear-gradient(-120deg, #1995F4 0%, #1995F4 52%, #00000000 87%)'
                            : 'linear-gradient(-120deg, #fa781d 0%, #fa781d 52%, #00000000 87%)',
                }}
            >
                {playerTeam === 'Orange' ? blue : orange}
            </div>
            <div className={Styles.playerScore}>
                <p>Score:</p>
                <span>{score}</span>
            </div>
            {/* <p className={Styles.playerName}>{playerName}</p> */}
            <img src={logo} alt='' />
            <p className={`${Styles.stats} ${Styles.kills}`}>
                {kills} <br />
                <span>Kills</span>
            </p>
            <p className={`${Styles.stats} ${Styles.borders}`}>
                {deaths} <br />
                <span>Deaths</span>
            </p>
            <p className={`${Styles.stats} ${Styles.assists}`}>
                {headshots} <br />
                <span>Headshots</span>
            </p>
            <div className={Styles.matchOutcome}>
                <p>Match outcome:</p>
                <div className={victory ? Styles.victory : Styles.defeat}>
                    {victory ? 'Victory' : 'Defeat'}
                </div>
            </div>
        </>
    );
};
