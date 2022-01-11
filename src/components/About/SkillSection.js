import "./SkillSection.css";

// Assets for skills
import css from "../../assets/skils/css.png";
import html from "../../assets/skils/html.png";
import js from "../../assets/skils/javascript.png";
import mongodb from "../../assets/skils/mongodb.png";
import mysql from "../../assets/skils/mysql.png";
import nodejs from "../../assets/skils/nodejs.png";
import react from "../../assets/skils/react.png";
import redux from "../../assets/skils/redux.png";
import express from "../../assets/skils/express.svg";
import material from '../../assets/skils/materialui.png';
// Material Ui
import LinearProgress from "@mui/material/LinearProgress";
// import Card from "@mui/material/Card";
// import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const skils = [
  {
    skilname: html,
    skilpercentage: 85,
  },
  {
    skilname: css,
    skilpercentage: 80,
  },
  {
    skilname: js,
    skilpercentage: 88,
  },
  {
    skilname: react,
    skilpercentage: 85,
  },
  {
    skilname: redux,
    skilpercentage: 70,
  },
  {
    skilname: material,
    skilpercentage: 85,
  },
  {
    skilname: nodejs,
    skilpercentage: 75,
  },
  {
    skilname: express,
    skilpercentage: 85,
  },
  {
    skilname: mysql,
    skilpercentage: 70,
  },
  {
    skilname: mongodb,
    skilpercentage: 80,
  },
];

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

export function SkillSection() {
  return (
    <div className="skils_container">
      {/* <h1>My Skils</h1> */}
      <div className="con_skills">
        {skils.map((skil, index) => {
          return (
            <Skils
              image={skil.skilname}
              key={index}
              value={skil.skilpercentage}
            />
          );
        })}
      </div>
    </div>
  );
}

function Skils({ image, value }) {
  return (
    <div className="skils_List">
      <img src={image} className="skil_image" alt="skil"></img>
      <div  className="bar">
        <LinearProgressWithLabel variant="determinate" value={value} />
      </div>
    </div>
  );
}
