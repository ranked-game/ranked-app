//Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

@hot(module)
export default class App extends Component {
    render() {
        return (
            <div className="App">
                <img
                    src={
                        'https://4vector.com/i/free-vector-nycs-bull-trans-r-clip-art_109768_Nycs_Bull_Trans_R_clip_art_hight.png'
                    }
                    className="App-logo"
                    alt="logo"
                />
            </div>
        );
    }
}
