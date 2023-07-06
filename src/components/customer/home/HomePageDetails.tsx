import React, { useState } from "react";
import PostCodeModal from "../../../layout/home/PostCodeModal";
import { useAuth } from "../../../store/auth-context";
import { fetcher, useHomeServices } from "../../../store/home-context";
import useSWR from "swr";
import { Service } from "../../../models/home";
import SearchBar from "./SearchBar";
import Plumber from "../../../assets/plumber.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import Card from "./Card";
import Arrow from "../../../assets/left-arrow.svg";

const HomePageDetails = () => {
  const { datarender, searchHandler } = useHomeServices();
  const url = "https://erranddo.kodecreators.com/api/v1/services";
  const { data, error, isLoading } = useSWR(url, fetcher);
  const serviceData: Service[] = data?.data ?? "";
  const imageStorageUrl = "https://erranddo.kodecreators.com/storage";
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const list = datarender;
  console.log("hello", data);
  return (
    <div>
      <div className="overflow-y-hidden md:pt-10 xs:pt-0 w-screen bg-[#E7F0F9] dark:bg-mediumGray xl:h-[77vh] md:h-[29rem] xs:mt-2">
        {/* xl:mt-[0.009vh] lg:mt-[9.651474530831099vh] md:mt-[0.09vh] xs:mt-[9.051474530831099vh] */}
        {
          <PostCodeModal //change to PostCodeModal
            open={openMenu}
            onCancel={() => {
              setOpenMenu(false);
            }}
            onCancelAll={() => {
              setOpenMenu(false);
            }}
          />
        }
        <div className="flex xl:pt-5 xs:pt-24 h-full">
          <div className="2xl:pt-36 xl:pt-24 md:pt-10 2xl:pl-48 xl:pl-48 lg:pl-20 md:pl-32 xs:pl-5">
            <p className="font-poppins-bold p-2 2xl:text-7xl xl:text-6xl md:text-5xl xs:text-3xl font-bold 2xl:w-[540px] xl:w-[450px] md:w-[370px] dark:text-darktextColor">
              Get Stuff Done
            </p>
            <p className="p-2 2xl:text-2xl xl:text-xl md:text-xl xs:text-md font-medium 2xl:w-[450px] xl:w-[370px] dark:text-slate-400 font-poppins">
              We’ll match you with the perfect Pro for{" "}
              <span className="text-[#DF994F] font-bold">FREE</span>
            </p>
            <div className="flex gap-2 items-center">
              <SearchBar
                onChange={(key: string) => {
                  searchHandler(key);
                  console.log(key);
                  setOpenSearch(true);
                }}
              />
              {/* <button
                  type="button"
                  onClick={() => setOpenSearch(true)}
                  className="text-white bg-[#0003FF] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 xl:text-lg md:text-sm rounded-xl xl:h-12 lg:h-10 xs:h-10 md:px-8 xs:px-5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button> */}
            </div>
            {list?.length > 0 && openSearch && (
              <div className="bg-white md:w-96 lg:w-80 xl:w-96 xs:w-64 xl:max-h-48 lg:max-h-36 h-auto   z-[100] absolute overflow-y-scroll rounded-xl ">
                {list?.map((d) => {
                  return (
                    <ul className="xl:text-lg lg:text-md xs:text-sm text-[#707070]">
                      <button
                        className="w-full"
                        onClick={() => {
                          setOpenMenu(true), setOpenSearch(false);
                        }}
                      >
                        <li className="px-6 py-1 text-left">{d.name}</li>
                      </button>
                      <hr />
                    </ul>
                  );
                })}
              </div>
            )}
          </div>
          <div className="place-self-end h-[90%] mx-auto">
            <img
              src={Plumber}
              alt=""
              className="lg:flex h-full  !w-full xs:hidden mt-auto object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex md:hidden pt-4 items-center justify-between">
        <p className=" pl-4 font-semibold text-md">Services</p>
        <button className="text-[#0003FF] pr-4">view more</button>
      </div>
      <div className=" 2xl:mt-[-90px] xl:mt-[-60px] lg:mt-[-50px] lg:flex xs:hidden items-center">
        <button className="arrow-left arrow">
          <img src={Arrow} alt="" className="" />
        </button>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={4}
          navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
          pagination={{ clickable: true, dynamicBullets: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {serviceData &&
            serviceData?.map((d) => {
              return (
                <SwiperSlide>
                  <Card
                    image={`https://erranddo.kodecreators.com/storage/${d?.image}`}
                    desc={d?.name}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
        <button className="arrow-right arrow ">
          <img src={Arrow} alt="" className="rotate-180" />
        </button>
      </div>
      <div className="2xl:px-40 xl:px-36 md:px-28 2xl:mt-[-90px] xl:mt-[-60px] lg:mt-[-50px] lg:hidden xs:grid xs:grid-cols-2">
        {serviceData &&
          serviceData?.map((d) => {
            return (
              <Card
                image={`https://erranddo.kodecreators.com/storage/${d?.image}`}
                desc={d?.name}
              />
            );
          })}
      </div>
    </div>
  );
};

export default HomePageDetails;
