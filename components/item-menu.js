Vue.component('item-menu',{
    template:`
    <div>
        <div class="card-header">
            <button class="btn" data-toggle="collapse" :data-target="'#item' + codigo">
               <strong>{{envio}}</strong>
            </button>
        </div>
        <div :id="'item' + codigo" class="collapse">
            <div class="card-body">
                Este es un texto de ejemplo, me dio mucha pereza buscar algo en internet.
            </div>
        </div>
    </div>
    `,
    props: ['envio', 'codigo']
})