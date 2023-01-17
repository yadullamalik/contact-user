import { Divider, Stack } from "@mui/material";
import "./HeaderProfile.css";
import data from "../data.json";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const HeaderProfile = ({
  toggleHeaderProfile,
  setToggleHeaderProfile,
  d,
}) => {
  const [usersData, setUsersData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setUsersData(data?.users.filter((e) => e.id != d.id));
  }, [d]);

  const handleHeaderToggle = (e) => {
    e.stopPropagation();
    setToggleHeaderProfile(!toggleHeaderProfile);
  };

  const handleHeaderToggle2 = (e) => {
    e.stopPropagation();
    setToggleHeaderProfile(true);
  };

  const handleUserNavigate = (event, id) => {
    event.stopPropagation();
    setToggleHeaderProfile(false);
    navigate(`/profilepage/${id}`);
  };

  const handleSignout = () => {
    setToggleHeaderProfile(false);
    navigate("/");
  };
  return (
    <div style={{ cursor: "pointer" }}>
      <Stack direction={"row"} gap="10px" onClick={handleHeaderToggle}>
        <img src={d.profilepicture} className="header_profile_img" alt="" />
        <p>{d.name}</p>
      </Stack>
      {toggleHeaderProfile && (
        <Stack className="user_stack" onClick={handleHeaderToggle2}>
          <Stack
            divider={<Divider orientation="horizontal" flexItem />}
            spacing={2}
          >
            <Stack>
              <img src={d.profilepicture} className="user_profile_img" alt="" />
              <p>{d.name}</p>
              <p>{d.email}</p>
            </Stack>
            {usersData.map((e, i) => {
              if (i < 2) {
                return (
                  <Stack
                    key={e.id}
                    direction="row"
                    className="users_stack"
                    onClick={(event) => handleUserNavigate(event, e.id)}
                  >
                    <img
                      src={e.profilepicture}
                      className="users_profile_img"
                      alt=""
                    />
                    <p>{e.name}</p>
                  </Stack>
                );
              }
            })}
          </Stack>
          <button className="signout_btn" onClick={handleSignout}>
            Sign out
          </button>
        </Stack>
      )}
    </div>
  );
};
