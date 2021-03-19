<template>
  <v-row>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
              <v-col cols="12">
                <v-text-field v-model.trim="$v.header.$model"
                              label="Meeting Header*"
                              required
                              hint="For example: Facebook Sales, Office chairs, find new CFO..."
                ></v-text-field>
                <v-chip class="error" v-if="addNewMeeting && !$v.header.required">Field is required</v-chip>
                <v-chip class="error" v-if="addNewMeeting && !$v.header.minLength">Name must have at least {{ $v.header.$params.minLength.min }} letters.</v-chip>

              </v-col>
              <v-col cols="12">
                <label class="d-flex justify-center"> Select meeting datetime*</label>
                <div class="d-flex justify-center">
                <el-date-picker
                    range-separator="-"
                    clearable
                    v-model="selectDate"
                    type="datetimerange"
                    start-placeholder="Start Date"
                    end-placeholder="End Date"
                    :default-time="['12:00:00']">
                </el-date-picker>
                </div>
                <br>
                <v-chip class="error" v-if="addNewMeeting && !validDate()">Please select date.</v-chip>

              </v-col>

              <v-col>
                <v-card>
                  <v-list class="pt-0" flat>
                    <div v-for="(item,index) in $store.state.meetingTypeList" :key="item.id">

                      <v-list-item>
                        <v-radio-group v-model="selectMeetingType">
                          <v-radio :value="item.id"></v-radio>
                        </v-radio-group>
                        <v-list-item-title v-ripple v-text="item.text"></v-list-item-title>
                        <v-icon :color='item.color'>mdi-palette-outline</v-icon>
                      </v-list-item>

                      <v-divider></v-divider>

                    </div>
                  </v-list>
                </v-card>
              </v-col>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close"> Close</v-btn>
          <v-btn color="blue darken-1" text @click="save">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import {minLength, required} from "vuelidate/lib/validators";

export default {
  mounted() {
    this.selectMeetingType = this.$store.state.meetingTypeList[0].id;
  },
  data: () => ({
    dialog: false,
    header: '',
    selectDate: '',
    selectMeetingType: null,
    addNewMeeting: false,
  }),

  methods: {
    save() {
      this.addNewMeeting = true;
      if (!this.$v.$invalid && this.validDate()) {
        const min = new Date(this.selectDate[0]);
        const max = new Date(this.selectDate[1]);

        this.$store.commit('addMeetingEvent', {
          name: this.header,
          start: min,
          end: max,
          color: this.$store.state.meetingTypeList.find(item => item.id === this.selectMeetingType).color,
          timed: true,
        });

        this.refresh();
      }
    },
    close() {
      this.refresh();
    },
    refresh() {
      this.dialog = false;
      this.header = '';
      this.selectDate = ['',''];
      this.selectMeetingType = 0;
      this.addNewMeeting= false;
    },

    validDate(){
      return !(new Date(this.selectDate[0]).toString() === 'Invalid Date' || new Date(this.selectDate[1]).toString() === 'Invalid Date');
    }
  },
  validations: {
    header: {
      required,
      minLength: minLength(4)
    },
  }
}
</script>