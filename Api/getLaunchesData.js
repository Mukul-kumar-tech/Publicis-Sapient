import { API_URL } from "../Constants/api"; // Global file for URLS
import fetch from "isomorphic-unfetch";

export default (limit, launchSuccess, landSuccess, launchYear) => {
  return fetch(
    API_URL +
      `launches?limit=${limit}${
        launchSuccess
          ? `&launch_success=${launchSuccess}`
          : landSuccess
          ? `&land_success=${landSuccess}`
          : launchYear
          ? `&launch_year=${launchYear}`
          : ``
      }`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};
