Vue.component('mensaje',{
    template:`
    <div class="jumbotron">
        <h1 class="display-4">Hola {{nombre}}!</h1>
        <p class="lead">Hola este es el proyecto final del tutorial de Vuex. Esta web esta llena de componentes Vuejs los cuales tienen un nombre que se obtine a partir de un dato global usando Vuex. Podemos ver como este nombre se cambia en todos los componentes cuando lo cambiamos usando el formulario de la parte izquierda.</p>
    </div>
    `,
    computed:{
        ...Vuex.mapState(['nombre'])
    }
});

