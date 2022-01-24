<template>
  <div id="app">
    <img src="./assets/logo.png" width="75px" height="75px" />
    <h1 class="mt-3">Vue.js Todo List</h1>
    <div class="container">
      <section>
        <div class="row justify-content-center mt-4">
          <input
            v-model="inputField"
            v-on:keyup.enter="addTodo"
            class="mr-1"
            placeholder="Todo Item"
          />
          <button @click="addTodo" class="btn btn-primary">Add Todo</button>
        </div>
        <div v-if ="tasksOverall > 0 && percent != 100" class="percShow">
          <p>Tasks done: {{ tasksDone }}
          Total Tasks: {{ tasksOverall }} <br> Task percentage: {{ percent }}%</p>
        </div>
        <div v-else-if = "percent == 100" class="percShow">
         <p> All finished, job done :) </p>
        </div>
      </section>
      <section class="container">
        <div class="row">
          <div class="offset-md-3 col-md-6 mt-3">
            <ul class="list-group justify-content-center">
              <li
                class="row list-group-item border mt-2 col-xs-1"
                v-for="todo in todoList"
              >
                <div class="row align-items-center">
                  <input
                    type="checkbox"
                    v-on:change="toggle(todo)"
                    v-bind:checked="todo.complete"
                    class="col-sm-1 border border-danger"
                  />
                  <del v-if="todo.complete" class="col-sm-8">
                    <h5>{{ todo.name }}</h5>
                  </del>
                  <span v-else class="col-sm-8">
                    <h5>{{ todo.name }}</h5>
                  </span>
                  <span
                    @click="deleteTodo(todo)"
                    class="offset-sm-1 col-sm-2 delete text-right"
                    >X</span
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueCircle from "vue2-circle-progress";

import "./assets/main.css";

import test from "./components/test";

export default {
  name: "app",
  components: {
    test,
  },
  components: { VueCircle },
  data() {
    return {
      percent: 100,
      tasksDone: 0,
      tasksOverall: 0,
      inputField: "",
      todoList: [],
      fill: { gradient: ["red", "green", "blue"] },
    };
  },
  methods: {
    addTodo: function (todo) {
      todo = this.inputField;
      this.todoList.push({ name: todo, complete: false });
      this.inputField = "";
      this.calcPercent();
    },
    deleteTodo: function (todo) {
      var index = this.todoList.indexOf(todo);
      this.todoList.splice(index, 1);
      this.calcPercent();
    },
    toggle: function (todo) {
      todo.complete = !todo.complete;
      this.calcPercent();
    },
    calcPercent: function () {
      var perc = 0;
      var num = this.todoList.length;
      this.todoList.forEach((element) => {
        if (element.complete) {
          perc++;
        }
      });
      this.tasksDone = perc;
      this.tasksOverall = num;
      this.percent = Math.floor((perc / num) * 100);
    },
    progress(event, progress, stepValue) {
      console.log(stepValue);
    },
    progress_end(event) {
      console.log("Circle progress end");
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

h5 {
  margin-bottom: 0px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.delete {
  color: pink;
  cursor: pointer;
}

.delete:hover {
  color: red;
}
</style>
