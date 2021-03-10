<template>
  <v-app id="inspire">
    <v-navigation-drawer
                         v-model="drawer"
                         app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
          dense
          nav
      >
        <v-list-item
            v-for="item in items"
            :key="item.title"
            :to="item.to"
            link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app
               color="primary"
               dark
               prominent
               src="meeting.jpg"
               rounded
    >
      <v-app-bar-nav-icon  color="black"  @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Buetify Meeting</v-toolbar-title>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      {title: 'Meeting', icon: 'mdi-format-list-checks', to:'/'},
      {title: 'About', icon: 'mdi-help-box', to:'/about'},
    ],
  })
}
</script>