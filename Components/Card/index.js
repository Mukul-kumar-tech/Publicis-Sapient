import React from "react";
import { Row, Col } from "../../Styled";
import { colors, fonts } from "../../Constants/themes";

export default function Card(props) {
  const { data } = props;
  return (
    <React.Fragment>
      <Row>
        {data &&
          data.map((item, index) => {
            return (
              <Col
                size={["xs-12", "sm-12", "md-6", "lg-3", "xl-3"]}
                key={index}
              >
                <div className="card">
                  <div className="img-div flex">
                    <img className="img" src={item.links.mission_patch_small} />
                  </div>
                  <div className="name">{item.mission_name}</div>
                  <div className="text dark-color">Mission ids:</div>
                  <div className="text light-color list">{item.mission_id}</div>
                  <div className="text dark-color">
                    Launch year:{" "}
                    <span className="light-color">{item.launch_year}</span>
                  </div>
                  <div className="text dark-color">
                    Successful Launch:{" "}
                    <span className="light-color">{item.launch_success}</span>
                  </div>
                  <div className="text dark-color">
                    Successful Landing:{" "}
                    <span className="light-color">
                      {item.rocket.first_stage.cores[0].land_success}
                    </span>
                  </div>
                </div>
              </Col>
            );
          })}
      </Row>
      <style jsx>
        {`
          .card {
            background-color: rgb(255, 255, 255);
            margin-bottom: 15px;
            position: relative;
            border-radius: 5px;
            border-width: 1px;
            border-style: solid;
            border-color: rgb(216, 216, 216);
            border-image: initial;
            padding: 15px;
            margin: 7.5px;
          }
          .flex {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .img-div {
            background-color: ${colors.body};
            padding: 5px;
          }
          .img {
            object-fit: contain;
            width: 100%;
          }
          .name {
            font-family: ${fonts.Roboto};
            font-size: 22px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: normal;
            text-align: left;
            color: ${colors.linkColor};
            margin-bottom: 5px;
          }
          .text {
            font-family: ${fonts.Roboto};
            font-size: 22px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: normal;
            text-align: left;
            margin-bottom: 5px;
          }
          .dark-color {
            color: ${colors.primary};
            font-weight: 600;
          }
          .light-color {
            color: ${colors.secondary} !important;
            font-weight: normal !important;
          }
          .list {
            list-style-type: circle;
          }
        `}
      </style>
    </React.Fragment>
  );
}
