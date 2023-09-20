import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { Slide, Typography } from "@mui/material";
import { devEdu } from "../../constants/education";
import { SchoolRounded } from "@mui/icons-material";

const DevEduTimeline = ({loading}) => {
    return (
        <Timeline position="right" sx={{ direction: "ltr" }}>
            {devEdu.map((item, index) => (
                <Slide
                    direction="up"
                    in={loading}
                    style={{
                        transitionDelay: loading
                            ? `${index + 3}99ms`
                            : "0ms",
                    }}
                >
                    <TimelineItem sx={{
                        "&.MuiTimelineItem-root": {
                            minHeight: "110px"
                        },
                    }} key={index}>
                        <TimelineSeparator>
                            <TimelineDot
                                color="info"
                                variant="outlined"
                            >
                                <SchoolRounded color="info" />
                            </TimelineDot>
                            {index !== 2 ? (
                                <TimelineConnector />
                            ) : null}
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography
                                variant="caption"
                                color="gray"
                            >
                                {item.year}
                            </Typography>
                            <Typography
                                variant="body1"
                                color="text.primary"
                            >
                                {item.cert}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.primary"
                            >
                                {item.major}
                            </Typography>
                            <Typography
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
    )
}

export default DevEduTimeline;