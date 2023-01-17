import { Box, Stack } from "@mui/material";
import data from "../data.json";
import "./Chat.css";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

export const Chat = ({ toggleChat, setToggleChat }) => {
  const handleChatToggle = (e) => {
    e.stopPropagation();
    setToggleChat(!toggleChat);
  };
  const handleChatToggle2 = (e) => {
    e.stopPropagation();
    setToggleChat(true);
  };
  return (
    <div>
      <Box className="chat_box">
        <Stack
          className="chat_heading"
          direction={"row"}
          onClick={handleChatToggle}
        >
          <p>
            <span>
              <ModeCommentOutlinedIcon />
            </span>
            <span className="chat_title">Chats</span>
          </p>
          <p className="chat_icon">
            {toggleChat ? (
              <KeyboardArrowDownOutlinedIcon />
            ) : (
              <KeyboardArrowUpOutlinedIcon />
            )}
          </p>
        </Stack>
        {toggleChat && (
          <Stack className="chat_data_stack" onClick={handleChatToggle2}>
            {data.users.map((e) => {
              return (
                <Stack direction={"row"} gap="10px" margin={"5px"} key={e.id}>
                  <img
                    src={e.profilepicture}
                    className="profile_img_chat"
                    alt=""
                  />
                  <div className="chat_name">{e.name}</div>
                  <div className="online_circle"></div>
                </Stack>
              );
            })}
          </Stack>
        )}
      </Box>
    </div>
  );
};
