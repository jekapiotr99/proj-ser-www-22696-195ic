<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>

    <div id="app">
      <v-app id="inspire">
        <v-expansion-panels>
          <v-expansion-panel v-for="element in elements" :key="element">
            <v-expansion-panel-header> {{ element.title }} </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ element.parg }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-divider inset class ="mt-15"></v-divider>
        <div class="text-center ma-2 mt-15">
          <v-btn dark @click="snackbar = true"> Otwórz Snackbar </v-btn>
          <v-snackbar v-model="snackbar">
            {{ text }}

            <template v-slot:action="{ attrs }">
              <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
                Zamknij
              </v-btn>
            </template>
          </v-snackbar>
        </div>
      </v-app>
    </div>
  </v-container>
</template>


<script>
export default {
  name: "HelloWorld",

  data: () => ({
    snackbar: false,
    text: `Wiadomość snackbar`,

    elements: [
      {
        title: "What is Lorem Ipsum?",
        parg: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        title: "Why do we use it?",
        parg: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
      },
      {
        title: "Where does it come from?",
        parg: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    }
    ]
  }),
};
</script>
