import React from "react";
import { Col, Row, Dropdown, Table } from "react-bootstrap";

function Demo() {
  let demoResponse = {
    constraints: [
      {
        body: 5,
        key: null,
        lower: null,
        name: "res1",
        size: 1,
        upper: 5,
      },
      {
        body: 12,
        key: null,
        lower: null,
        name: "res2",
        size: 1,
        upper: 12,
      },
    ],
    name: "name_model",
    objectives: [
      {
        active: true,
        index: null,
        key: null,
        name: "obj",
        size: 1,
        value: 27,
      },
    ],
    variables: [
      {
        domain: "PositiveIntegers",
        fixed: false,
        index: null,
        key: null,
        lower: 1,
        name: "units_a",
        stale: false,
        upper: null,
        value: 2,
      },
      {
        domain: "PositiveIntegers",
        fixed: false,
        index: null,
        key: null,
        lower: 1,
        name: "units_b",
        stale: false,
        upper: null,
        value: 3,
      },
    ],
  };

  function variableTable(variable?: any, index?: Number) {
    return (
      <Table bordered hover className="response-table">
        <thead>
          <tr className="response-table-head">
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody className="response-table-body">
          <tr>
            <td>{variable.name}</td>
            <td>{variable.value}</td>
          </tr>
          <tr>
            <td>Domain</td>
            <td>{variable.domain}</td>
          </tr>
          <tr>
            <td>Min</td>
            <td></td>
          </tr>
          <tr>
            <td>Max</td>
            <td></td>
          </tr>
          <tr>
            <td>Possible values</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    );
  }

  return (
    <Col id="demo">
      <h1 className="page-title">Try the magic</h1>
      <Row className="row-demo-steps">
        <Col xs={2}>
          <div className="demo-number-wrapper">
            <div className="demo-number">1</div>
          </div>
        </Col>
        <Col className="margin-top-steps d-flex flex-column align-items-start">
          <div className="stepDescription">Load your model</div>
          <div className="stepSubtitle">
            Check out the currently supported formats
          </div>
          <Row className="pl-3 mt-5">
            <span className="stepSubtitle mr-3">
              Choose your model's format{" "}
            </span>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">LaTeX</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>
        </Col>
      </Row>
      <Row className="row-demo-steps">
        <Col xs={2}>
          <div className="demo-number-wrapper">
            <div className="demo-number">2</div>
          </div>
        </Col>
        <Col className="margin-top-steps d-flex flex-column align-items-start">
          <div className="stepDescription pb-4">The results you requested</div>
          <Col
            id="results-col"
            className="d-flex flex-column align-items-center"
          >
            <div className="stepDescription ">Decision Variables</div>
            <div
              id="results-variables"
              className="d-flex flex-row justify-content-center flex-wrap pt-1"
            >
              {demoResponse.variables.map((value, index) =>
                variableTable(value, index)
              )}
            </div>
          </Col>
        </Col>
      </Row>
    </Col>
  );
}

export default Demo;
