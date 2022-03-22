import { Button, Box, Grid, Typography, Link } from "@mui/material";

const RecentUpdates = (props) => {
  const updateList = [
    {
      link: "Local Government Finance",
      blurb:
        "Vestibulum rutrum quam vitae frigilla tincidunt, Suspendisse nec tortor urna, Ut laoreet sodales",
      pubDate: "Jan 2, 2020",
      status: "Updated",
    },
    {
      link: "Transportation Network Carrier Maps",
      pubDate: "Jan 2, 2020",
      status: "New",
    },
    {
      link: "BEA Long-Range General Fund Revenue Plan for FY 2019-20 to FY 2022-23",
      pubDate: "Dec 16, 2019",
      blurb:
        "Vestibulum rutrum quam vitae frigilla tincidunt, Suspendisse nec tortor urna, Ut laoreet sodales",
      pubDate: "Jan 2, 2020",
      status: "Updated",
    },
    { link: "Budget Development", pubDate: "Dec 16, 2019", status: "New" },
    {
      link: "November 2019 General Fund Revenue Digest",
      pubDate: "Dec 13, 2019",
      status: "New",
    },
  ];
  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      justifyContent="center"
    >
      <Grid item>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ color: props.headerColor }}
        >
          Recent Updates
        </Typography>
      </Grid>
      <Grid item width="3%" paddingBottom={2}>
        <Box
          style={{
            backgroundColor: props.goldHighlight,
            height: 4,
          }}
        />
      </Grid>
      {updateList.map((item, ind) => {
        return (
          <Grid item key={ind} padding={1}>
            <Link href="#">
              <Typography color={props.linkColor} align="left">
                {item.link}
              </Typography>
            </Link>
            {item.blurb && (
              <Typography variant="body2" color={props.headerColor}>
                {item.blurb}
              </Typography>
            )}
            <Grid container direction="row" spacing={0.5}>
              <Grid item>
                <Typography
                  fontWeight="bold"
                  variant="body2"
                  color={props.headerColor}
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
            backgroundColor: props.buttonFill,
            color: props.buttonText,
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
