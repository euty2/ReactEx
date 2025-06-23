// npm install classnames 를 설치해야 함

import styles from "./CSSModule.module.css";
import second from "./CSSSecond.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const CSSModule = () => {
  return (
    <>
      {/* <div className={`${styles.wrapper} ${styles.inverted}`}> */}
      {/* <div className={[styles.wrapper, styles.inverted].join(" ")}> */}
      <div className={cx("wrapper", "inverted")}>
        안녕하세요, 저는 <span className="something">CSS Module!</span>
      </div>
      <div className={second.wrapper}>
        안녕하세요, 저는 <span className="something">CSS Second Module!</span>
      </div>
    </>
  );
};

export default CSSModule;
