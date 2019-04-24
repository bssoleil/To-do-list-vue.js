new Vue ({
    el: '.toDoList',
      data: {
        todos: [
          "toto",
          "tata"
        ]
      },
      methods: {
      addTodo: function() {
      this.todos.push(this.newList);
      this.newList="";
      }
      }
    })    