import React from "react";
import data from "../data.json";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const Item = styled("p")`
  width: 80%;
  margin-left: 15px;
  margin-top: 5px;
`;

export const Home = () => {
  const naviagte = useNavigate();

  const handleNavigate = (id) => {
    naviagte(`/profilepage/${id}`);
  };
  return (
    <div>
      <div className="curve_div"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="curve1"
      >
        <path
          fill="#c5c4c4"
          fill-opacity="1"
          d="M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,186.7C672,192,768,256,864,245.3C960,235,1056,149,1152,128C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="curve2"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,186.7C672,192,768,256,864,245.3C960,235,1056,149,1152,128C1248,107,1344,149,1392,170.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="main">
        <div>
          <div className="account_heading">
            <h3>Select an account</h3>
          </div>
          <div className="stacks-div">
            <Stack
              divider={<Divider orientation="horizontal" flexItem />}
              spacing={2}
            >
              {data?.users.map((e) => {
                return (
                  <Stack
                    onClick={() => handleNavigate(e.id)}
                    height={"25px"}
                    direction={"row"}
                    key={e.id}
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      src={e.profilepicture}
                      className="profile_img"
                      alt=""
                    />
                    <Item>{e.name}</Item>
                  </Stack>
                );
              })}
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};
