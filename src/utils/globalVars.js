export const setGlobalVariables = () => {
    console.log('[APP] -> Setting additional global variables');

    window.tracker = {
        log() {
            return console.log('[TRACKER] -> ', ...arguments);
        },

        error() {
            const text = ['%c[TRACKER] ->', ...arguments].join(' ');

            return console.log(text, 'color: red');
        },

        warning() {
            const text = ['%c[TRACKER] ->', ...arguments].join(' ');

            return console.log(text, 'color: goldenrod');
        },

        success() {
            const text = ['%c[TRACKER] ->', ...arguments].join(' ');

            return console.log(text, 'color: green');
        },
    };
};
