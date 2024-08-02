> 本元素是继承自 [UiNode](https://www.yuque.com/box3lab/api/zek5l1m2s2bxoea4) 类


### 属性

#### 只读ui.anchor : [Vec2 ](https://www.yuque.com/box3lab/api/skm8ig6f8yx0g0zm)
默认值：`{x:0,y:0}`

**节点的锚点，用于确定节点的位置。**

---


#### 只读ui.position : [Coord2](https://www.yuque.com/box3lab/api/fa0dxkfxscs74k44)
默认值：无

**节点的位置，相对于父节点的位置。**

---


#### 只读ui.backgroundColor : [Vec3](https://www.yuque.com/box3lab/api/leixabkuu89lhklr)
默认值：白色

**节点的背景颜色。**

---


#### ui.backgroundOpacity : number
默认值：100

**节点的背景透明度。**

---


#### 只读ui.size : [Coord2](https://www.yuque.com/box3lab/api/fa0dxkfxscs74k44)
默认值：无

**节点的尺寸。**

---


#### ui.zIndex **: number**
默认值：无

**节点的层级，用于确定节点的渲染顺序。**

---


#### ui.autoResize **: 'NONE' | 'X' | 'Y' | 'XY'**
默认值：'NONE'

**节点的自动调整尺寸的方式。**

---


#### ui.visible **: boolean**
默认值：true

**节点的可见性。**

---


#### ui.pointerEventBehavior **: **[**PointerEventBehavior**](#cgPTQ)
默认值：PointerEventBehavior.ENABLE

**配置鼠标指针事件的响应方式，鼠标指针事件包括：**

- **pointerdown**
- **pointerup**


### 事件

#### `pointerdown : [UiEvent](https://www.yuque.com/box3lab/api/kxk91tlgpry8nv6z)<events<this>>`
**类似 Web 的 pointerdown 事件，会受到 pointerEventBehavior 的影响。**

---


#### `pointerup : [UiEvent](https://www.yuque.com/box3lab/api/kxk91tlgpry8nv6z)<events<this>>`
**类似 Web 的 pointerup 事件，会受到 pointerEventBehavior 的影响。**
```javascript
const img = UiImage.create(); // 静态方法，直接通过类上面的方法来使用。

//当监听到鼠标按下该图片元素时
img.events.add('pointerdown',(UiImage) => {
    //xxx
})

//当监听到鼠标抬起该图片元素时
img.events.add('pointerup', (UiImage) => {
    //xxx
})
```
```javascript
//当监听到鼠标按下任意元素时
input.onPointerDown.sub(({target}) => {
  //xxx
});

//当监听到鼠标抬起任意元素时
input.onPointerUp.sub(({target}) => {
  //xxx
});
```

### **枚举**

#### PointerEventBehavior
**表示界面元素对鼠标指针按下事件的行为方式。**

**无论是哪种行为方式，鼠标指针事件在UI元素上触发时，都不会产生对应的玩家输入。**

| **属性** | **说明** |
| --- | --- |
| DISABLE_AND_BLOCK_PASS_THROUGH | 不响应，且不允许位于元素后方的其他元素响应。 |
| DISABLE | 不响应。 |
| BLOCK_PASS_THROUGH | 不允许位于元素后方的其他元素响应。 |
| ENABLE | 正常响应。 |


