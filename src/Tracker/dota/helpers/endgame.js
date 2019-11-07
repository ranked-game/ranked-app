import { getGameData, clearGameData } from './index';

export const endgame = () => {
    const { kills, deaths, assists, playerHero, victory, roster, matchId } = getGameData();
    const { eventBus } = overwolf.windows.getMainWindow();

    sessionStorage.setItem(
        'gameData',
        JSON.stringify({
            kills,
            deaths,
            assists,
            playerHero,
            victory,
            roster,
            matchId,
        }),
    );

    tracker.log(getGameData());

    eventBus.fire('MATCH_ENDED');
    clearGameData();
};
