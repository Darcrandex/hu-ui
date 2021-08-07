## Avatar

```tsx
import React from 'react';
import { Avatar } from 'hu-ui';

export default () => {
  return (
    <>
      <Avatar>张三</Avatar>
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png">
        张三
      </Avatar>
    </>
  );
};
```

### API

| 属性     | 说明         | 类型         | 默认值    |
| -------- | ------------ | ------------ | --------- |
| src      | 头像图片路径 | strng        | undefined |
| children | 内容         | ReactElement | undefined |
