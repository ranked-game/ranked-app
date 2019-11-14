// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Components
import Admin, { MainNavigation } from '../../components';

// Actions
import { profileActions } from '../../bus/profile/actions';
import { authActions } from '../../bus/auth/actions';

const mapStateToProps = (state) => ({
    leftSide: state.ui.get('leftSide'),
    rightSide: state.ui.get('rightSide'),
    leftSideProps: state.ui.get('leftSideProps'),
    rightSideProps: state.ui.get('rightSideProps'),
});

const mapDispatchToProps = {
    fetchMatchHistoryAsync: profileActions.fetchMatchHistoryAsync,
    getUserDataAsync: authActions.getUserDataAsync,
};

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
    componentDidMount = () => {
        const { fetchMatchHistoryAsync, getUserDataAsync } = this.props;
        getUserDataAsync();

        if (process.env.NODE_ENV !== 'production') return null;

        // EventBus init
        const { eventBus } = overwolf.windows.getMainWindow();
        eventBus.addListener('MATCH_ENDED', fetchMatchHistoryAsync);

        // Getting monitors
        // (we want main app window to be shown at the second monitor if possible)
        return overwolf.utils.getMonitorsList(this._moveAppToTheSecondMonitor);
    };

    _moveAppToTheSecondMonitor = ({ displays }) => {
        // getting target display
        const { x, y } =
            displays.length > 1 ? displays.filter((item) => !item.is_primary)[0] : displays[0];

        overwolf.windows.obtainDeclaredWindow('app', ({ window, status }) => {
            if (status !== 'success') return null;
            const { id, width: appWindowWidth, height: appWindowHeight } = window;

            return overwolf.windows.changePosition(
                id,
                x + (screen.availWidth - appWindowWidth) * 0.5,
                y + (screen.availHeight - appWindowHeight) * 0.5,
            );
        });
    };

    render() {
        const { leftSide, rightSide, leftSideProps, rightSideProps } = this.props;

        return (
            <section className={Styles.container}>
                <div className={Styles.left}>
                    <MainNavigation activeTab={rightSide} />
                    <Admin name={leftSide} props={leftSideProps} />
                    <div id={Styles.adDiv} />
                </div>
                <div className={Styles.right}>
                    <Admin name={rightSide} props={rightSideProps} />
                </div>
            </section>
        );
    }
}
