import { Stack } from "@mui/material";
import React, { useState } from "react";
import { HeaderProfile } from "./HeaderProfile";

export const Posts = ({ d }) => {
  const [toggleHeaderProfile, setToggleHeaderProfile] = useState(false);

  return (
    <div onClick={() => setToggleHeaderProfile(false)}>
      <Stack direction={"row"} justifyContent="space-between">
        <h3>Posts</h3>
        <div>
          <HeaderProfile
            toggleHeaderProfile={toggleHeaderProfile}
            setToggleHeaderProfile={setToggleHeaderProfile}
            d={d}
          />
        </div>
      </Stack>
      <hr />
      <div className="empty_div">
        <h1>Coming Soon</h1>
      </div>
    </div>
  );
};
