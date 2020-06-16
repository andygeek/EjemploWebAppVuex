Vue.component('my-menu',{
    template:`
    <div id="accordion">
        <div class="card">
            <item-menu :envio="nombre" :codigo="'1'"></item-menu>
            <item-menu :envio="'Sobre mi'" :codigo="'2'"></item-menu>
        </div>
    </div>
    `,
    computed:{
        ...Vuex.mapState(['nombre'])
    }
})