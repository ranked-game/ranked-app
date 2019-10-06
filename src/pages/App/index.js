// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

// Components
import Admin, { MainNavigation } from '../../components';

const mapStateToProps = (state) => ({
    leftSide: state.ui.get('leftSide'),
    rightSide: state.ui.get('rightSide'),
});

const mapDispatchToProps = {};

@connect(
    mapStateToProps,
    mapDispatchToProps,
)
export default class App extends Component {
    render() {
        const { leftSide, rightSide } = this.props;

        return (
            <section className={Styles.container}>
                <div className={Styles.left}>
                    <MainNavigation activeTab={rightSide} />
                    <Admin name={leftSide} />
                    <div id={Styles.adDiv} />
                </div>
                <div className={Styles.right}>
                    <Admin name={rightSide} />
                </div>
            </section>
        );
    }
}
