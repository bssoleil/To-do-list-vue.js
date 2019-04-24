new Vue ({
    el: '.toDoList',
      data: {
        todos: [
          "Organize the work",
          "Go to the gym",
          "Read a book"
        ]
      },
      methods: {
      addTodo: function() {
      this.todos.push(this.newList);
      this.newList="";
      }
      }
    })    