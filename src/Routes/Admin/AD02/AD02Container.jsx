import React, { useState, useEffect, useRef } from "react";
import AD02Presenter from "./AD02Presenter";
import { useQuery, useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import {
  GET_MAINBANNER,
  MODIFY_MAINBANNER,
  MODIFY_MAINBANNER_IMAGEPATH,
} from "./AD02Queries.js";
import storageFn from "../../../fsStorage";

export default () => {
  ////////////// - USE STATE- ///////////////
  const [currentTab, setCurrentTab] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");
  const [dataFlag, setDataFlag] = useState(true);

  const fileRef = useRef();

  ////////////// - VARIABLE- ////////////////

  ////////////// - USE QUERY- ///////////////
  const {
    data: mainBannerDatum,
    loading: mainBannerLoading,
    refetch: mainBannerRefetch,
  } = useQuery(GET_MAINBANNER);

  if (!mainBannerLoading) {
    if (dataFlag) {
      setTitle(mainBannerDatum.getMainBanner[currentTab].title);

      let newContent = mainBannerDatum.getMainBanner[currentTab].content;
      newContent = String(newContent);

      const arr = newContent.split("<br />");
      let afterString = "";

      arr.map((data) => {
        afterString = afterString + data + "\n";
      });

      setContent(afterString);
      setLink(mainBannerDatum.getMainBanner[currentTab].link);
      setDataFlag(false);
    }
  }

  ///////////// - USE MUTATION- /////////////
  const [modifyMainBannerMutation] = useMutation(MODIFY_MAINBANNER);
  const [modifyMainBannerImagePathMutation] = useMutation(
    MODIFY_MAINBANNER_IMAGEPATH
  );

  ///////////// - EVENT HANDLER- ////////////
  const infoUpdateHandler = async () => {
    const { data } = await modifyMainBannerMutation({
      variables: {
        id: mainBannerDatum && mainBannerDatum.getMainBanner[currentTab]._id,
        title,
        content,
        link,
      },
    });

    if (data.modifyMainBanner) {
      toast.info("MAIN BANNER INFORMATION UPDATE");
      mainBannerRefetch();
    }
  };

  const fileChangeHandler = async (e) => {
    setIsLoading(true);
    const path = await storageFn.uploadFile(
      "SJPET/uploads/mainBanner",
      e.target.files[0].name,
      e.target.files[0]
    );

    const db_path = await storageFn.getSotragePath(path);

    const { data } = await modifyMainBannerImagePathMutation({
      variables: {
        id: mainBannerDatum && mainBannerDatum.getMainBanner[currentTab]._id,
        imagePath: db_path,
      },
    });

    if (data.modifyMainBannerImagePath) {
      toast.info("MAIN BANNER IMAGE UPDATE");
      mainBannerRefetch();
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
    <AD02Presenter
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
      isLoading={isLoading}
      title={title}
      setTitle={setTitle}
      content={content}
      setContent={setContent}
      link={link}
      setLink={setLink}
      fileRef={fileRef}
      //
      mainBannerDatum={mainBannerDatum && mainBannerDatum.getMainBanner}
      //
      infoUpdateHandler={infoUpdateHandler}
      fileChangeHandler={fileChangeHandler}
    />
  );
};
