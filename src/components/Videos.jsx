import React from "react";
import { Stack, Box, Container } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import PlayListCard from "./PlayListCard";

export default function Videos({ videos, ml, direction }) {
  console.log(videos);
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" gap={2} ml={ml}>
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.playlistId && <PlayListCard playListDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
}
