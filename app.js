
const almacen = new Vuex.Store({
    state: {
        nombre: 'AndyGeek'
    },
    mutations: {
        cambiar_nombre: function (state, texto) {
            state.nombre = texto
        }
    }
});

new Vue({
    el: '#app',
    store: almacen,
})