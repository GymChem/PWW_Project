import { Button, Box, Grid, Typography, Link } from "@mui/material";
import { updateList } from "../data/TestData";
import {
  linkColor,
  headerColor,
  goldHighlight,
  buttonFill,
  buttonText,
} from "../data/Globals";

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
          <Grid item key={ind} padding={1}>
            <Link href="#">
              <Typography paddingRight={12} color={linkColor} align="left">
                {item.link}
              </Typography>
            </Link>
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
        <Button
          aria-label="View more recent updates button"
          variant="contained"
          sx={{
            backgroundColor: buttonFill,
            color: buttonText,
          }}
        >
          {" "}
          View More
        </Button>
      </Grid>
    </Grid>
  );
};

export default RecentUpdates;
