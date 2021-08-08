/**
 * @name Button
 * @description 基础按钮
 * @author darcrand
 */

import React from 'react';
import styles from './styles.module.less';

interface IProps {
  children?: React.ReactElement;
  /** 按钮类型 */
  type?: 'primary' | 'dashed' | 'default';
  /** 是否全宽 */
  block?: boolean;
  /** 按钮尺寸 */
  size?: 'large' | 'middle' | 'small';
  /** 自定义 style */
  style?: React.CSSProperties;
}

function mergeClassNames(classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Button: React.FC<IProps> = ({
  size = 'middle',
  type = 'default',
  block = false,
  children,
}) => {
  return (
    <button
      className={mergeClassNames([
        styles.btn,
        styles[type],
        block && styles.block,
        size && styles[size],
      ])}
    >
      {children}
    </button>
  );
};

export default Button;
