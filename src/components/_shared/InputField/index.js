// Core
import React, { Component } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import hidePassword from '../../../theme/assets/svg/hidePassword.svg';

export default class InputField extends Component {
    ref = React.createRef();

    state = {
        editing: false,
        inputType: 'password',
    };

    _startEditing = () => {
        this.setState(
            {
                editing: true,
            },
            () => {
                this.ref.current.focus();
            },
        );
    };

    _onBlur = () => {
        const { value } = this.props;

        if (value.length > 0) return null;

        return this.setState({
            editing: false,
        });
    };

    _showPassword = () => {
        this.setState({
            inputType: 'text',
        });
    };

    _hidePassword = () => {
        this.setState({
            inputType: 'password',
        });
    };

    render() {
        const { className, onChange, value, label, type, name, valid } = this.props;
        const { editing, inputType } = this.state;

        return (
            <div
                className={`${
                    editing ? Styles.containerEditing : Styles.container
                } ${className} ${!valid && Styles.invalidInput}`}
                onClick={this._startEditing}
            >
                <p>{label}</p>
                <input
                    type={type === 'password' ? inputType : type}
                    value={value}
                    onChange={onChange}
                    ref={this.ref}
                    onBlur={this._onBlur}
                    name={name}
                />
                {type === 'password' && (
                    <img
                        src={hidePassword}
                        alt="show or hide password"
                        onMouseDown={this._showPassword}
                        onMouseUp={this._hidePassword}
                    />
                )}
            </div>
        );
    }
}
