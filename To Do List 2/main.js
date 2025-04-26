// IIFE
(() => { 
    // state variables
    // 这里定义了状态变量，用于存储待办事项的数组，方便管理和操作待办事项数据
    let toDoListArray = [];
    // ui variables
    // 定义界面相关的变量，通过选择器获取表单、输入框和待办事项列表的DOM元素，方便后续操作
    const form = document.querySelector(".form"); 
    const input = form.querySelector(".form-input");
    const ul = document.querySelector(".toDoList"); 
  
    // event listeners
    // 监听表单的提交事件，防止默认刷新页面，获取输入的待办事项内容，生成唯一ID，添加到DOM和数组中，并清空输入框
    form.addEventListener('submit', e => {
      // prevent default behaviour - Page reload
      e.preventDefault();
      // give item a unique ID
      let itemId = String(Date.now());
      // get/assign input value
      let toDoItem = input.value;
      //pass ID and item into functions
      addItemToDOM(itemId , toDoItem);
      addItemToArray(itemId, toDoItem);
      // clear the input box. (this is default behaviour but we got rid of that)
      input.value = '';
    });
    
    // 监听待办事项列表的点击事件，当点击的元素含有 data-id 属性时，执行删除操作，从DOM和数组中移除对应项
    ul.addEventListener('click', e => {
      let id = e.target.getAttribute('data-id')
      if (!id) return // user clicked in something else      
      //pass id through to functions
      removeItemFromDOM(id);
      removeItemFromArray(id);
    });
    
    // functions 
    // 将新的待办事项添加到DOM中，创建li元素，设置data-id属性，插入待办事项文本，添加到ul列表中
    function addItemToDOM(itemId, toDoItem) {    
      // create an li
      const li = document.createElement('li')
      li.setAttribute("data-id", itemId);
      // add toDoItem text to li
      li.innerText = toDoItem
      // add li to the DOM
      ul.appendChild(li);
    }
    
    // 将待办事项作为对象存入数组中，包含唯一ID和待办事项内容，方便后续查找和删除
    function addItemToArray(itemId, toDoItem) {
      // add item to array as an object with an ID so we can find and delete it later
      toDoListArray.push({ itemId, toDoItem});
      console.log(toDoListArray)
    }
    
    // 根据传入的ID查找对应的li元素，并从ul中移除，实现DOM中删除待办事项的效果
    function removeItemFromDOM(id) {
      // get the list item by data ID
      var li = document.querySelector('[data-id="' + id + '"]');
      // remove list item
      ul.removeChild(li);
    }
    
    // 根据传入的ID过滤数组，创建一个不包含该ID元素的新数组，实现从数据中删除待办事项
    function removeItemFromArray(id) {
      // create a new toDoListArray with all li's that don't match the ID
      toDoListArray = toDoListArray.filter(item => item.itemId !== id);
      console.log(toDoListArray);
    }
    
  })();