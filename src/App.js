import React, { Component } from 'react';
import './App.css';

import Weather from './components/Weather-components/Weather.js';
import News2 from "./components/News-components/News2.js";

class App extends Component {
    render() {
        return (
            <div>
                <h1 className='centered heading'>Morning Today</h1>
                {/* <div className="AppFlex"> */}
                    <div className='topMargin'>
                        <Weather />
                    </div>
                    {/* <div className='Children'> */}
                        {/* <News2 /> */}
                    {/* </div> */}
                {/* </div> */}
            </div>
        );
    }
}

export default App;

