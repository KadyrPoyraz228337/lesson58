import React, {Component, Fragment} from 'react';
import Modal from "./components/UI/modal/Modal";

class App extends Component {
    state = {
        showModal: false,
        showAlert: false,
    };
    render() {
        const objects = [
            {type: 'primary', label: 'Continue', clicked: this.continue},
            {type: 'danger', label: 'Close', clicked: this.close},
        ];
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
                    show={this.state.showModal}
                    close={this.close}
                    title='some modal title'
                    array={objects}
                >
                    <p>
                        Some modal body test text
                    </p>
                </Modal>
            </Fragment>
        );
    }

    show = () => {
        this.setState({showModal: true});
    };
    continue = () => {
      alert('Test functional for continue button');
    };
    close = () => {
        this.setState({showModal: false});
    }
}

export default App;
