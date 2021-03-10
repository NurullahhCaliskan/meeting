<template>
  <div class="home">
    <h1>Meeting Page</h1>

    <v-text-field class="pa-3" v-model="newMeeting"
                  outlined
                  label="New Meeting"
                  append-icon="mdi-plus"
                  clearable
                  hide-details
                  @click:append="addNewMeeting"
                  @keyup.enter="addNewMeeting"

    ></v-text-field>
    <v-card>
      <v-list class="pt-0" flat>
        <div v-for="(item) in items" :key="item.id">

          <v-list-item @click="doneMeeting(item.id)" :class="{'blue lighten-5' :item.done}">
            <template v-slot:default="{active,}">
              <v-list-item-action>
                <v-checkbox :input-value="item.done" color="primary">
                </v-checkbox>
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title :class="{'text-decoration-line-through' : item.done}" v-text="item.text"></v-list-item-title>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon @click="deleteMeet(item.id)">
                  <v-icon color="red">mdi-delete</v-icon>
                </v-btn>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider></v-divider>

        </div>
      </v-list>
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'Meeting',

  data: () => ({
    selectedItem: 1,
    newMeeting: '',
    items: [
      {id: 1, text: 'Real-Time', done: false},
      {id: 2, text: 'Audience', done: false},
      {id: 3, text: 'Conversions', done: false},
    ],
  }),

  methods: {
    doneMeeting(id) {
      let meeting = this.items.filter(meet => meet.id === id)[0];
      meeting.done = !meeting.done;
    },
    deleteMeet(id) {
      this.items = this.items.filter(meet => meet.id !== id);
    },
    addNewMeeting() {
      let meet = {id: Date.now(), text: this.newMeeting, done: false}
      this.newMeeting = '';
      this.items.push(meet);
    }
  }
}
</script>
