<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Edit Meeting Type</span>
      </v-card-title>
      <v-card-text :class="{ 'form-group--error': $v.name.$error }">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model.trim="$v.name.$model" label="Meeting Type Name" required hint="For example: Important, Emergency ...">

              </v-text-field>
              <v-chip class="error" v-if="addNewMeetingType && !$v.name.required">Field is required</v-chip>
              <v-chip class="error" v-if="addNewMeetingType && !$v.name.minLength">Name must have at least {{ $v.name.$params.minLength.min }} letters.</v-chip>
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
              <v-btn class="align-content-lg-center" text color="red" @click="save">
                Add
              </v-btn>
            </v-col>
            <v-chip class="error" v-for="(item,index) in addMeetingTypeStatus" :key="index">{{ item }}</v-chip>
          </v-row>
        </v-container>
        <!-- List meeting type-->
        <v-card>
          <v-list class="pt-0" flat>
            <div v-for="(item) in $store.state.meetingTypeList" :key="item.id">

              <v-list-item>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                  <v-icon :color='item.color'>mdi-palette-outline</v-icon>
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
        <v-btn color="blue darken-1" text @click="close"> Close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import {required, minLength, between} from 'vuelidate/lib/validators'

export default {

  data: () => ({
    name: '',
    addMeetingTypeStatus: [],
    addNewMeetingType: false,
    dialog: false,
    color: ''
  }),

  methods: {
    deleteMeet(id) {
      this.$store.commit('deleteMeetingType', this.$store.state.meetingTypeList.filter(meet => meet.id !== id))
    },

    save() {
      this.addMeetingTypeStatus = [];
      this.addNewMeetingType = true;
      this.$v.$touch();

      this.$store.state.meetingTypeList.find(item => item.text === this.name) !== undefined ? this.addMeetingTypeStatus.push('Name must be unique') : undefined;
      this.$store.state.meetingTypeList.find(item => item.color === this.color) !== undefined ? this.addMeetingTypeStatus.push('Color must be unique') : undefined;

      if (this.addMeetingTypeStatus.length === 0 && !this.$v.$invalid) {
        this.$store.commit('addMeetingType', {id: Date.now(), text: this.name, color: this.color});
      }
    },
    close() {
      this.refresh();
    },
    refresh() {
      this.name = '';
      this.addMeetingTypeStatus = [];
      this.addNewMeetingType = false;
      this.dialog = false;
      this.color = '';
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
  }
}
</script>