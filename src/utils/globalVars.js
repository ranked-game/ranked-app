export const setGlobalVariables = () => {
    console.log('[App] -> Setting additional global variables');

    window.tracker = {
        log() {
            return console.log('[Tracker] -> ', ...arguments);
        },
    };
};
