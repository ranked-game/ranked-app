// Core
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Styles
import Styles from './styles.module.scss';

const mapStateToProps = (state) => ({
    ...state,
});

@connect(mapStateToProps)
export default class LastMatchBox extends Component {
    render() {
        const { className } = this.props;

        return <section className={`${Styles.container} ${className}`}>Last match</section>;
    }
}
