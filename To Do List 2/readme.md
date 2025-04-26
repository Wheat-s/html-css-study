# **✨ 项目整体介绍**



这是一个**简单的 To-Do List（待办事项清单）**网页应用，主要功能是：

- 输入一条新的待办事项，点击按钮添加到列表。
- 点击列表里的待办事项，可以将它删除。

属于一个非常经典、基础的小项目，适合练习前端基础（HTML、CSS、JS DOM 操作）。

------



# **🧠 JavaScript 逻辑概览**

你的 main.js 的主要结构是这样的：

## **1. 用 IIFE 包裹整个代码**

```
(() => { ... })();
```

- 防止变量污染全局
- 页面加载时自动执行代码

------



## **2. 定义状态变量（state）**

```
let toDoListArray = [];
```



- 用一个数组来**保存所有的待办事项**。
- 每个待办事项是一个对象 { itemId, toDoItem }。

------



## **3. 获取界面元素（UI变量）**

```
const form = document.querySelector(".form");
const input = form.querySelector(".form-input");
const ul = document.querySelector(".toDoList");
```



- 绑定了表单、输入框、列表，方便后面操作。

------



## **4. 监听表单提交，添加待办事项**

```
form.addEventListener('submit', e => { ... });
```

- 阻止表单默认提交（防止页面刷新）

- 获取输入框里的内容

- 生成一个唯一ID（用 Date.now() 时间戳）

- 调用两个函数：

  

  - addItemToDOM(itemId, toDoItem) → 在页面上添加一条
  - addItemToArray(itemId, toDoItem) → 在数组里记录一条

  

- 最后清空输入框

------



## **5. 监听点击事件，删除待办事项**

```
ul.addEventListener('click', e => { ... });
```



- 当用户点击某个待办事项时

- 通过 data-id 找到对应的 ID

- 调用两个函数：

  

  - removeItemFromDOM(id) → 从页面上移除
  - removeItemFromArray(id) → 从数组中移除

------



## **6. 操作 DOM 和数组的函数**



- addItemToDOM(itemId, toDoItem)：在 <ul> 里新增 <li> 项
- addItemToArray(itemId, toDoItem)：数组里添加新的对象
- removeItemFromDOM(id)：找对应 <li> 并删除
- removeItemFromArray(id)：从数组中过滤掉对应的项

------



# **🏆 最简单一句话总结：**





> 用户在输入框里输入待办事项 → 点击按钮添加到列表 → 点击列表项可以删除，页面和数据同步更新。



------

