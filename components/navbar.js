Vue.component('navbar',{
    template:`
        <div class="navbar navbar-dark bg-dark">
            <div class="container">
                <div class="navbar-brand">
                    <a href="#" class="navbar-brand""><strong>{{nombre}}</strong></a>
                </div>
            </div>
        </div>
    `,
    computed:{
        ...Vuex.mapState(['nombre'])
    }
})