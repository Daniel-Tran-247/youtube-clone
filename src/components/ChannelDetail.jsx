import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ChannelCard, Videos } from "../components";
import { fetchFromAPI } from "../utils/FetchFromAPI";

export default function ChannelDetail() {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const link = window.location.href;

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => {
        setChannelDetail(data.items[0]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => console.error("Error:", error));
  }, [id]);

  console.log(videos);
  return (
    <Box minHeight="95vh">
      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(12,9,121,1) 36%, rgba(0,212,255,1) 100%)",
          zIndex: 10,
          height: "300px",
        }}
      />
      <Container maxWidth="4xl">
        <ChannelCard
          link={link}
          channelDetail={channelDetail}
          marginTop="-93px"
        />
        <Videos videos={videos} ml={{ sm: "50px" }} />
      </Container>
    </Box>
  );
}
