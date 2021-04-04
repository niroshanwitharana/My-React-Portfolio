import React from "react";
import FlipIcon from '@material-ui/icons/Flip';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

export default function AboutDoc({ flip }) {
    const classes = useStyles();

  return (
    <div className="aboutDoc">
      <div className="clickFlip">
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
      <div className="currrntInfo">Please find my covering letter and CV, Attached with links to my portfolio, GitHub and LinkedIn. I look forward to hearing from you. <br/>Thank you.</div>
    </div>
  );
}
