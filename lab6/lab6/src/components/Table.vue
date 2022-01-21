<script>

import "../assets/index.css"

export default {
  name: "ShoppingList",
  props: {
    hed: String,
  },
  data() {
      return {
        el: "#shopping-list",
        bbtn: ".btn",
        newItem: '',
        items: [
            'czekolada',
        ],
        isActive: true,
        variant: ""
      }
  },
  methods: {
    saveItem: function() {
        if(this.newItem.length > 0){
            this.items.push(this.newItem);
                this.variant = "success";
            }
            else{
                this.variant = "danger";
            }
   },
   delItem: function() {
       this.items.pop(this.delItem);
   },
   clear: function() {
       this.variant = "";
   }
   },
   computed: {
        charCount() {
            return this.newItem.length;
        }
    }

};
</script>

<template>
<div id = "shopping-list">
    <h1>{{ hed.toLocaleUpperCase() }}</h1>
    <div class = "add-item">
        <input v-model="newItem" type="text" placeholder="Co musisz kupić?" maxlength="100" @keyup.enter ="saveItem" @click = "clear">
        <p>{{charCount}}/100</p>
        <b-button class = "btn btn-primary" v-on:click="saveItem" v-bind:variant="variant">Dodaj przedmiot</b-button>
    </div>
    <ul v-if = "items.length > 0">
        <li v-for="item in items" v-bind:key="item" @click ="delItem" >{{item}}</li>
    </ul>
    <p v-else>Brak przedmiotów na liście!</p>
    </div>
</template>