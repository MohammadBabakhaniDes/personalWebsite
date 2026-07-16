import { Box } from "@mui/material";

const Page = (Props) => {
  const { children, pageNumber, index, ...others } = Props;

  return (
    <div
      role="tabpanel"
      id={`tabpanel-${index}`}
      aria-labelledby={`sidebar-tab-${index}`}
      {...others}
    >
      <Box sx={{ height: "100vh", overflow: "hidden" }}>{children}</Box>
    </div>
  );
};

export default Page;
