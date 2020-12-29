// React Imports
import React, { FC } from "react";

// Redux Imports

// Material UI Imports
import { Typography } from "@material-ui/core";
import {} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // Styles
}));

interface SettingsProps {}

const Settings: FC<SettingsProps> = () => {
  const classes = useStyles();
  return (
    <Typography variant="h4" align="center">
      Settings
    </Typography>
  );
};

export default Settings;
