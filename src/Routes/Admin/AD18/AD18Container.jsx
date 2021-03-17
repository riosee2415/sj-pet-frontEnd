import React, { useState, useEffect, useRef } from "react";
import AD18Presenter from "./AD18Presenter";
import { useQuery, useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import {
  GET_MOBILEMAINBANNER,
  MODIFY_MOBILEMAINBANNER,
  MODIFY_MOBILEMAINBANNER_IMAGEPATH,
} from "./AD18Queries.js";
import storageFn from "../../../fsStorage";

export default () => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fileRef = useRef();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [dataFlag, setDataFlag] = useState(true);

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////
  const {
    data: mobileMainBannerDatum,
    loading: mobileMainBannerLoading,
    refetch: mobileMainBannerRefetch,
  } = useQuery(GET_MOBILEMAINBANNER);

  if (!mobileMainBannerLoading) {
    if (dataFlag) {
      setTitle(mobileMainBannerDatum.getMobileMainBanner[currentTab].title);

      let newContent =
        mobileMainBannerDatum.getMobileMainBanner[currentTab].content;
      newContent = String(newContent);

      const arr = newContent.split("<br />");
      let afterString = "";

      arr.map((data) => {
        afterString = afterString + data + "\n";
      });

      setContent(afterString);
      setLink(mobileMainBannerDatum.getMobileMainBanner[currentTab].link);
      setDataFlag(false);
    }
  }

  ///////////// - USE MUTATION- /////////////
  const [modifyMobileMainBannerMutation] = useMutation(MODIFY_MOBILEMAINBANNER);
  const [modifyMobileMainBannerImagePathMutation] = useMutation(
    MODIFY_MOBILEMAINBANNER_IMAGEPATH
  );

  ///////////// - EVENT HANDLER- ////////////
  const infoUpdateHandler = async () => {
    const { data } = await modifyMobileMainBannerMutation({
      variables: {
        id:
          mobileMainBannerDatum &&
          mobileMainBannerDatum.getMobileMainBanner[currentTab]._id,
        title,
        content,
        link,
      },
    });

    if (data.modifyMobileMainBanner) {
      toast.info("MOBILE BANNER INFORMATION UPDATE");
      mobileMainBannerRefetch();
    }
  };

  const fileChangeHandler = async (e) => {
    setIsLoading(true);
    const path = await storageFn.uploadFile(
      "SJPET/uploads/mobileMainBanner",
      e.target.files[0].name,
      e.target.files[0]
    );

    const db_path = await storageFn.getSotragePath(path);

    const { data } = await modifyMobileMainBannerImagePathMutation({
      variables: {
        id:
          mobileMainBannerDatum &&
          mobileMainBannerDatum.getMobileMainBanner[currentTab]._id,
        imagePath: db_path,
      },
    });

    if (data.modifyMobileMainBannerImagePath) {
      toast.info("MIDDLE BANNER IMAGE UPDATE");
      mobileMainBannerRefetch();
      fileRef.current.value = null;
    } else {
      toast.error("잠시 후 다시 시도해주세요.");
      fileRef.current.value = null;
    }

    setIsLoading(false);
  };

  ////////////// - USE EFFECT- //////////////
  useEffect(() => {
    setDataFlag(true);
  }, [currentTab]);

  return (
    <AD18Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      fileRef={fileRef}
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      link={link}
      setLink={setLink}
      //
      mobileMainBannerDatum={
        mobileMainBannerDatum && mobileMainBannerDatum.getMobileMainBanner
      }
      //
      infoUpdateHandler={infoUpdateHandler}
      fileChangeHandler={fileChangeHandler}
    />
  );
};
