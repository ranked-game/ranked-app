import { setDotaListener, removeDotaListener } from './dota';
import { setR6SiegeListener, removeR6SiegeListener } from './r6s';

const development = process.env.NODE_ENV === 'development';
let listenerSet = false;

export const setOverwolfListeners = () => {
    if (development) return tracker.error('Tracker is disabled for development mode');

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

                case "Tom Clancy's Rainbow Six: Siege":
                    removeR6SiegeListener();
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

            case "Tom Clancy's Rainbow Six: Siege":
                setR6SiegeListener();
                break;

            default:
                tracker.log('Unsupported game launched -> ', title);
                return null;
        }

        return (listenerSet = true);
    });

    return tracker.log('OW listeners set!');
};
