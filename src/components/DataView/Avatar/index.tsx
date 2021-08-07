/**
 * @name Avatar
 * @description 头像
 * @author darcrand
 */

import React from 'react';
import styles from './styles.module.less';

interface IProps {
  src?: string;
  alt?: string;
  children?: React.ReactElement;
}

const Avatar: React.FC<IProps> = ({ src, alt = '', children }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {src ? <img src={src} alt={alt} /> : <span>{children}</span>}
      </div>
    </>
  );
};

export default Avatar;
