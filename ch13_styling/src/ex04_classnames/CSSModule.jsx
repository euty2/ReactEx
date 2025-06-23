import styles from "./CSSModule.module.css";
import second from "./CSSSecond.module.css";

const CSSModule = () => {
  console.log(styles);
  console.log(styles.wrapper);

  return (
    <>
      {/* <div className={`${styles.wrapper} ${styles.inverted}`}> */}
      <div className={[styles.wrapper, styles.inverted].join(" ")}>
        안녕하세요, 저는 <span className="something">CSS Module!</span>
      </div>
      <div className={second.wrapper}>
        안녕하세요, 저는 <span className="something">CSS Second Module!</span>
      </div>
    </>
  );
};

export default CSSModule;
