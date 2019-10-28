export const endgame = (gameData) => {
    const { kills, deaths, assists, playerHero, victory, roster } = gameData;
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
        }),
    );

    tracker.log(gameData);

    eventBus.fire('MATCH_ENDED');
};
