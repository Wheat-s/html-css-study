// 获取输入框，添加按钮和待办事项列表的引用
const todoInput = document.getElementById('todo-input')
const addButton = document.getElementById('add-button')
const todoList = document.getElementById('todo-list')

// 添加按钮的点击事件处理函数
addButton.addEventListener('click', () => {
    const task = todoInput.value.trim();
    if (task !== '') {
        // 创建新的列表项
        const listItem = document.createElement('li');

        // 创建文本节点
        const taskText = document.createElement('span');
        taskText.textContent = task;

        // 添加点击事件：点击列表项切换完成状态
        listItem.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        // 创建删除按钮
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '删除';
        deleteButton.style.marginLeft = '1rem';
        deleteButton.style.padding = '0.3rem 0.6rem';
        deleteButton.style.border = 'none';
        deleteButton.style.backgroundColor = '#e74c3c';
        deleteButton.style.color = 'white';
        deleteButton.style.borderRadius = '5px';
        deleteButton.style.cursor = 'pointer';

        // 删除按钮点击事件
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation(); // 阻止事件冒泡，避免触发列表项的完成状态
            listItem.remove();
        });

        // 把文本和按钮加到列表项里
        listItem.appendChild(taskText);
        listItem.appendChild(deleteButton);

        // 加入到待办列表
        todoList.appendChild(listItem);

        // 清空输入框
        todoInput.value = '';
    }
});