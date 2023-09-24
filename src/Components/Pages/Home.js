import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container,  Typography } from "@material-ui/core";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
  slideImage: {
    height: "600px",
    objectFit: "cover",
    width: "100%",
    filter: "blur(0px)", // add this line to apply a blur effect
  },
});

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          simulateTouch={true}
          touchRatio={0.2}
        >
          <SwiperSlide>
           
            <img
              className={classes.slideImage}
              src={"https://www.slideteam.net/media/catalog/product/cache/1280x720/d/a/dashboards_by_function_it_project_management_dashboard_slide01.jpg"}
              alt="my image"
            />
          </SwiperSlide>
          <SwiperSlide>
          
            <img
              className={classes.slideImage}
              src={process.env.PUBLIC_URL + "/image/2.jpg"}
              alt="slide 2"
            />
          </SwiperSlide>
          <SwiperSlide>
           
            <img
              className={classes.slideImage}
              src={process.env.PUBLIC_URL + "/image/4.jpg"}
              alt="slide 3"
            />
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}

export default Home;
