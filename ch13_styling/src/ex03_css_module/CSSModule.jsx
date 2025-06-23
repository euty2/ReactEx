import styles from "./CSSModule.module.css";
import second from "./CSSSecond.module.css";

/*
css 작업 시 class이름의 충돌이 많이 발생한다.
충돌이 발생하면 나중에 포함된 class가 일괄 적용되게 된다.
그래서 서로 다른 작업자의 동일한 class명을 변경할 필요성이 있다.

React에서는 확장자를 module.css로 정해주면
v2버전 이후부터는 자동으로 중복되지 않은 고유한 이름으로 변경을 해준다.

[파일 이름]_[클래스 이름]__[해시값] 이렇게 변경함으로써
클래스 이름의 충돌없이 편리하게 사용할 수 있다.

그리고 만약 클래스 이름을 그대로 사용하고 싶으면
:global [클래스 이름]
이렇게 만들면 클래스 이름이 변경되지 않고
사용할 수 있게 된다.
*/

const CSSModule = () => {
  console.log(styles);
  console.log(styles.wrapper);
  console.log(second.wrapper);

  return (
    <>
      <div className={styles.wrapper}>
        안녕하세요, 저는 <span className="something">CSS Module!</span>
      </div>
      <div className={second.wrapper}>
        안녕하세요, 저는 <span className="something">CSS Second Module!</span>
      </div>
    </>
  );
};

export default CSSModule;
