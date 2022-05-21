import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";
import { HeadChip, ArrowLinkButton, Subtitle } from "components";

function Prolouge() {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        background: "#191919",
        [theme.breakpoints.down("md")]: { paddingTop: "10%" },   
      }}
    >
      <Box
        id="staking"
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          height: "600px",
          [theme.breakpoints.down("xl")]: { height: "500px" },
          [theme.breakpoints.down("lg")]: { height: "400px" },
          [theme.breakpoints.down("md")]: {
            height: "fit-content",
            paddingBottom: "360px",
          },
          [theme.breakpoints.down("sm")]: {
            paddingBottom: "240px",
          },
        }}
      >
        <Container fixed sx={{ position: "relative", zIndex: 200 }}>
          <Grid container>
            <Grid
              item
              lg={6}
              md={5}
              sx={{ paddingBottom: "130px" }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <HeadChip
                label="PROLOGUE"
                variant="outlined"
                sx={{ borderColor: "#ffffff", color: "#ffffff" }}
              />
              <Subtitle sx={{ color: "#ffffff", marginTop: "5px" }}>The Portal</Subtitle>
              <ArrowLinkButton
                href="#"
                target="_blank"
                endIcon={<ArrowForwardIcon />}
                mainColor={"#ffffff"}
                sx={{ marginTop: "20px" }}
              >
                moneyland
              </ArrowLinkButton>
            </Grid>
          </Grid>
        </Container>
        <Box
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage: "url(/images/logue.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center right",
            backgroundSize: "70% 100%",
            [theme.breakpoints.down("md")]: {
              backgroundPosition: "bottom",
              backgroundSize: "100% 400px",
            },
            [theme.breakpoints.down("sm")]: {
              backgroundPosition: "bottom",
              backgroundSize: "100% 300px",
            },
          }}
        />
      </Box>
    </Box>
  );
}

export default Prolouge;
