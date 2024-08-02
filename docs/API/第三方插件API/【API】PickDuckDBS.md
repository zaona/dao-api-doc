> 插件由用户[冷鱼与热猫（83354）](https://dao3.fun/profile/83354)投稿
> 收录时间：2024/6/5

插件介绍：

[初次使用必看 - PGOpenAPI 文档](https://doc.api.pgaot.com/doc-3739002)

> 在点鸭数据表操作中：
> 获取数据类似于：**SELECT <字段筛选> FROM <数据表 ID> WHERE <条件筛选> order by <字段排序> limit <页码>,<展示数>**
> 更新数据类似于：**UPDATE <设置字段值> SET <数据表 ID> WHERE <条件筛选>**
> 新增数据类似于：**INSERT INTO <数据表 ID> (<设置的字段>) VALUES (<设置的字段值>)**
> 删除数据类似于：**DELETE FROM <数据表 ID> WHERE <条件筛选>**

### 属性

#### `getJsData : {nickname: string, uid: number, tablename: string, tableids2: string, localurl: [URL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL) }`

**该数据表的配置数据。**

**返回值**

| **参数**  | **类型**                                                    | **说明**                 |
| --------- | ----------------------------------------------------------- | ------------------------ |
| nickname  | string                                                      | 该数据表所属人昵称       |
| uid       | number                                                      | 该数据表所属人 PGID      |
| tablename | string                                                      | 该数据表名称             |
| tableids2 | string                                                      | 该数据表 ID【已 SHA256】 |
| localurl  | [URL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL) | 当前界面网址             |

### 方法

#### `setUrl(text:string,type:boolean) : string`

**URL 编/解码操作**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| -------- | -------- | ---------- | -------- | -------- |
| text     | _是_     | | string | 要处理的字符串 |
| type | _是_ | _False_ | boolean | 编码方式。True：编码，False：解码 |

**返回值**

| **类型** | **说明**     |
| -------- | ------------ |
| string   | 处理后的文本 |

---

#### `setMarks(text:string,type:boolean) : string`

**转义指定字符操作，替换关键字后端处理，确保能成功操作。**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| -------- | -------- | ---------- | -------- | -------- |
| text     | _是_     |
| string | 要处理的字符串 ||||
| type | _是_ | _False_ | boolean | 转义方式。True：双引号，False：单引号 |

**返回值**

| **类型** | **说明**     |
| -------- | ------------ |
| string   | 转义后的文本 |

---

#### `getTableData(config:{ fields?:string, sort?:string, filter?:string, page?:number, limit?:number, id?:string }) : Promise<GetDataObject>`

**获取数据表的数据**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| -------- | -------- | ---------- | -------- | -------- |
| fields   || \* | string | 字段筛选 |
| sort || createdAt desc | string | 字段排序 |
| filter || 1 | string | 条件筛选 |
| page ||| number | 页码 |
| limit ||| number | 展示数 |
| id ||| string | 自定义标识 |

**返回值**

| **类型**                 | **说明**         |
| ------------------------ | ---------------- |
| `Promise<GetDataObject>` | 服务器返回的数据 |

---

#### `getMultipleTableData(config:{ tableid:string,fields?:string, sort?:string, filter?:string, page?:number, limit?:number, id?:string }) : Promise<GetDataObject>`

**多表查询数据表数据**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| -------- | -------- | ---------- | -------- | -------- |
| tableid  | 是       || string | 数据表名 |
| fields || \* | string | 字段筛选 |
| sort || createdAt desc | string | 字段排序 |
| filter || 1 | string | 条件筛选 |
| page ||| number | 页码 |
| limit ||| number | 展示数 |
| id ||| string | 自定义标识 |

**返回值**

| **类型**                 | **说明**         |
| ------------------------ | ---------------- |
| `Promise<GetDataObject>` | 服务器返回的数据 |

---

#### `setTableData(config:{ type:'UPDATE' | 'INSERT', fields:string, filter:string, id?:string }) : Promise<SetDataObject>`

**更新/新增数据表的数据**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| -------- | -------- | ---------- | -------- | -------- |
| type     | 是       ||||
| 'UPDATE' &#124; 'INSERT' | 操作方式，UPDATE：更新，INSERT：新增 || fields | 是 |
| string | 设置字段值 || filter | 是 | 0 | string | 条件筛选/设置的字段 |
| id ||| string | 自定义标识 |

**返回值**

| **类型**                 | **说明**         |
| ------------------------ | ---------------- |
| `Promise<SetDataObject>` | 服务器返回的数据 |

---

#### `setTableDataDelete(config:{filter:string,id?:string }) : Promise<SetDataObject>`

**删除数据表的数据**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| -------- | -------- | ---------- | -------- | -------- |
| filter   | 是       || string | 条件筛选 |
| id ||| string | 自定义标识 |

**返回值**

| **类型**                 | **说明**         |
| ------------------------ | ---------------- |
| `Promise<SetDataObject>` | 服务器返回的数据 |

---

#### `事件 onGetData(handler:(data:GetDataObject | SetDataObject, id:string, url:string) => void) : void`

**获取数据内容时触发的的事件**

**输入参数**

| **参数** | **必填** | **默认值** | **类型** | **说明** |
| -------- | -------- | ---------- | -------- | -------- |
| handler  | _是_     || function | 监听得到数据时的处理的函数 |

### **接口**

#### `GetDataObject`

**得到数据的对象**

| **参数**  | **类型** | **说明**               |
| --------- | -------- | ---------------------- |
| code      | number   | 状态码 当 200 时成功   |
| fields    | object   | 数据表数据             |
| count     | number   | 整个数据表行数量总和   |
| createdAt | number   | 请求数据返回时间戳     |
| logid     | string   | 日志 ID，可以查询      |
| msg       | string   | 请求状态               |
| sql       | string   | 【报错时】SQL 语法     |
| error     | string   | 【报错时】SQL 报错提示 |

---

#### `SetDataObject`

**设置数据的对象**

| **参数**  | **类型** | **说明**               |
| --------- | -------- | ---------------------- |
| code      | number   | 状态码 当 200 时成功   |
| count     | number   | 整个数据表行数量总和   |
| createdAt | number   | 请求数据返回时间戳     |
| logid     | string   | 日志 ID，可以查询      |
| msg       | string   | 请求状态               |
| sql       | string   | 【报错时】SQL 语法     |
| error     | string   | 【报错时】SQL 报错提示 |