import React from "react";
import "./rootlayout.css";
import MyPhone from "../../assects/MyPhone.svg";
import heart from "../../assects/heart.svg";
import three from "../../assects/three.svg";
import SearchBar from "../../assects/SearchBar.svg";
import pepicons from "../../assects/pepicons.svg";
import heroimg from "../../assects/heroimg.svg";
import mobileone from "../../assects/mobileone.svg";
import mobiletwo from "../../assects/mobiletwo.svg";
import mobilethree from "../../assects/mobilethree.svg";
import mobilefour from "../../assects/mobilefour.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay,  } from "swiper/modules";
import HomeSection from "./homesection";

const Rootlayout = () => {
  const Mapdata = [
    // ====================================== 1 ===========================================
    {
      id: 1,
      I: mobileone,
      J: "Lorem Ipsum Dolor",
      L: "123,456 PKR",

      Lp: "Lorem Ipsum Dolo",
      dsr: "gsk",
      style: "mirani-1",
      tyle: "all",
    },
    {
      id: 2,
      I: mobiletwo,
      J: "Lorem Ipsum Dolor",
      L: "123,456 PKR",
      Lp: "Lorem Ipsum Dolo",
      dsr: "gsk",
      style: "mirani-2",
      tyle: "all",
    },
    {
      id: 3,
      I: mobilethree,
      J: "Lorem Ipsum Dolor",
      L: "123,456 PKR",
      Lp: "Lorem Ipsum Dolo",
      dsr: "gsk",
      style: "mirani-3",
      tyle: "all",
    },
    {
      id: 4,
      I: mobilefour,
      J: "Lorem Ipsum Dolor",
      L: "123,456 PKR",
      Lp: "Lorem Ipsum Dolo",
      dsr: "gsk",
      style: "mirani-3",
      tyle: "all",
    },

  
  ];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light nav-background-color">
        <div className="container-fluid">
          <img
            src={MyPhone}
            className="img-fluid ms-5 "
            width={100}
            alt="myphone"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between align-items-center Navsearchbar"
            id="navbarSupportedContent"
          >
            <div className=" flex-grow-1 justify-content-end d-flex">
              <form className="d-flex  me-2">
                <div className="position-relative ">
                  <input
                    className="form-control Nav-input-box rounded-5"
                    type="search"
                    placeholder="Search for products"
                    aria-label="Search"
                  />
                  <img
                    src={SearchBar}
                    className="position-absolute end-0 top-50 translate-middle-y img-fluid search-icon me-1"
                    width={75}
                    alt=""
                  />
                </div>
              </form>

              <div className="d-flex">
                <div className="position-relative">
                  <div className="position-absolute">
                    <img
                      src={heart}
                      className="img-fluid"
                      width={25}
                      alt="pepicon"
                    />
                  </div>
                  <div className="mt-3 ms-2">
                    <img
                      src={three}
                      className="img-fluid"
                      width={20}
                      alt="pepicon"
                    />
                  </div>
                </div>
                <img
                  src={pepicons}
                  className="img-fluid"
                  width={30}
                  alt="pepicons"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* DropDrown */}

      <div class="d-flex ms-4 mt-1 all-devices gap-3">
        <div className="d-flex">
          <div type="button" class="">
            Mobile Phones
          </div>
          <div
            type="button"
            className=" border-0 dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-reference="parent"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </div>
        </div>
        <div className="d-flex">
          <div type="button" class="">
            Tablets
          </div>
          <div
            type="button"
            className=" border-0 dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-reference="parent"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </div>
        </div>
        <div className="d-flex">
          <div type="button" class="">
            Power Banks
          </div>
          <div
            type="button"
            className=" border-0 dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-reference="parent"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </div>
        </div>
        <div className="d-flex">
          <div type="button" class="">
            Chargers
          </div>
          <div
            type="button"
            className=" border-0 dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-reference="parent"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </div>
        </div>
        <div className="d-flex">
          <div type="button" class="">
            Handsfree
          </div>
          <div
            type="button"
            className=" border-0 dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-reference="parent"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </div>
        </div>
        <div className="d-flex">
          <div type="button" class="">
            Speakers
          </div>
          <div
            type="button"
            className=" border-0 dropdown-toggle dropdown-toggle-split"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            data-bs-reference="parent"
          >
            <span class="visually-hidden">Toggle Dropdown</span>
          </div>
        </div>
      </div>

      {/* hero section  */}

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <div className="mt-5">
              <br />

              <h2 className="galaxy">Galaxy Z Fold4</h2>
              <p>
                Unfold your world. <br />
                Pre-order today and get free free <br />
                memory upgrade from 256GB to 512GB
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={heroimg} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      {/* First Secton  */}

      <div className="bg-second py-5">

        <div className="position-absolute start-0 ms-5 ">
          {" "}
          <span className="ms-5 ps-3 fw-bold fs-5">
            BEST SELLING PHONES
          </span>{" "}
        </div>

        <div className=" mt-5 container">
          <div className="row">
            {Mapdata.map((itm) => (
              <div className="col-lg-3 col-md-3 col-sm-6 p-2 ">
                <div className="card shadow p-3">
                  <div className="card-body">
                    <Swiper
                      spaceBetween={30}
                      centeredSlides={true}
                      autoplay={{
                        delay: 2000,
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
                          src={itm.I}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          className="img-fluid p-2"
                          width={250}
                          src={itm.I}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          className="img-fluid p-2"
                          width={250}
                          src={itm.I}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          className="img-fluid p-2"
                          width={250}
                          src={itm.I}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          className="img-fluid p-2"
                          width={250}
                          src={itm.I}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          className="img-fluid p-2"
                          width={250}
                          src={itm.I}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          className="img-fluid p-2"
                          width={250}
                          src={itm.I}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          className="img-fluid p-2"
                          width={250}
                          src={itm.I}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          className="img-fluid p-2"
                          width={250}
                          src={itm.I}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          className="img-fluid p-2"
                          width={250}
                          src={itm.I}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          className="img-fluid p-2"
                          width={250}
                          src={itm.I}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          className="img-fluid p-2"
                          width={250}
                          src={itm.I}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          className="img-fluid p-2"
                          width={250}
                          src={itm.I}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          className="img-fluid p-2"
                          width={250}
                          src={itm.I}
                          alt=""
                        />
                      </SwiperSlide>
                    </Swiper>
                    <span className={itm.style}>{itm.J} </span>
                    <h6 className="mt-1 ">{itm.K}</h6>
                    <div className={itm.tyle}> {itm.L}</div>{" "}
                    <del>
                      {" "}
                      <div className={itm.dsr}>{itm.Lp}</div>
                    </del>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>

      </div>
      <HomeSection/>
    </div>
  );
};

export default Rootlayout;
