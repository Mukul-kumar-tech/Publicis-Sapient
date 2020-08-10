import React, { Component } from "react";
import getLaunchesData from "../../Api/getLaunchesData";
import { fonts, colors } from "../../Constants/themes";
import { ContainerFluid, Row, Col } from "../../Styled";
import Card from "../Card";
import Filter from "../Filter";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      loading: false,
      limit: 100,
      launch: "",
      land: "",
      year: "",
    };
  }

  componentDidMount = () => {
    this.fetchAllLaunches();
  };

  launchHandler = async (value) => {
    this.setState({
      launch: value,
    });
    await this.fetchAllLaunches();
  };

  landHandler = async (value) => {
    this.setState({
      land: value,
    });
    await this.fetchAllLaunches();
  };

  yearHandler = async (value) => {
    this.setState({
      year: value,
    });
    await this.fetchAllLaunches();
  };

  fetchAllLaunches = async () => {
    const { limit, launch, land, year } = this.state;
    try {
      const res = await getLaunchesData(limit, launch, land, year);
      if (res.ok) {
        const newData = await res.json();
        console.log("res", newData);
        this.setState({
          data: newData,
          loading: false,
        });
      } else {
        this.setState({
          loading: false,
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
      });
      console.error(error);
    }
  };

  render() {
    const { data, launch, land, year } = this.state;
    return (
      <React.Fragment>
        <ContainerFluid>
          <div className="heading">SpaceX Launch Programs</div>
          <Row>
            <Col size={["xs-12", "sm-12", "md-4", "lg-2", "xl-2"]}>
              <Filter
                launchHandler={this.launchHandler}
                landHandler={this.landHandler}
                yearHandler={this.yearHandler}
                launch={launch}
                land={land}
                year={year}
              />
            </Col>
            <Col size={["xs-12", "sm-12", "md-8", "lg-10", "xl-10"]}>
              <Card data={data} />
            </Col>
          </Row>
        </ContainerFluid>

        <style jsx>
          {`
            .heading {
              font-family: ${fonts.Roboto};
              font-size: 28px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.5;
              letter-spacing: normal;
              text-align: left;
              color: ${colors.heading};
              margin: 7.5px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
