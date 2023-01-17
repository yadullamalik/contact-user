import { Divider, Stack } from "@mui/material";
import React, { useState } from "react";
import { HeaderProfile } from "./HeaderProfile";
import "./Profile.css";
import map from "../assets/map.png";

export const Profile = ({ d }) => {
  const [toggleHeaderProfile, setToggleHeaderProfile] = useState(false);
  return (
    <div onClick={() => setToggleHeaderProfile(false)}>
      <Stack direction={"row"} justifyContent="space-between">
        <h3>Profile</h3>
        <div>
          <HeaderProfile
            toggleHeaderProfile={toggleHeaderProfile}
            setToggleHeaderProfile={setToggleHeaderProfile}
            d={d}
          />
        </div>
      </Stack>
      <hr />
      <Stack
        direction={"row"}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={5}
        gap="25px"
        padding={"30px"}
        paddingLeft="0px"
      >
        <Stack
          divider={<Divider orientation="horizontal" flexItem />}
          className="profile_div"
        >
          <div>
            <div>
              <img src={d.profilepicture} className="profile_image" alt="" />
              <br />
              <span className="data_span">{d.name}</span>
            </div>
            <div className="profile_desc_div1">
              <div>
                <p>
                  <span className="span">Username :</span>
                </p>
                <p>
                  <span className="span">e-mail :</span>
                </p>
                <p>
                  <span className="span">Phone :</span>
                </p>
                <p>
                  <span className="span">Website :</span>
                </p>
              </div>
              <div>
                <p>
                  <span className="data_span">{d.username}</span>
                </p>
                <p>
                  <span className="data_span">{d.email}</span>
                </p>
                <p>
                  <span className="data_span">{d.phone}</span>
                </p>
                <p>
                  <span className="data_span">{d.website}</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <p className="company_title">
              <span className="span">Company</span>
            </p>
            <div className="profile_desc_div2">
              <div>
                <p>
                  <span className="span">Name :</span>
                </p>
                <p>
                  <span className="span">Catchphrase :</span>
                </p>
                <p>
                  <span className="span">bs :</span>
                </p>
              </div>
              <div>
                <p>
                  <span className="data_span">{d.company?.name}</span>
                </p>
                <p>
                  <span className="data_span">{d.company?.catchPhrase}</span>
                </p>
                <p>
                  <span className="data_span">{d.company?.bs}</span>
                </p>
              </div>
            </div>
          </div>
        </Stack>
        <div>
          <p className="address_title">
            <span className="span">Address:</span>
          </p>
          <div className="profile_address_div">
            <div>
              <p>
                <span className="span">Street :</span>
              </p>
              <p>
                <span className="span">Suite :</span>
              </p>
              <p>
                <span className="span">City :</span>
              </p>
              <p>
                <span className="span">Zipcode :</span>
              </p>
            </div>
            <div>
              <p>
                <span className="data_span">{d.address?.street}</span>
              </p>
              <p>
                <span className="data_span">{d.address?.suite}</span>
              </p>
              <p>
                <span className="data_span">{d.address?.city}</span>
              </p>
              <p>
                <span className="data_span">{d.address?.zipcode}</span>
              </p>
            </div>
          </div>
          <div className="map">
            <img src={map} width="100%" height="100%" alt="" />
          </div>
          <div className="latandlon_div">
            <p>
              <span className="latandlon_span">Lat: </span>
              <span className="latandlon_data_span">{d.address?.geo?.lat}</span>
            </p>
            <p>
              <span className="latandlon_span">Long: </span>
              <span className="latandlon_data_span">{d.address?.geo?.lng}</span>
            </p>
          </div>
        </div>
      </Stack>
    </div>
  );
};
