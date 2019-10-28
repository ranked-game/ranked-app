export const endgame = (gameData) => {
    const { kills, deaths, assists, playerHero, victory, roster, matchId } = gameData;
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

    tracker.log(gameData);

    eventBus.fire('MATCH_ENDED');
};
