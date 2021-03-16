import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        meetingTypeList: [
            {id: 1, text: 'Very Important', color: '#FF0000'},
            {id: 2, text: 'Emergency', color: '#FFA500'},
            {id: 3, text: 'Normal', color: '#800080'},
            {id: 4, text: 'Not Important', color: '#808080'},
            {id: 5, text: 'Meeting', color: '#0000FF'}
        ],
        meetingEvents: []
    },
    mutations: {
        addMeetingType(state, data) {
            state.meetingTypeList.push(data);
        },
        deleteMeetingType(state, data) {
            state.meetingTypeList = data;
        },
        addMeetingEvent(state, data){
            state.meetingEvents.push(data);
        }
    },
    actions: {},
    modules: {}
})
