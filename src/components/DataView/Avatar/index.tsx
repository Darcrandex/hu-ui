/**
 * @name Avatar
 * @description 头像
 * @author darcrand
 */

import React from 'react';
import styles from './styles.module.less';

interface IProps {
  /** 头像的图片路径. 如果没有传,使用 children 作为内容 */
  src?: string;
  /** alt图片描述文本 */
  alt?: string;
  children?: React.ReactElement;
}

const Avatar: React.FC<IProps> = ({ src, alt, children }) => {
  return (
    <>
      <div className={styles.wrapper}>
        {src ? <img src={src} alt={alt} /> : <span>{children}</span>}
      </div>
    </>
  );
};

export default Avatar;
