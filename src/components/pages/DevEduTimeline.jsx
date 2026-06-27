import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Slide, Typography } from "@mui/material";
import { devEdu } from "../../constants/education";
import { SchoolRounded } from "@mui/icons-material";

const DevEduTimeline = ({ loading }) => {
  return (
    <Timeline position="right" sx={{ direction: "ltr", mt: 1 }}>
      {devEdu.map((item, index) => (
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
            }}
            key={index}
          >
            <TimelineSeparator>
              <TimelineDot color="info" variant="outlined">
                <SchoolRounded color="info" />
              </TimelineDot>
              {index !== devEdu.length - 1 ? (
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
                mb: 2,
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
              <Typography variant="body2" color="text.primary">
                {item.major}
              </Typography>
              <Typography
                sx={{ fontSize: 14, color: "text.secondary" }}
                variant="body2"
                color="text.primary"
              >
                {item.place}
              </Typography>
              <Typography
                sx={{ fontSize: 14, color: "text.secondary" }}
                variant="body2"
                color="text.primary"
              >
                {item.honor}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
};

export default DevEduTimeline;
