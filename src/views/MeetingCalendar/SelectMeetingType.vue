<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Edit Meeting Type</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Meeting Type Name" required hint="For example: Important, Emergency ...">

              </v-text-field>
            </v-col>
            <v-col cols="12">
              <label> Select meeting datetime*</label>
              <v-color-picker v-model="color">
              </v-color-picker>
            </v-col>
            <v-col cols="12">
              <small>*indicates required field</small>
            </v-col>
            <v-col cols="12">
              <v-btn class="align-content-lg-center" text color="red">
                Add
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <!-- List meeting type-->
        <v-card>
          <v-list class="pt-0" flat>
            <div v-for="(item) in meetingTypeList" :key="item.id">

              <v-list-item>
                <v-list>
                  <v-btn icon>
                    <v-icon :color='item.color'>mdi-palette-outline</v-icon>
                  </v-btn>
                </v-list>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon @click="deleteMeet(item.id)">
                    <v-icon :color='item.color'>mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>

              <v-divider></v-divider>

            </div>
          </v-list>
        </v-card>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    value1: '',
    color: '',
    meetingTypeList: [
      {id: 1, text: 'Very Important', color: '#FF0000'},
      {id: 2, text: 'Emergency', color: '#FFA500'},
      {id: 3, text: 'Normal', color: '#800080'},
      {id: 4, text: 'Not Important', color: '#808080'},
      {id: 5, text: 'Meeting', color: '#0000FF'}
    ]
  }),

  methods: {
    deleteMeet(id) {
      this.meetingTypeList = this.meetingTypeList.filter(meet => meet.id !== id);
    },
  }
}
</script>