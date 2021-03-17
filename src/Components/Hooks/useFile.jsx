import React, { useState } from "react";

const useFile = (initValue) => {
  const [value, setValue] = useState(initValue);
  const [filename, setFilename] = useState("-");

  const onChange = (e) => {
    setValue(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  return { value, onChange, setValue, filename, setFilename };
};

export default useFile;
