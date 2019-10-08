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
    leftSideProps: state.ui.get('leftSideProps'),
    rightSideProps: state.ui.get('rightSideProps'),
});

const mapDispatchToProps = {};

@connect(
    mapStateToProps,
    mapDispatchToProps,
)
export default class App extends Component {
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
