import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);
import { Ripple } from 'vuetify/lib/directives'
export default new Vuetify({
    directives: {
        Ripple
    }
});
