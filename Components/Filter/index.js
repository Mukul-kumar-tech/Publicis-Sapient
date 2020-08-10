import React, { Component } from "react";
import { colors, fonts } from "../../Constants/themes";
import yearOptions from "../../Constants/FIlterOptions";
import { size } from "../../Constants/size";

export default class Filter extends Component {
  render() {
    const {
      launch,
      land,
      year,
      launchHandler,
      landHandler,
      yearHandler,
    } = this.props;
    return (
      <React.Fragment>
        <div className="card">
          <div className="heading">Filters</div>
          <div className="label">Launch Year</div>
          <div className="flex-grow">
            {yearOptions &&
              yearOptions.map((item, index) => {
                return (
                  <div
                    className={
                      year == item.value
                        ? "color-div margin active"
                        : "color-div margin"
                    }
                    key={index}
                    onClick={() => yearHandler(item.value)}
                  >
                    {item.value}
                  </div>
                );
              })}
          </div>

          <div className="label">Successful Launch</div>
          <div className="flex">
            <div
              className={launch ? "color-div active" : "color-div"}
              onClick={() => launchHandler(true)}
            >
              True
            </div>
            <div
              className={!launch ? "color-div active" : "color-div"}
              onClick={() => launchHandler(false)}
            >
              False
            </div>
          </div>

          <div className="label">Successful Landing</div>
          <div className="flex">
            <div
              className={land ? "color-div active" : "color-div"}
              onClick={() => landHandler(true)}
            >
              True
            </div>
            <div
              className={!land ? "color-div active" : "color-div"}
              onClick={() => landHandler(false)}
            >
              False
            </div>
          </div>
        </div>
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
            .heading {
              font-family: ${fonts.Roboto};
              font-size: 18px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.5;
              letter-spacing: normal;
              text-align: left;
              color: ${colors.heading};
              margin-bottom: 5px;
            }
            .label {
              font-family: ${fonts.Roboto};
              font-size: 16px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.5;
              letter-spacing: normal;
              text-align: center;
              color: ${colors.heading};
              border-bottom: 1px solid ${colors.border};
              margin: 10px;
            }
            .flex {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin: 5px 0px;
            }
            .flex-grow {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              margin: 5px 0px;
            }
            .margin {
              margin: 5px;
            }
            .color-div {
              background-color: ${colors.filter};
              padding: 3px 20px;
              font-family: ${fonts.Roboto};
              font-size: 14px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.5;
              letter-spacing: normal;
              text-align: center;
              color: ${colors.heading};
              width: 20%;
              cursor: pointer;
            }
            .active {
              background-color: #7cba01 !important;
            }
            @media (min-width: ${size.tablet}) and (max-width: ${size.laptop}) {
              .color-div {
                width: 23%;
                padding: 3px 10px;
              }
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
