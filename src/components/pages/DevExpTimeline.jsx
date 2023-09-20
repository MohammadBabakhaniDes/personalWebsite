import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab"
import { experiences } from "../../constants/education"
import { Slide, Typography } from "@mui/material"
import { HomeRepairServiceRounded } from "@mui/icons-material"

const DevExpTimeline = ({loading}) => {
    return (
        <Timeline position="right" sx={{ direction: "ltr" }}>
            {experiences.map((item, index) => (
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
                                color="warning"
                                variant="outlined"
                            >
                                <HomeRepairServiceRounded color="warning" />
                            </TimelineDot>
                            {index !== 1 ? (
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

export default DevExpTimeline;