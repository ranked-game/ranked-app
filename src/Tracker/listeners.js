import { setDotaListener, removeDotaListener, setLolListener, removeLolListener } from './games';

let listenerSet = false;

export const setOverwolfListeners = () => {
    tracker.log('Setting OW listeners...');

    overwolf.games.onGameInfoUpdated.addListener((info) => {
        // tracker.log('onGameInfoUpdated -> ', info);
        const { runningChanged } = info;
        const title = info?.gameInfo?.title;

        if (runningChanged) {
            switch (title) {
                case 'Dota 2':
                    removeDotaListener();
                    listenerSet = false;
                    break;

                case 'League of Legends':
                    removeLolListener();
                    listenerSet = false;
                    break;

                default:
                    return null;
            }

            return null;
        }

        if (listenerSet) return null;

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

        return (listenerSet = true);
    });

    tracker.log('OW listeners set!');
};
