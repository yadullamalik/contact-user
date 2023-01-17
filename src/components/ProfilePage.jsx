import React, { useEffect, useState } from "react";
import data from "../data.json";
import { useParams } from "react-router-dom";
import { Box, Stack, styled } from "@mui/system";
import "./ProfilePage.css";
import { Profile } from "./Profile";
import { Gallery } from "./Gallery";
import { Todo } from "./Todo";
import { Posts } from "./Posts";
import { Chat } from "./Chat";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

export const ProfilePage = () => {
  const { id } = useParams();
  const [d, setD] = useState({});
  const [toggle, setToggle] = useState("profile");
  const [toggleChat, setToggleChat] = useState(false);
  useEffect(() => {
    setToggle("profile");
    data.users.map((el) => el.id == id && setD(el));
  }, [id]);

  const Item = styled("div")`
    padding: 5px;
    font-size: 18px;
    cursor: pointer;
  `;
  const SideBar = styled(Box)`
    width: 170px;
    border-radius: 20px;
    padding: 150px 25px;
    padding-top: 250px;
    background: linear-gradient(180deg, #3f55c8, #3f55c8, #702cc8);
    color: white;
    margin-left: 50px;
  `;

  return (
    <div onClick={() => setToggleChat(false)}>
      <div className="profile_page_main_div">
        <SideBar>
          <Stack>
            <Item
              onClick={() => setToggle("profile")}
              style={
                toggle == "profile" ? { color: "#fff" } : { color: "#bdbbbb" }
              }
            >
              Profile
            </Item>
            {toggle == "profile" && (
              <div className="circle1">
                {<KeyboardArrowRightOutlinedIcon fontSize="medium" />}
              </div>
            )}
            <hr className="hr" />
            <Item
              onClick={() => setToggle("posts")}
              style={
                toggle == "posts" ? { color: "#fff" } : { color: "#bdbbbb" }
              }
            >
              Posts
            </Item>
            {toggle == "posts" && (
              <div className="circle2">
                {<KeyboardArrowRightOutlinedIcon fontSize="medium" />}
              </div>
            )}
            <hr className="hr" />
            <Item
              onClick={() => setToggle("galery")}
              style={
                toggle == "galery" ? { color: "#fff" } : { color: "#bdbbbb" }
              }
            >
              Gallery
            </Item>
            {toggle == "galery" && (
              <div className="circle3">
                {<KeyboardArrowRightOutlinedIcon fontSize="medium" />}
              </div>
            )}
            <hr className="hr" />
            <Item
              onClick={() => setToggle("todo")}
              style={
                toggle == "todo" ? { color: "#fff" } : { color: "#bdbbbb" }
              }
            >
              Todo
            </Item>
            {toggle == "todo" && (
              <div className="circle4">
                {<KeyboardArrowRightOutlinedIcon fontSize="medium" />}
              </div>
            )}
          </Stack>
        </SideBar>
        <div style={{ width: "70%" }}>
          {toggle == "profile" ? (
            <Profile d={d} />
          ) : toggle == "posts" ? (
            <Posts d={d} />
          ) : toggle == "galery" ? (
            <Gallery d={d} />
          ) : (
            <Todo d={d} />
          )}
        </div>
      </div>
      <div className="chat">
        <Chat toggleChat={toggleChat} setToggleChat={setToggleChat} />
      </div>
    </div>
  );
};
