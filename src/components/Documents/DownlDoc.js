import React from "react";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import FlipIcon from '@material-ui/icons/Flip';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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
      <Button
          variant="contained"
          color="default"
          href="https://docs.google.com/document/d/1CKjM6FFkFlTQKa9JZj8KAkq138bR0KtwkxWpMxWszvc/preview"
          target="#blank"
          className={classes.button}
          startIcon={<VisibilityIcon />}
        >
          View-CV
        </Button>
        <Button
          variant="contained"
          color="default"
          href="https://docs.google.com/document/d/1CKjM6FFkFlTQKa9JZj8KAkq138bR0KtwkxWpMxWszvc/export?format=pdf"
          download="Niroshana-CV"
          className={classes.button}
          startIcon={<CloudDownloadIcon />}
        >
          Download-CV
        </Button>
      </div>
      <div className="cover">
      <Button
          variant="contained"
          color="default"
          href="https://docs.google.com/document/d/1LDuLEHjDGsxyrA9vST6EW6M2XzKmTnbff-oIg7FkeyY/preview"
          target="#blank"
          className={classes.button}
          startIcon={<VisibilityIcon />}
        >
          View-Cover Letter
        </Button>
        <Button
          variant="contained"
          color="default"
          href="https://docs.google.com/document/d/1LDuLEHjDGsxyrA9vST6EW6M2XzKmTnbff-oIg7FkeyY/export?format=pdf"
          download="Niroshana-Cover-Letter"
          className={classes.button}
          startIcon={<CloudDownloadIcon />}
        >
          Download-Cover Letter
        </Button>
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
