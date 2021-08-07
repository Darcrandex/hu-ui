/**
 * @name Button
 * @description 基础按钮
 * @author darcrand
 */

import React from 'react';
import styles from './styles.module.less';

interface IProps {
  children?: React.ReactElement;
  type?: 'primary' | 'dashed' | 'default';
  block?: boolean;
  size?: 'large' | 'middle' | 'small';
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
