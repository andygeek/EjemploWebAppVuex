Vue.component('card',{
    template:`
    <div class="card mb-4">
        <div class="card-header">
            <h3>Fotos de {{nombre}}</h3>
        </div>
        <img src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?$MO_masthead-property-mobile$" alt="imagen" class="w-100">
        <div class="card-footer">
            <p>{{nombre}} encontro esta imagen en interne y decidio colocarlo en este ejemplo ya que no le importa los derechos de autor ni nada por el estilo. Yo discrepe con él pero él casi nunca hace caso a su consciencia.</p>
        </div>
    </div>
    `,
    computed:{
        ...Vuex.mapState(['nombre'])
    }
})