// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Instruments
import logo from '../../../theme/assets/svg/logoShort.svg';

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
export default class HallOfFame extends Component {
    componentDidMount = () => {
        const { fillLeftSide } = this.props;

        fillLeftSide();
    };

    render() {
        return (
            <section className={Styles.container}>
                <img src={logo} alt="" className={Styles.logo} />
                <p className={Styles.text}>This section is under construction yet</p>
            </section>
        );
    }
}
