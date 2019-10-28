// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Instruments
import dotaLogo from '../../../../theme/assets/svg/dota-logo.svg';

// Actions
import { uiActions } from '../../../../bus/ui/actions';

const mapDispatchToProps = {
    fillLeftSide: uiActions.fillLeftSide,
};

@connect(
    null,
    mapDispatchToProps,
)
export default class GameHistoryRow extends Component {
    _openGameDetails = () => {
        const { fillLeftSide } = this.props;

        fillLeftSide('SpiderwebChart', {
            title: 'Game performance',
            data: {
                Points: [
                    Math.ceil(Math.random() * 10),
                    Math.ceil(Math.random() * 10),
                    Math.ceil(Math.random() * 10),
                    Math.ceil(Math.random() * 10),
                    Math.ceil(Math.random() * 10),
                    Math.ceil(Math.random() * 10),
                ],
            },
            categories: ['Duration', 'KDA', 'Supporting', 'Pushing', 'XPM', 'GPM'],
        });
    };

    render() {
        const { active } = this.props;

        return (
            <section
                className={`${Styles.container} ${active && Styles.active}`}
                id={1}
                onClick={this._openGameDetails}
            >
                <img className={Styles.gameLogo} src={dotaLogo} />
                <>
                    <p className={Styles.title}>Score:</p>
                    <p className={Styles.title}>Outcome:</p>
                    <p className={Styles.title}>Tournament name:</p>
                    <p className={Styles.title}>Points earned:</p>
                </>
                <>
                    <p className={Styles.data}>3 / 2 / 6</p>
                    <p className={Styles.data}>Victory</p>
                    <p className={Styles.data}>Dota 2 BigDaddy</p>
                    <p className={Styles.data}>15</p>
                </>
            </section>
        );
    }
}
