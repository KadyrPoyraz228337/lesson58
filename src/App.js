import React, {Component, Fragment} from 'react';
import Modal from "./components/UI/modal/Modal";
import Alert from "./components/UI/Alert/Alert";

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
                <button className="btn btn-dark" onClick={this.showAlert}>
                    create alert
                </button>
                <div style={{maxWidth: '500px', margin: '15px 0 0 0'}}>
                    <Alert
                        show={this.state.showAlert}
                        type='warning'
                        dismiss={this.dismiss}
                    >
                        Some alert text
                    </Alert>
                </div>
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
    };
    showAlert = () => {
        this.setState({showAlert: true})
    };
    dismiss = () => {
        this.setState({showAlert: false})
    }
}

export default App;
