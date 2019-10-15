// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

export default class GameDetails extends Component {
    render() {
        const { id } = this.props;

        return <section className={Styles.container}>GameDetails section {id}</section>;
    }
}
