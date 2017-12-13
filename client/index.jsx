import React from 'react';
import { render } from 'react-dom';

import ButtonMatrix from './ButtonMatrix.jsx';

class App extends React.Component {
    render() {
        return [
            "Hello React!",
            <ButtonMatrix key="matrix" side="5" />
        ];
    }
}

render(<App />, document.getElementById('app'));