import { Button, Box, Grid, Typography, Link } from "@mui/material";
import { updateList } from "../data/TestData";
import {
  linkColor,
  headerColor,
  goldHighlight,
  buttonFill,
  buttonText,
} from "../data/Globals";
import { CustomButton } from "./MenuButton";
import classes from "../UI/Links.module.css";
import { NavLink } from "react-router-dom";

const RecentUpdates = (props) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      justifyContent="center"
    >
      <Grid item>
        <Typography variant="h5" fontWeight="bold" sx={{ color: headerColor }}>
          Recent Updates
        </Typography>
      </Grid>
      <Grid item width="6%" paddingBottom={2}>
        <Box
          style={{
            backgroundColor: goldHighlight,
            height: 4,
          }}
        />
      </Grid>
      {updateList.map((item, ind) => {
        return (
          <Grid
            item
            key={ind}
            paddingBottom={1}
            paddingTop={1}
            paddingRight={1}
          >
            <NavLink to={item.link} className={classes.navlink}>
              <Typography paddingRight={12} color={linkColor} align="left">
                {item.linkName}
              </Typography>
            </NavLink>
            {item.blurb && (
              <Typography
                align="left"
                variant="body2"
                paddingRight={12}
                color={headerColor}
              >
                {item.blurb}
              </Typography>
            )}
            <Grid container direction="row" spacing={0.5}>
              <Grid item>
                <Typography
                  fontWeight="bold"
                  variant="body2"
                  color={headerColor}
                >
                  Published:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">{item.pubDate}</Typography>
              </Grid>
              <Grid item>
                <Box sx={{ backgroundColor: "#666666", color: "#F3F6F9" }}>
                  <Typography padding={0.1} variant="body2">
                    {item.status}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        );
      })}
      <Grid item>
        <CustomButton
          buttonDisplay="View More"
          ariaLabel="View more recent updates button"
          size="medium"
        />
      </Grid>
    </Grid>
  );
};

export default RecentUpdates;
