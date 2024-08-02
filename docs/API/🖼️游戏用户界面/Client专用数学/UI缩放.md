> 此组件用于对所在节点的最终渲染效果进行等比例缩放。
> 对于受影响的节点，进行缩放影响的内容包括：
> - 自身的缩放相对值与绝对值
> - 所有后代元素的缩放相对值与绝对值
> - 所有后代元素的位置绝对值与相对值
> 
通常应用于对不同屏幕进行适配。


### 属性

#### scale : number
**缩放倍数，仅允许设置大于等于0的数字。当传入非法值时，不会生效并会在控制台打印一条警告。**
```javascript
const uiScale = UiScale.create();

uiScale.scale = screenWidth / 1366; // 按宽度进行缩放，预设渲染分辨率x值为 1366px

uiNode.uiScale = uiScale; // 将组件作为属性挂载到节点上

```




## **静态方法**

#### **UiScale.**create() **: **[**UiScale**](https://www.yuque.com/box3lab/api/igyefsag31tcb8pg)
**创建一个 UiScale。**

**返回值**

| **类型** | **说明** |
| --- | --- |
| [**UiScale**](https://www.yuque.com/box3lab/api/igyefsag31tcb8pg) | 缩放对象 |


