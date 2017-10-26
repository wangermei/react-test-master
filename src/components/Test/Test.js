import React from 'react';
import { connect } from 'dva';
import { Row, Col, Button } from 'antd';
import styles from '../Test/Test.css';

function Test() {
  return (
    <div className={styles.test}>
      <Row className={styles.row24}>
        <Col span={24}>col-24</Col>
      </Row>
      <Row>
        <Col span={12} className={styles.row12}>col-12</Col>
        <Col span={12}>col-12</Col>
      </Row>
      <Button type="primary">确定</Button>
    </div>
  );
}

Test.propTypes = {
};

export default connect()(Test);
