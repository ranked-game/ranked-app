import { setDotaListener, removeDotaListener, setLolListener, removeLolListener } from './games';

export const setOverwolfListeners = () => {
    tracker.log('Setting OW listeners...');

    overwolf.games.onGameInfoUpdated.addListener((info) => {
        // tracker.log('onGameInfoUpdated -> ', info);
        const { gameChanged, runningChanged } = info;
        const title = info?.gameInfo?.title;

        if (runningChanged) {
            switch (title) {
                case 'Dota 2':
                    removeDotaListener();
                    break;

                case 'League of Legends':
                    removeLolListener();
                    break;

                default:
                    return null;
            }
        }

        if (gameChanged) {
            switch (title) {
                case 'Dota 2':
                    setDotaListener();
                    break;

                case 'League of Legends':
                    setLolListener();
                    break;

                default:
                    tracker.log('Unsupported game launched -> ', title);
                    return null;
            }
        }
    });

    tracker.log('OW listeners set!');
};
