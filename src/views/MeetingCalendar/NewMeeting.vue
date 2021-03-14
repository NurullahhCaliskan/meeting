<template>
  <v-row >
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
    >
      <v-card>
        <v-card-title >
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                  cols="12"
              >
                <v-text-field
                    label="Meeting Header*"
                    required
                    hint="For example: Facebook Sales, Office chairs, find new CFO..."
                ></v-text-field>
              </v-col>
              <v-col cols="12" align-self="center">
                  <label> Select meeting datetime*</label>
                  <el-date-picker
                      range-separator="-"
                      clearable
                      v-model="value1"
                      type="datetimerange"
                      start-placeholder="Start Date"
                      end-placeholder="End Date"
                      :default-time="['12:00:00']">
                  </el-date-picker>
              </v-col>

            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    value1:''
  }),
}
</script>