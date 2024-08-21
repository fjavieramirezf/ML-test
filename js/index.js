var app = new Vue({
    el: '#inicio',
    data: {
        entrar: _data.diccionario.entrar,
        inicio:false,
        showbutton:false,
        showp:false
    },
    computed:{
        pantalla: function() {return _data.pantallas.inicio},
        personajes: function() {return this.pantalla.personajes},
        fondo: function () {
            return {
                backgroundColor: "white",
                backgroundImage: "url(assets/" + this.pantalla.fondo + ")"
            };
        },
        titulo: function() {return this.pantalla.titulo},
        subtitulo:function() {return this.pantalla.subtitulo},
    },
    methods: {
        siguiente: function (event) {
            this.showp=false;
            this.inicio=false;
        },        
        afterSlideEnter:function(el){
            //console.log("after slide enter");
            this.showbutton=true;
            this.showp=true;
            this.credits=true;
           
        },
        beforeSlideLeave:function(el){
            //console.log("before slide leave");
        },
        afterSlideLeave:function(el){
            //console.log("after slide leave");
            location.href = 'contenido.html';
        },
        afterButtonEnter:function(el){
            $(".btn").removeClass("slide-in-bottom").addClass("animated pulse infinite");
        }

    },
    mounted: function () {
        this.$nextTick(function () {
            this.inicio=true;
        })
    }
});