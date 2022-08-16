import React, { useState } from "react";
import styles from "./Main.module.css";

const Main = (props) => {
  const [clicked, setclicked] = useState(props.values);
  const [activeId, setActiveId] = useState();

  const data = [
    { id: 1, text: "1" },
    { id: 2, text: "2" },
    { id: 3, text: "3" },
    { id: 4, text: "4" },
    { id: 5, text: "5" },
  ];
  
  let value = "0";

  const handleClick = (e) => {
    const { nodeName } = e.target;
    if (nodeName === "BUTTON") {
      value = e.target.textContent;
    }
    props.onChangeHandler(value);
  };
  
  const submit = (e) => {
    e.preventDefault();
    setclicked(true);
    props.bton(true);
  };

  return (
    <div className={`${styles.main} ${clicked && styles.transform}`}>
      <img src="./images/icon-star.svg" alt="star" />
      <h1>How did we do?</h1>

      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div>
        <div className={styles.wrap} onClick={handleClick}>
          {data.map((val) => (
            <button
              onClick={() => {
                setActiveId(val.id);
              }}
              className={`${
                activeId === val.id ? styles.Active : styles.Inactive
              }`}
              key={val.id}
            >
              {val.text}
            </button>
          ))}
        </div>
        <button
          type="submit" 
          onClick={submit}
          className={styles.submit__button}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default Main;
