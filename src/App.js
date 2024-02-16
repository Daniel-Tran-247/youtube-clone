import { Box } from "@mui/material";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  ChannelDetail,
  Feed,
  NavBar,
  SearchFeed,
  VideoDetail,
} from "./components";
import "./index.css";

function App() {
  return (
    <Router>
      <Box sx={{ backgroundColor: "#000" }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
