// Core
import React, { Component } from 'react';

// Instruments
import EventBus, { types } from '../../bus/_EventBus';

export default class Controller extends Component {
    componentDidMount = () => {
        const rememberMe = localStorage.getItem('ranked-remember-me');

        if (rememberMe) {
            overwolf.windows.obtainDeclaredWindow('app', (result) => {
                const {
                    window: { id },
                    status,
                } = result;

                if (status === 'success') {
                    overwolf.windows.restore(id);
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
