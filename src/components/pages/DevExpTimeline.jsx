import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { experiences } from "../../constants/education";
import { Slide, Typography } from "@mui/material";
import { HomeRepairServiceRounded } from "@mui/icons-material";

const DevExpTimeline = ({ loading }) => {
  return (
    <Timeline
      position="right"
      sx={{
        direction: "ltr",
        mt: 1,
        // display: "flex",
        // flexDirection: "column",
        // gap: 2,
      }}
    >
      {experiences.map((item, index) => (
        <Slide
          direction="up"
          in={loading}
          style={{
            transitionDelay: loading ? `${index + 3}99ms` : "0ms",
          }}
        >
          <TimelineItem
            sx={{
              "&.MuiTimelineItem-root": {
                minHeight: "110px",
              },
              display: "flex",
              // gap: 1
            }}
            key={index}
          >
            <TimelineSeparator sx={{}}>
              <TimelineDot color="warning" variant="outlined">
                <HomeRepairServiceRounded color="warning" />
              </TimelineDot>
              {index !== experiences.length - 1 ? (
                <TimelineConnector
                  sx={{
                    "&.MuiTimelineConnector-root": {
                      width: "2px",
                      backgroundColor: "#CBD5E1",
                    },
                  }}
                />
              ) : null}
            </TimelineSeparator>
            <TimelineContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                mb: 3,
              }}
            >
              <Typography
                sx={{ fontSize: 13, color: "text.secondary" }}
                variant="caption"
                color="gray"
              >
                {item.year}
              </Typography>
              <Typography
                sx={{ fontWeight: 700 }}
                variant="body1"
                color="text.primary"
              >
                {item.cert}
              </Typography>
              <Typography
                sx={{ fontSize: 14 }}
                variant="body2"
                color="text.primary"
              >
                {item.major}
              </Typography>
              <Typography
                sx={{ fontSize: 14, color: "text.secondary" }}
                variant="body2"
                color="text.primary"
              >
                {item.place}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
};

export default DevExpTimeline;
