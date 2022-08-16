import React, { useState } from "react";
import styles from "./Container.module.css";
import Main from "./Main";
import Thanks from "./Thanks";

const Container = () => {
  const [value, setValue] = useState("");
  const [btn, setBtn] = useState(false);

  const valueChanger = (values) => {
    setValue(values);
  };

  const btnchange = (values) => {
    setBtn(values);
  };

  return (
    <div className={styles.container}>
      <Main onChangeHandler={valueChanger} bton={btnchange} values={btn} />
      <Thanks values={value} clickValue={btn} />
    </div>
  );
};

export default Container;
