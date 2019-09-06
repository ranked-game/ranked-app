// Core
import React, { Component } from 'react';

// Instruments
import EventBus from '../../bus/_EventBus';

export default class Controller extends Component {
    componentDidMount = () => {
        overwolf.windows.obtainDeclaredWindow('login', (result) => {
            const {
                window: { id },
                status,
            } = result;

            if (status === 'success') {
                overwolf.windows.restore(id);
            }
        });

        // creating event bus
        window.eventBus = new EventBus();
    };

    render() {
        return <div />;
    }
}
