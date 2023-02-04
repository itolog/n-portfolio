import {createVuetify} from "vuetify";
import {aliases, fa} from "vuetify/iconsets/fa";
import {mdi} from "vuetify/lib/iconsets/mdi";

import "@mdi/font/css/materialdesignicons.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        icons: {
            defaultSet: "fa",
            aliases,
            sets: {
                mdi,
                fa
            }
        },
    });

    nuxtApp.vueApp.use(vuetify);
});