import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Details = (props) => {
  const [data, setData] = useState(props.location.state.item);

  const [peopleResponse, setPeopleResponse] = useState();
  let details = JSON.parse(localStorage.getItem("details"));
  console.log(details);
  let people = data.people;

  const getPeople = async (val) => {
    const res = await fetch(val);
    let resJson = await res.json();
    setPeopleResponse(resJson);
  };

  console.log(data);
  return (
    <div style={{ textAlign: "center" }}>
      <div className="container">
        <div>
          <div>
            <div
              className="card card-just-text py-4"
              data-background="color"
              data-color="purple"
              data-radius="none"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                fontFamily: "Monospace",
                fontWeight: "500",
                textTransform: "uppercase",
                fontSize: "18px",
                color: "#5a283d",
              }}
            >
              <Container>
                <Row>
                  <Col>Classification</Col>
                  <Col>{data.classification}</Col>
                </Row>
                <Row>
                  <Col>Designation</Col>
                  <Col>{data.designation}</Col>
                </Row>
                <Row>
                  <Col>Average Height</Col>
                  <Col>{data.average_height}</Col>
                </Row>
                <Row>
                  <Col>Skin Color</Col>
                  <Col>{data.skin_colors}</Col>
                </Row>
                <Row>
                  <Col>Hair Color</Col>
                  <Col>{data.hair_colors}</Col>
                </Row>
                <Row>
                  <Col>Eye Color</Col>
                  <Col>{data.eye_colors}</Col>
                </Row>
                <Row>
                  <Col>Average Life Span</Col>
                  <Col>{data.average_lifespan}</Col>
                </Row>
                <Row>
                  <Col>Language</Col>
                  <Col>{data.language}</Col>
                </Row>

                {people.map((val, ind) => (
                  <Row key={ind}>
                    <button onClick={() => getPeople(val)}>People-{ind}</button>
                  </Row>
                ))}

                {peopleResponse && (
                  <>
                    <Row>
                      <Col>Name</Col>
                      <Col>{peopleResponse?.name}</Col>
                    </Row>
                    <Row>
                      <Col>Birthday</Col>
                      <Col>{peopleResponse?.birth_year}</Col>
                    </Row>
                    <Row>
                      <Col>Height</Col>
                      <Col>{peopleResponse?.height}</Col>
                    </Row>
                    <Row>
                      <Col>Mass</Col>
                      <Col>{peopleResponse?.mass}</Col>
                    </Row>
                    <Row>
                      <Col>Hair Color</Col>
                      <Col>{peopleResponse?.hair_color}</Col>
                    </Row>
                    <Row>
                      <Col>Skin Color</Col>
                      <Col>{peopleResponse?.skin_color}</Col>
                    </Row>
                    <Row>
                      <Col>Eye Color</Col>
                      <Col>{peopleResponse?.eye_color}</Col>
                    </Row>
                  </>
                )}
              </Container>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
