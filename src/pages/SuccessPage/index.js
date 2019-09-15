// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Components
import TopControlBar from '../../components/TopControlBar';

export default class SuccessPage extends Component {
    componentDidMount = () => {
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

        overwolf.windows.getCurrentWindow((result) => {
            const {
                window: { id },
                status,
            } = result;

            if (status === 'success') {
                overwolf.windows.close(id);
            }
        });
    };

    render() {
        return (
            <>
                <TopControlBar />
                <section className={Styles.container}>LOADING.....</section>
            </>
        );
    }
}
