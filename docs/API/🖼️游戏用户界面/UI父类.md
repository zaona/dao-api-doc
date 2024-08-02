> 除非另有特别说明，本用户界面的所有API均被集成在**Client端**中。


### 属性

#### ui.name : string   
**该节点的标识，可重复。**

---


#### `ui.parent : [UiNode](https://www.yuque.com/box3lab/api/zek5l1m2s2bxoea4/edit) | undefined`
**节点的父节点，非根节点的父节点为空时，该节点将不会被渲染。**
>   ℹ️  若节点的父节点为空，且在脚本中无任何引用，则该节点可能会被浏览器当作垃圾回收掉哦。


---


#### `只读ui.children : ReadonlyArray<[UiNode](https://www.yuque.com/box3lab/api/zek5l1m2s2bxoea4/edit)>`
**节点的子节点。如需要调整子节点结构，应修改子节点的**`**parent**`**属性。**

---


#### `只读ui.events : [UiEvent](https://www.yuque.com/box3lab/api/kxk91tlgpry8nv6z)<[UiNodeEvents](https://www.yuque.com/box3lab/api/yzgcv4sfm223f9we#zEaTj)>`
**管理节点相关的事件。**

---


#### ui.uiScale: [UiScale](https://www.yuque.com/box3lab/api/igyefsag31tcb8pg) | undefined
**节点等比例缩放数据。**


### **方法**

#### **ui.**findChildByName(name**:string**) **: **[**UiNode**](https://www.yuque.com/box3lab/api/zek5l1m2s2bxoea4/edit)** | undefined**
**按名称查找子节点，返回对应子节点对象。（节点名称可在编辑模式下的属性面板中查看）**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| --- | --- | --- | --- | --- |
| name | _是_ | | string | 需要查找的节点名称 |

**返回值**

| **类型** | **说明** |
| --- | --- |
| [UiNode](https://www.yuque.com/box3lab/api/zek5l1m2s2bxoea4/edit) &#124; undefined | 指定名称的节点的对象，若子节点中无对应ID的节点，则返回`undefined` |


---


#### **ui.**clone() **: this**
**克隆节点，包括其子节点。**

**返回值**

| **类型** | **说明** |
| --- | --- |
| this | 返回克隆出来的新节点。 |


