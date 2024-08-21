
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
        inicio:false,
        showbutton:false,
        showp:false,
        elementos:_data.pantallas.subactividad.elementos,
        vistos:[],
        modal1:false,
        modal2:false,
        dataModal:{},
        activo:false
    },
    computed:{
        pantalla: function() {return _data.pantallas.subactividad},
        bloques: function() {return this.shuffleArray(this.pantalla.bloques)},
        retroalimentacion:function(){return this.pantalla.retroalimentacion},
        fondo: function () {
            return {
                backgroundColor: "white",
                backgroundImage: "url(assets/" + this.pantalla.fondo + ")"
            };
        },
    },
    methods:{        
        cerrarmodal(){
            this.modal1=false;
            $("main").fadeOut("slow", () => {
                window.location = "actividad.html";
            });
        },
        activateDD: function () {
            $(".boton")
                .draggable({
                    containment: "#contenido",
                    cursor: "dragging",
                    revert: true
                });
            $(".droparea").droppable({
                accept: ".boton",
                hoverClass: "hovered",
                drop: this.handleDrop
            });
        },
        handleDrop: function (event, ui) {
            var draggable = $(ui.draggable);
            _thistype = $(event.target).attr("data-name");
            _draggabletype = $(draggable).attr("data-name");
            console.log(_thistype, _draggabletype);
            $(draggable).removeClass("bueno malo");
            if (_thistype != _draggabletype) {
                $(draggable).addClass("malo");
                negative.play();
            } else {
                $(draggable).addClass(_draggabletype).addClass("bueno");
                positive.play();
            }
            this.validateComplete();
        },
        validateComplete(){            
            setTimeout(()=>{
                $(".boton").removeClass("malo");
                if($(".boton.bueno").length==this.bloques.length){
                    //abrir modal1
                    this.modal1=true;
                    if(!finalizado.playing()){
                        finalizado.play();
                    };
                }   
            },2000);
        },
        shuffleArray(array, iterations = 10) {
            for (let k = 0; k < iterations; k++) {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
            }
            return array;
        },
    },
    mounted: function () {
        this.$nextTick(function () {
            this.inicio=true;
            this.activateDD();
        })
    }
});