import React, { Component } from "react";
import getLaunchesData from "../../Api/getLaunchesData";
import { fonts, colors } from "../../Constants/themes";
import { ContainerFluid, Row, Col } from "../../Styled";
import Card from "./Card";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      loading: false,
      limit: 100,
      launch: false,
      land: false,
      year: "",
    };
  }

  componentDidMount = () => {
    console.log("Will be called on the server...");
    this.fetchAllLaunches();
  };

  // const [data, setData] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [limit, setLimit] = useState(100);
  // const [launch, setLaunch] = useState(false);
  // const [land, setLand] = useState(false);
  // const [year, setYear] = useState(false);

  fetchAllLaunches = async () => {
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

  // useEffect(() => {
  //   fetchAllLaunches();
  // }, []);

  render() {
    console.log("data", this.state.data);
    return (
      <React.Fragment>
        <Row>
          <Col size={["xs-12", "sm-12", "md-6", "lg-3", "xl-3"]}>
            <Card />
          </Col>
          <Col size={["xs-12", "sm-12", "md-6", "lg-3", "xl-3"]}>
            <Card />
          </Col>
          <Col size={["xs-12", "sm-12", "md-6", "lg-3", "xl-3"]}>
            <Card />
          </Col>
          <Col size={["xs-12", "sm-12", "md-6", "lg-3", "xl-3"]}>
            <Card />
          </Col>
        </Row>
        <style jsx>
          {`
            .heading {
              font-family: ${fonts.Roboto};
              font-size: 22px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: 1.5;
              letter-spacing: normal;
              text-align: left;
              color: ${colors.heading};
              margin-bottom: 5px;
            }
          `}
        </style>
      </React.Fragment>
    );
  }
}
