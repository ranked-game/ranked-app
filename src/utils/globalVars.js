export const setGlobalVariables = () => {
    console.log('[APP] -> Setting additional global variables');

    window.tracker = {
        log() {
            return console.log('[TRACKER] -> ', ...arguments);
        },
    };
};
