"use strict";
new Vue ({
    el: '.toDoList',
      data: {
        todos: []
                
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
      },
      
    })
  