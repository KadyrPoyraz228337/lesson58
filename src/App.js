import React, {Component, Fragment} from 'react';

class App extends Component {
    state = {
      modalIsOpen: false,
    };
    render() {
        return (
            <Fragment>
                <button className="btn btn-primary">
                    open modal
                </button>
                <br/>
                <br/>
                <button className="btn btn-dark">
                    create alert
                </button>
            </Fragment>
        );
    }
}

export default App;
