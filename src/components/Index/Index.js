import React from 'react';
import { connect } from 'dva';
import styles from '../Index/Index.css';

function Test() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>我是三妹</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>欢迎光临</li>
      </ul>
    </div>
  );
}

Test.propTypes = {
};

export default connect()(Test);
