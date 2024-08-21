var positive = new Howl({
    src: ["audio/success.mp3"],
    html5: true
});
var negative = new Howl({
    src: ["audio/failure.mp3"],
    html5: true
});
var finalizado = new Howl({
    src: ["audio/finished.mp3"],
    html5: true
});
var app = new Vue({
    el: '#contenido',
    data: {
        entrar: _data.diccionario.actividad,
        diccionario:_data.diccionario,
        inicio:false,
        showbutton:false,
        mostrar:false,
        modal1:false,
        modal2:false,
        dataModal:{},
        activo:false,
        index:0,
    },
    computed:{
        pantalla: function() {return _data.actividad},
        personajes: function() {return this.pantalla.personajes},
        opciones:function() {return this.pantalla.opciones},
        retroalimentacion:function(){return this.pantalla.modal1.texto},
        fondo: function () {
            return {
                backgroundColor: "white",
                backgroundImage: "url(assets/" + this.pantalla.fondo + ")"
            };
        },
    },
    methods:{
        cerrarmodal(){
            if(this.modal1){
                this.modal1=false;
                this.reiniciar();
            }
            this.modal2=false;
        },
        reiniciar(){
            $("main#contenido").fadeOut("slow",()=>{
                window.location="index.html";  
            })
        },
        respuesta(value){
            if(this.opciones[this.index].esverdadero==value){
                $(`.btn[tipo='${value}']`).addClass("verdadero");
                setTimeout(()=>{
                    $(`.btn[tipo='${value}']`).removeClass("verdadero");
                },2000);
                positive.play();
                this.mostrar=false;
            } else {
                negative.play();
                $(`.btn[tipo='${value}']`).addClass("falso");
                setTimeout(()=>{
                    $(`.btn[tipo='${value}']`).removeClass("falso");
                },2000);
                this.modal2=true;
            }
        },
        cambiaafirmacion(){
            if(this.index<this.opciones.length-1){
                this.index++;            
                this.mostrar=true;   
            } else {
                this.modal1=true;
                finalizado.play();
            }
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            this.mostrar=true;
        })
    }
});