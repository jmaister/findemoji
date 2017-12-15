import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home.jsx';
import ButtonMatrix from './ButtonMatrix.jsx';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>Find Emoji</h1>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/level/:level" component={ButtonMatrix} />
                    </Switch>
                </div>
            </Router>  
        );
    }
}

render(<App />, document.getElementById('app'));