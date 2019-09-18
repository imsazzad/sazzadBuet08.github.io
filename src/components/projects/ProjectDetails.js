import React, {Component} from 'react';
import {Button, Modal} from "react-bootstrap";
import './ProjectDetailsModal.css';

class ProjectDetailsModal extends Component {

    render() {
        return (
            <Modal
                {...this.props}
                bsSize="large"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton>
                    <Modal.Title  className="infolytx-body-header-text infolytx-font">
                        {this.props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="infolytx-modal-body infolytx-body-text infolytx-font">
                    {this.props.text}
                </Modal.Body>
                {/*<Modal.Footer>*/}
                    {/*<Button bsStyle="link"*/}
                            {/*className="pull-right itx-btn light-margin" onClick={this.props.onHide}>Close</Button>*/}
                {/*</Modal.Footer>*/}
            </Modal>
        );
    }
}

export default ProjectDetailsModal;