Vue.component('formulario', {
    template:`
    <div class="card">
        <div class="card-body">
            <div class="form-group">
                <label for="">Usuario</label>
                <input type="text" class="form-control" v-model="value_nombre" @keyup.enter="cambiar_nombre(value_nombre)">
                <button class="btn bg-warning mt-2" @click="cambiar_nombre(value_nombre)">Aceptar</button>
            </div>
        </div>
    </div>
    `,
    data(){
        return {
            value_nombre: 'AndyGeek'
        }
    },
    computed:{
        ...Vuex.mapState(['nombre'])
    },
    methods:{
        ...Vuex.mapMutations(['cambiar_nombre'])
    }
})