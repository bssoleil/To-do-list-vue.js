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
      },
      delTodo: function(index) {
          this.todos.splice(index,1);
      }
      },
      filters: {
        capitalize: function(value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
          }
      }
    })    