## Button

> 一个简单的按钮组件

### 基本使用

```tsx
import React from 'react';
import { Button } from 'hu-ui';

export default () => {
  return (
    <>
      <Button>默认</Button>
      <Button type="primary">高亮</Button>
      <Button type="dashed">虚线</Button>
    </>
  );
};
```

### 尺寸

```tsx
import React from 'react';
import { Button } from 'hu-ui';

export default () => {
  return (
    <>
      <Button size="large">大的</Button>
      <Button size="middle">一般</Button>
      <Button size="small">小的</Button>
    </>
  );
};
```

### 全宽按钮

```tsx
import React from 'react';
import { Button } from 'hu-ui';

export default () => {
  return (
    <>
      <Button block>全宽按钮</Button>
    </>
  );
};
```

### API

| 属性  | 说明     | 类型                             | 默认值  |
| ----- | -------- | -------------------------------- | ------- |
| type  | 按钮类型 | 'primary' , 'dashed' , 'default' | default |
| block | 是否全宽 | boolean                          | `false` |
| size  | 按钮尺寸 | 'large' , 'middle' , 'small';    | middle  |
