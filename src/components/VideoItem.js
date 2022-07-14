import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <Grid item xs={12}>
      <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer", width: "130%", marginLeft:"-100px" }} onClick={() => onVideoSelect(video)} >
        <img style={{ marginRight: "10px" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <Typography variant="subtitle1" style={{padding:"4px", alignItems: "justify"}}>
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default VideoItem;
