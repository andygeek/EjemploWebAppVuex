Vue.component('pie_pagina',{
    template:`
    <div class="bg-dark p-4 font-weight-light">
        <div class="container">
            <div class="row text-white">
                <div class="col-md-4">
                    <div class="d-flex justify-content-center py-2">Sobre esta web</div>
                    <div class="d-flex justify-content-center py-2">Proyecto App</div>
                </div>
                <div class="col-md-4">
                    <div class="d-flex justify-content-center py-2">Sobre mi</div>
                    <div class="d-flex justify-content-center py-2"><strong>{{nombre}}</strong></div>
                </div>
                <div class="col-md-4">
                    <div class="d-flex justify-content-center py-2">Mis aplicaciones</div>
                    <div class="d-flex justify-content-center py-2">VueJs</div>
                </div>
            </div>
        </div>
    </div>

    `,
    computed:{
        ...Vuex.mapState(['nombre'])
    }
})