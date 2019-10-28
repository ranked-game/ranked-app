// Core
import React, { Component } from 'react';

// Instruments
import EventBus, { types } from '../../bus/_EventBus';

export default class Controller extends Component {
    componentDidMount = () => {
        const tokens = localStorage.getItem('ranked-external-auth');

        if (tokens) {
            overwolf.windows.obtainDeclaredWindow('app', (result) => {
                const {
                    window: { id },
                    status,
                } = result;

                if (status === 'success') {
                    overwolf.windows.restore(id);
                    overwolf.windows.changePosition(
                        id,
                        0.5 * screen.width - 210,
                        0.5 * screen.height - 350,
                    );
                }
            });
        } else {
            overwolf.windows.obtainDeclaredWindow('login', (result) => {
                const {
                    window: { id },
                    status,
                } = result;

                if (status === 'success') {
                    overwolf.windows.restore(id);
                }
            });
        }

        // creating event bus
        window.eventBus = new EventBus();
        window.eventBusTypes = types;
    };

    render() {
        return <div />;
    }
}
