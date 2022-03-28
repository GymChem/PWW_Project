import { Box, Grid, Typography } from "@mui/material";
import { updateList } from "../data/TestData";
import { blue10, blue50, gold30, white10, grey60 } from "../data/Globals";
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
        <Typography variant="h5" fontWeight="bold" sx={{ color: blue50 }}>
          Recent Updates
        </Typography>
      </Grid>
      <Grid item width="6%" paddingBottom={2}>
        <Box
          style={{
            backgroundColor: gold30,
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
              <Typography paddingRight={12} color={blue10} align="left">
                {item.linkName}
              </Typography>
            </NavLink>
            {item.blurb && (
              <Typography
                align="left"
                variant="body2"
                paddingRight={12}
                color={blue50}
              >
                {item.blurb}
              </Typography>
            )}
            <Grid container direction="row" spacing={0.5}>
              <Grid item>
                <Typography fontWeight="bold" variant="body2" color={blue50}>
                  Published:
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">{item.pubDate}</Typography>
              </Grid>
              <Grid item>
                <Box sx={{ backgroundColor: grey60, color: white10 }}>
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
