import React, { useState, useEffect } from "react";
import withSplitting from "../../../Lib/withSplitting";
const MM00Presenter = withSplitting(() => import("./MM00Presenter"));
import { useQuery, useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import {
  ADD_ACCEPT_RECORD,
  GET_BRAND,
  GET_MAINBANNER,
  GET_MOBILEBANNER,
  GET_STORE,
  GET_STORYVIEW,
} from "./MM00Queries";
import { animateScroll as scroll } from "react-scroll";

const MM00Container = ({ history }) => {
  ////////////// - USE STATE- ///////////////

  ////////////// - USE QUERY- ///////////////
  const {
    data: mainBannerData,
    loading: mainBannerLoading,
    refetch: mainBannerRefetch,
  } = useQuery(GET_MAINBANNER);

  const {
    data: mobileBannerData,
    loading: mobileBannerLoading,
    refetch: mobileBannerRefetch,
  } = useQuery(GET_MOBILEBANNER);

  const { data: sDatum, refetch: sRefetch } = useQuery(GET_STORE);
  const { data: vDatum, refetch: vRefetch } = useQuery(GET_STORYVIEW);
  const { data: bDatum, refetch: bRefetch } = useQuery(GET_BRAND);

  ///////////// - USE MUTATION- /////////////
  const [addAcceptRecordMutation] = useMutation(ADD_ACCEPT_RECORD);

  ///////////// - EVENT HANDLER- ////////////
  const _addAceeptRecord = async () => {
    const d = new Date();
    const year = d.getFullYear();
    let month = d.getMonth() + 1;
    let date = d.getDate();
    month = ("00" + month).slice(-2);
    date = ("00" + date).slice(-2);

    const regDate = year + month + date;

    const {
      data: { addAcceptRecord },
    } = await addAcceptRecordMutation({
      variables: {
        date: regDate,
      },
    });

    await sessionStorage.setItem("ALKJSDLJOQIUALSX", "LAZKNJXOIUQASDSA");
  };

  const moveLinkHandler = (data) => {
    sessionStorage.setItem("info", JSON.stringify(data));

    history.push(`/info`);
  };

  ////////////// - USE EFFECT- //////////////
  useEffect(() => {
    const item = sessionStorage.getItem("ALKJSDLJOQIUALSX");

    if (item !== "LAZKNJXOIUQASDSA") {
      _addAceeptRecord();
    }
  }, []);

  useEffect(() => {
    scroll.scrollTo(0);
  }, []);

  const [currentBrand, setCurrentBrand] = useState(null);

  useEffect(() => {
    if (bDatum) {
      const brand = bDatum.getAllBrandList;
      const temp = parseInt(
        brand.length % 3 === 0 ? brand.length / 3 : brand.length / 3 + 1
      );
      const brandArr = [];

      for (let i = 0; i < temp; i++) {
        const tempArr = [];

        for (let j = i * 3; j < (i + 1) * 3; j++) {
          if (brand[j]) tempArr.push(brand[j]);
        }
        brandArr.push(tempArr);
      }

      setCurrentBrand(brandArr);
    }
  }, [bDatum]);

  return (
    <MM00Presenter
      currentBrand={currentBrand}
      //
      sDatum={sDatum && sDatum.getAllStoreByImportant}
      vDatum={vDatum && vDatum.getAllStoryViewList}
      bDatum={bDatum && bDatum.getAllBrandList}
      mainBannerData={mainBannerData && mainBannerData.getMainBanner}
      mobileBannerData={
        mobileBannerData && mobileBannerData.getMobileMainBanner
      }
      //
      moveLinkHandler={moveLinkHandler}
    />
  );
};

export default MM00Container;
