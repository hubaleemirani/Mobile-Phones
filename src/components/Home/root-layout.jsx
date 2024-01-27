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
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Rootlayout = () => {


  const Mapdata = [
    // ====================================== 1 ===========================================
    {
      id:1,
      I: mobileone,
      J: "Rs. 641",
      L: "PANADOL 500MG TABLET 200S",
      Lp: "GSK CONSUMER HEALTHCARE",
      dsr: "gsk",
      style: "mirani-1",
      tyle: "all",
      button: "Sold"
    },
    {
      id:2,
      I: mobiletwo,
      J: "Rs. 398",
      L: "PANADOL EXTRA TABLET 100S",
      Lp: "GSK CONSUMER HEALTHCARE",
      dsr: "gsk",
      style: "mirani-2",
      tyle: "all",
      button: "Sold"
    },
    {
      id:3,
      I: mobilethree,
      J: "Rs. 398",
      L: "PANADOL EXTRA TABLET 100S",
      Lp: "GSK CONSUMER HEALTHCARE",
      dsr: "gsk",
      style: "mirani-3",
      tyle: "all",
      button: "Sold"
    },
    {
      id:4,
      I: mobilefour,
      J: "Rs. 398",
      L: "PANADOL EXTRA TABLET 100S",
      Lp: "GSK CONSUMER HEALTHCARE",
      dsr: "gsk",
      style: "mirani-3",
      tyle: "all",
      button: "Sold"
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
  {/* <div className="container">
    <div className="row">
     
      <div className="col-md-3">
        
        <div className="card mt-4 shadow p-3 mb-5 bg-body-tertiary rounded">
        
          <img src={mobileone}  className="card-img-top img-fluid" alt="" />
          <div className="card-body">
            <h5 className="card-title mt-2">Lorem Ipsum Dolor</h5>
            <p className="text-danger">123,456 PKR</p>
            <p>
              <del>375,000</del>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card mt-4 shadow p-3 mb-5 bg-body-tertiary rounded">
          <img src={mobiletwo} className="card-img-top img-fluid" alt="" />
          <div className="card-body">
            <h5 className="card-title mt-2">Lorem Ipsum Dolor</h5>
            <p className="text-danger">123,456 PKR</p>
            <p>
              <del>375,000</del>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card mt-4 shadow p-3 mb-5 bg-body-tertiary rounded">
          <img src={mobilethree} className="card-img-top img-fluid" alt="" />
          <div className="card-body">
            <h5 className="card-title mt-2">Lorem Ipsum Dolor</h5>
            <p className="text-danger">123,456 PKR</p>
            <p>
              <del>375,000</del>
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card mt-4 shadow p-3 mb-5 bg-body-tertiary rounded">
          <img src={mobilefour} className="card-img-top img-fluid" alt="" />
          <div className="card-body">
            <h5 className="card-title mt-2">Lorem Ipsum Dolor</h5>
            <p className="text-danger">123,456 PKR</p>
            <p>
              <del>375,000</del>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div> */}
<div className="position-absolute start-0 ms-5 "> <span className="ms-5 ps-3 fw-bold fs-5">BEST SELLING PHONES</span> </div>

<div className=" mt-5 container">
          <div className="row">
            {Mapdata.map((itm) => (
              <div className="col-lg-3 col-md-3 col-sm-6 p-2 ">
                  <div className="card ">
                  <img
                            className="img-fluid p-2 mt-1"
                            width={400}
                            src={itm.I}
                            alt=""
                          />
                    <div className="card-body">
                

                      <span className={itm.style}>{itm.J} </span>
                      <h6 className="mt-3">{itm.K}</h6>
                      <p className={itm.tyle}>
                        {itm.L} <span className={itm.dsr}>{itm.Lp}</span>
                      </p>
                     
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>

  
</div>

    </div>
  );
};

export default Rootlayout;
