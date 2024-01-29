import React from "react";
import "./rootlayout.css";
import mobileseven from "../../assects/mobileseven.svg";
import mobileeight from "../../assects/mobileeight.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import mobileten from "../../assects/mobileten.svg";
import mobiletwolieve from "../../assects/mobiletwolieve.svg";
import mobilethirteen from "../../assects/mobilethirteen.svg";
import mobilefourteen from "../../assects/mobilefourteen.svg";
import mobilefifteen from "../../assects/mobilefifteen.svg";
import mobilesixteen from "../../assects/mobilesixteen.svg";
import mobileseventeen from "../../assects/mobileseventeen.svg";
import smallgol from "../../assects/smallgol.svg";
import dots from "../../assects/dots.svg";
import rightarrow from "../../assects/rightarrow.svg";
import largegol from "../../assects/largegol.svg";
import verysmallgol from "../../assects/verysmallgol.svg";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";
const mpData = [
  {
    id: 5,
    I: mobileseven,
    J: "Lorem Ipsum Dolor",
    L: "123,456 PKR",
    Lp: "Lorem Ipsum Dolo",
    dsr: "gsk",
    style: "mirani-1",
    tyle: "all",
  },
  {
    id: 6,
    I: mobileeight,
    J: "Lorem Ipsum Dolor",
    L: "123,456 PKR",
    Lp: "Lorem Ipsum Dolo",
    dsr: "gsk",
    style: "mirani-2",
    tyle: "all",
  },
  {
    id: 7,
    I: mobileseven,
    J: "Lorem Ipsum Dolor",
    L: "123,456 PKR",
    Lp: "Lorem Ipsum Dolo",
    dsr: "gsk",
    style: "mirani-3",
    tyle: "all",
  },
  {
    id: 8,
    I: mobileeight,
    J: "Lorem Ipsum Dolor",
    L: "123,456 PKR",
    Lp: "Lorem Ipsum Dolo",
    dsr: "gsk",
    style: "mirani-3",
    tyle: "all",
  },
  {
    id: 9,
    I: mobileten,
    J: "Lorem Ipsum Dolor",
    L: "123,456 PKR",
    Lp: "Lorem Ipsum Dolo",
    dsr: "gsk",
    style: "mirani-1",
    tyle: "all",
  },
  {
    id: 10,
    I: mobilethirteen,
    J: "Lorem Ipsum Dolor",
    L: "123,456 PKR",
    Lp: "Lorem Ipsum Dolo",
    dsr: "gsk",
    style: "mirani-2",
    tyle: "all",
  },
  {
    id: 11,
    I: mobiletwolieve,
    J: "Lorem Ipsum Dolor",
    L: "123,456 PKR",
    Lp: "Lorem Ipsum Dolo",
    dsr: "gsk",
    style: "mirani-3",
    tyle: "all",
  },
  {
    id: 12,
    I: mobilethirteen,
    J: "Lorem Ipsum Dolor",
    L: "123,456 PKR",
    Lp: "Lorem Ipsum Dolo",
    dsr: "gsk",
    style: "mirani-3",
    tyle: "all",
  },
  {
    id: 13,
    I: mobilefourteen,
    J: "Lorem Ipsum Dolor",
    L: "123,456 PKR",
    Lp: "Lorem Ipsum Dolo",
    dsr: "gsk",
    style: "mirani-1",
    tyle: "all",
  },
  {
    id: 14,
    I: mobilefifteen,
    J: "Lorem Ipsum Dolor",
    L: "123,456 PKR",
    Lp: "Lorem Ipsum Dolo",
    dsr: "gsk",
    style: "mirani-2",
    tyle: "all",
  },
  {
    id: 15,
    I: mobilesixteen,
    J: "Lorem Ipsum Dolor",
    L: "123,456 PKR",
    Lp: "Lorem Ipsum Dolo",
    dsr: "gsk",
    style: "mirani-3",
    tyle: "all",
  },
  {
    id: 16,
    I: mobiletwolieve,
    J: "Lorem Ipsum Dolor",
    L: "123,456 PKR",
    Lp: "Lorem Ipsum Dolo",
    dsr: "gsk",
    style: "mirani-3",
    tyle: "all",
  },
  {
    id: 5,
    I: mobileseven,
    J: "Lorem Ipsum Dolor",
    L: "123,456 PKR",
    Lp: "Lorem Ipsum Dolo",
    dsr: "gsk",
    style: "mirani-1",
    tyle: "all",
  },
  {
    id: 6,
    I: mobileeight,
    J: "Lorem Ipsum Dolor",
    L: "123,456 PKR",
    Lp: "Lorem Ipsum Dolo",
    dsr: "gsk",
    style: "mirani-2",
    tyle: "all",
  },
  {
    id: 7,
    I: mobileseven,
    J: "Lorem Ipsum Dolor",
    L: "123,456 PKR",
    Lp: "Lorem Ipsum Dolo",
    dsr: "gsk",
    style: "mirani-3",
    tyle: "all",
  },
  {
    id: 8,
    I: mobileeight,
    J: "Lorem Ipsum Dolor",
    L: "123,456 PKR",
    Lp: "Lorem Ipsum Dolo",
    dsr: "gsk",
    style: "mirani-3",
    tyle: "all",
  },
];

const HomeSection = () => {
  return (
    <div>
      <div className=" mt-5 container">
        <div className="row">
          {mpData.map((items) => (
            <div className="col-lg-3 col-md-3 col-sm-6 p-2 ">
              <div className="card shadow p-3">
                <div className="card-body">
                  <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      {" "}
                      <img
                        className="img-fluid p-2"
                        width={250}
                        src={items.I}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <img
                        className="img-fluid p-2"
                        width={250}
                        src={items.I}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <img
                        className="img-fluid p-2"
                        width={250}
                        src={items.I}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <img
                        className="img-fluid p-2"
                        width={250}
                        src={items.I}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <img
                        className="img-fluid p-2"
                        width={250}
                        src={items.I}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <img
                        className="img-fluid p-2"
                        width={250}
                        src={items.I}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <img
                        className="img-fluid p-2"
                        width={250}
                        src={items.I}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <img
                        className="img-fluid p-2"
                        width={250}
                        src={items.I}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <img
                        className="img-fluid p-2"
                        width={250}
                        src={items.I}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      {" "}
                      <img
                        className="img-fluid p-2"
                        width={250}
                        src={items.I}
                        alt=""
                      />
                    </SwiperSlide>
                  </Swiper>
                  <span className={items.style}>{items.J} </span>
                  <h6 className="mt-1 ">{items.K}</h6>
                  <div className={items.tyle}> {items.L}</div>{" "}
                  <del>
                    {" "}
                    <div className={items.dsr}>{items.Lp}</div>
                  </del>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="  container">
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2 my-5 ">
            <div className="d-flex ">
              <button className="border-0 nav-background-color rounded-1 px-3 py-2 text-white ">
                1
              </button>

              <div className="border-0 ms-3  mt-2">2</div>
              <div className="border-0 ms-3  mt-2">3</div>
              <div className="border-0 ms-3 mt-3">
                <img width={10} src={dots} alt="" />
              </div>
              <div className="border-0 ms-2 mt-1">
                <img width={35} src={rightarrow} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="position-absolute mt-5  ">
        <img src={largegol} className="mt-5" width={160} alt="" />
        <span className="position-absolute top-50 mt-5 pt-5 ">
          <img src={verysmallgol} width={25} alt="" />
        </span>
      </div>
      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="mt-5 position-relative">
              <div className="position-absolute ms-5 ps-5">
                <img className="ms-5 ps-3" src={smallgol} width={100} alt="" />
              </div>

              <h3 className=" buylater fw-bold ">
                BUY NOW PAY<span className="later">LATER</span>{" "}
              </h3>
              <button className="ms-5 position-absolute start-50 border-0 text-white nav-background-color rounded-1 col-4">
                View Details
              </button>
            </div>
          </div>
          <div className="col-md-4"></div>
          <br />
          <br />
          <div className="col-md-4">
            <div className="ms-5">

            <img
              className="img-fluid"
              width={200}
              src={mobileseventeen}
              alt=""
            />
            <p className="fs-5 mt-3">POCO X4 PRO - 128 GB 
            <p className="ms-5 ps-5" ><span className="ms-4 later fw-bold">RS 47,999</span></p></p>

              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
