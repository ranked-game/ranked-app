import moment from 'moment';

/**
 *
 * @param {Array} matchesResults Array of matches results to count daily winrate
 * @returns {Number} Number representing daily winrate
 */
const countDailyWinrate = (matchesResults) => {
    if (matchesResults.length === 0) return 0;
    let victories = 0;

    matchesResults.forEach((victory) => (victory ? victories++ : null));

    return Number(((victories / matchesResults.length) * 100).toFixed(2));
};

/**
 *
 * @param {Array} matches Array of weekly matches to be processed
 * @returns {Array} Array of daily winrates to be rendered in chart
 */
export const countWeeklyWinrate = (matches) => {
    const winrateByDay = [[], [], [], [], [], [], []];

    matches.forEach(({ created, data: { victory } }) =>
        winrateByDay[new Date(created).getDay()].push(victory),
    );

    return winrateByDay.map((item) => countDailyWinrate(item));
};

/**
 *
 * @param {Array} matches Array of weekly matches to be processed
 * @returns {Array} Array of amount of games played by days
 */
export const countAmountOfMatchesDaily = (matches) => {
    const gamesPlayedByDay = [0, 0, 0, 0, 0, 0, 0];

    const lastWeekMatches = matches.filter(({ created }) =>
        moment()
            .startOf('week')
            .isBefore(created),
    );

    lastWeekMatches.forEach(
        ({ created, data: { victory } }) => ++gamesPlayedByDay[new Date(created).getDay()],
    );

    return gamesPlayedByDay;
};
