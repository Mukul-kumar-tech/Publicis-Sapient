import React from "react";
import { size } from "../../constants/size";

export default (props) => (
  <div style={props.style}>
    {props.children}
    <style jsx>{`
      div {
        width: 100%;
        padding-right: 7.5px;
        padding-left: 7.5px;
        margin: 0 auto;
      }
      @media (min-width: ${size.mobile}) {
        div {
          max-width: 700px;
        }
      }
      @media (min-width: ${size.tablet}) {
        div {
          max-width: 1024px;
        }
      }
      @media (min-width: ${size.laptop}) {
        div {
          max-width: 1440px;
        }
      }
      @media (min-width: ${size.desktop}) {
        div {
          max-width: 1920px;
        }
      }
    `}</style>
  </div>
);
