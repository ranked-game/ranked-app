// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Instruments
import { GameHistoryRow } from '../../_shared/_profile';

// Actions
import { uiActions } from '../../../bus/ui/actions';

const mapStateToProps = (state) => ({
    ...state,
});

const mapDispatchToProps = {
    fillLeftSide: uiActions.fillLeftSide,
};

@connect(
    mapStateToProps,
    mapDispatchToProps,
)
export default class LatestGames extends Component {
    componentDidMount = () => {
        const { fillLeftSide } = this.props;

        fillLeftSide();
    };

    render() {
        return (
            <section className={Styles.container}>
                <GameHistoryRow />
                <GameHistoryRow />
                <GameHistoryRow />
                <GameHistoryRow />
                <GameHistoryRow />
                <GameHistoryRow />
                <GameHistoryRow />
            </section>
        );
    }
}
