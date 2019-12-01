import React, {Component, Fragment} from 'react';
import Modal from "./components/UI/modal/Modal";

class App extends Component {
    state = {
        show: false,
    };

    render() {
        return (
            <Fragment>
                <button className="btn btn-primary" onClick={this.showModal}>
                    open modal
                </button>
                <br/>
                <br/>
                <button className="btn btn-dark">
                    create alert
                </button>
                <Modal
                    show={this.state.show}
                    title='some modal title'
                >
                    <p>
                        Some modal body test text
                    </p>
                </Modal>
            </Fragment>
        );
    }

    showModal = () => {
        this.setState({show: !this.state.show});
    }
}

export default App;
