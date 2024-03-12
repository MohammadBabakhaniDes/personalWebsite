import Grid from "@mui/material/Unstable_Grid2";

const PagesContainer = ({ children }) => {
  return (
    <>
      <Grid xs={12} lg={9.6}>
        {children}
      </Grid>
    </>
  );
};

export default PagesContainer;
