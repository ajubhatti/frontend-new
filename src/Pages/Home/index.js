import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../Components/Banner";
import ServiceRender from "../Service/ServiceRender";
import { fetchProfile } from "../Profile/store/actions";
import { getUser } from "../../Helper/LocalStorage";
import MarqueeTag from "../../Components/MarqueeTag";
import { fetchBannerList, fetchTickerList } from "./store/action";
import PageInfo from "./PageInfo";

const Home = (props) => {
  const dispatch = useDispatch();
  const user = getUser();

  const { loading, bannerListData, tickerListData } = useSelector(
    (state) => state.homeReducer
  );

  const [bannerList, setBannerList] = useState([]);
  const [tickerList, setTickerList] = useState([]);

  useEffect(() => {
    setBannerList(bannerListData);
    setTickerList(tickerListData);
  }, [bannerListData, tickerListData]);

  useEffect(() => {
    if (user && user?.id) {
      dispatch(
        fetchProfile({
          id: user?.id,
        })
      );
    }
  }, [dispatch, user?.id]);

  useEffect(() => {
    dispatch(fetchBannerList());
    dispatch(fetchTickerList());
  }, [dispatch]);

  return (
    <>
      <div className="slide">
        <Banner bannerList={bannerList} />
        {/* <Carousel slides={bannerList} /> */}
      </div>
      <div className="py-2">
        <MarqueeTag tickerList={tickerList} />
      </div>
      <div>
        <ServiceRender />
      </div>
      <div>
        <PageInfo />
      </div>
    </>
  );
};

export default Home;
