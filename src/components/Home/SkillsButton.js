import React from 'react';
import Switch from '@material-ui/core/Switch';
import data from "./SkillsData";
import Skills from "./Skills";
import "./Skills.css";
import Zoom from '@material-ui/core/Zoom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  // root: {
  //   height: 50,
  // },
  container: {
    display: 'flex',
    maxHeight: 'auto',
  },
  paper: {
    margin: theme.spacing(1),
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function SkillsButton() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
        <div className="skillLable">
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show Skills"
        style={{marginLeft:'auto',  marginRight:'auto', display:'block'}}
      />
      </div>
      <div className="skillset">
        <Zoom in={checked}>
          <div className="skills"> {data && <Skills data={data[0]} />} </div>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
          <div className="skills"> {data && <Skills data={data[1]} />} </div>
        </Zoom>
        <Zoom in={checked} style={{ transitionDelay: checked ? '1000ms' : '0ms' }}>
          <div className="skills"> {data && <Skills data={data[2]} />} </div>
        </Zoom>
        </div>
    </div>
  );
}