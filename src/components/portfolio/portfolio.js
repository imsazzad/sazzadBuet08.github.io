import React, { Component } from 'react';
import ProjectDetailsModal from "../projects/ProjectDetails";
import { Col, Grid, Image, Row, Panel } from "react-bootstrap";
import resumeData from "../../resumeData";
export default class Porfolio extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      modalShow: false,
    };
  }

  handleClick(){
    this.setState({
      modalShow: true
    })
  }
  handleClose() {
    this.setState({
      modalShow: false
    });
  }

  render() {
    const modal = <ProjectDetailsModal
        show={this.state.modalShow}
        onHide={this.handleClose}
        title= "Deep Care"
        text={this.props.resumeData.project_details.deep_care}
    />;
    // return (
    {/*<React.Fragment>*/}
    {/*<Panel>*/}
    {/*<Panel.Body className="body-background-color">*/}
    {/*<p className="infolytx-body-header-text infolytx-font">Select a sample EHR and submit for annotation</p>*/}
    {/*/!* <p className="infolytx-body-text infolytx-font">Select any one to view and submit for annotation</p> *!/*/}
    {/*<Row className="text-center">*/}
    {/*{modal}*/}
    {/*</Row>*/}
    {/*</Panel.Body>*/}
    {/*</Panel>*/}

    {/*</React.Fragment>*/}
    // );

    let resumeData = this.props.resumeData;
    return (
        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {
                  resumeData.portfolio && resumeData.portfolio.map((item)=>{
                    return(
                        <div className="columns portfolio-item">
                          <div className="item-wrap">
                            <a href="#modal-01" onClick={this.handleClick}>
                              <img src={`${item.imgurl}`} className="item-img"/>
                              <div className="overlay">
                                <div className="portfolio-item-meta">
                                  <h5>{item.name}</h5>
                                  <p>{item.description}</p>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="row">
            <React.Fragment>
              <Panel>
                <Panel.Body className="body-background-color">
                  <Row className="text-center">
                    {modal}
                  </Row>
                </Panel.Body>
              </Panel>

            </React.Fragment>
          </div>
        </section>
    );
  }
}
