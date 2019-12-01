import React, {Component, Fragment} from 'react';
import Modal from "./components/UI/modal/Modal";

class App extends Component {
    state = {
        show: false,
    };

    render() {
        return (
            <Fragment>
                <button className="btn btn-primary" onClick={this.show}>
                    open modal
                </button>
                <br/>
                <br/>
                <button className="btn btn-dark">
                    create alert
                </button>
                <Modal
                    show={this.state.show}
                    close={this.close}
                    title='some modal title'
                >
                    <p>
                        Some modal body test text
                    </p>
                </Modal>
            </Fragment>
        );
    }

    show = () => {
        this.setState({show: true});
    };
    continue = () => {
      alert('Test functional for continue button');
    };
    close = () => {
        this.setState({show: false});
    }
}

export default App;
