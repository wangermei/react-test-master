import React from 'react';
import { Carousel } from 'antd';
import { connect } from 'dva';
import styles from '../Test/Test.css';

function Test() {
  return (
    <div className={styles.box}>
      <Carousel autoplay>
        <div>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509015137909&di=4d29ebf244d088d4bfed6721ff604c1f&imgtype=0&src=http%3A%2F%2Fimg.tuku.cn%2Ffile_big%2F201501%2F76f4b9d422364aad9f1228533b85515b.jpg" />
        </div>
        <div>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509609966&di=3a2558b3c31ab4692354ed957ab9c20d&imgtype=jpg&er=1&src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F811%2F062514100000%2F140625100000-1.jpg" />
        </div>
        <div>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509015234039&di=1cf0e37217c1a73d6371b252ec5b9738&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F3%2F56c182113a31e.jpg"/>
        </div>
        <div>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509610024&di=ef2b3f31492dd319293c43d4a9a5eaf9&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.tuku.cn%2Ffile_big%2F201501%2F7dcd94aafb5f4b02a32b072f8f69bf2f.jpg"/>
        </div>
      </Carousel>
    </div>
  );
}

Test.propTypes = {
};

export default connect()(Test);
