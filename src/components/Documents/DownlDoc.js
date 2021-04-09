import React from "react";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import FlipIcon from '@material-ui/icons/Flip';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import cv from "./assets/cv.pdf"
import cover from "./assets/cover.pdf"

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function DownlDoc({ flip }) {
  const classes = useStyles();
  return (
    <div className="downlDoc">
      <div className="cv">
      <a href={cv} target="_blank" rel="noopener noreferrer">
      <Button
          variant="contained"
          color="default"
          // href={cv}
          target="_blank"
          className={classes.button}
          startIcon={<VisibilityIcon />}
        >
          View-CV
        </Button>
        </a>
        <a href={cv} target="_blank" rel="noopener noreferrer" download>
        <Button
          variant="contained"
          color="default"
          // href={cv}
          // download="Niroshana-CV"
          className={classes.button}
          startIcon={<CloudDownloadIcon />}
        >
          Download-CV
        </Button>
        </a>
      </div>
      <div className="cover">
      <a href={cover} target="_blank" rel="noopener noreferrer">
      <Button
          variant="contained"
          color="default"
          href={cover}
          target="#blank"
          className={classes.button}
          startIcon={<VisibilityIcon />}
        >
          View-Cover Letter
        </Button>
        </a>
        <a href={cover} target="_blank" rel="noopener noreferrer" download>
        <Button
          variant="contained"
          color="default"
          href={cover}
          download="Niroshana-Cover-Letter"
          className={classes.button}
          startIcon={<CloudDownloadIcon />}
        >
          Download-Cover Letter
        </Button>
        </a>
      </div>
      <div className="clickFlipBack">        
        <Button
          onClick={flip}
          variant="contained"
          color="default"
          className={classes.button}
          startIcon={<FlipIcon />}
        >
          Click-Flip
        </Button>        
      </div>
    </div>
  );
}
