import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
  demoVideoTitle
} from "../utils/constants";

export default function PlayListCard({
  playListDetail: {
    id: { playlistId },
    snippet,
  },
}) {
  return (
    <Card
      sx={{
        width: { md: "320px", xs: "100%" },
        boxShadow: "none",
        borderRadius: "10px",
        ml: 0,
      }}
    >
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{ width: 358, height: 180 }}
      />
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle1" fontWeight="bold" color="white">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
          <Stack direction="row" alignItems="center">
            <Typography variant="subtitle2" fontWeight="500" color="gray">
              {snippet?.channeltitle || demoChannelTitle}
            </Typography>
            <CheckCircle sx={{ fontSize: "14px", color: "gray", ml: "5px" }} />
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
}
