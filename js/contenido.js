var app = new Vue({
    el: '#contenido',
    data: {
        entrar: _data.diccionario.actividad,
        inicio: false,
        showbutton: false,
        showp: false,
        elementos: _data.pantallas.contenido.elementos,
        vistos: [],
        visibles: [],
        modal1: false,
        modal2: false,
        dataModal: {},
        activo: false,
        current: -1,
        isrefresh:false,
    },
    computed: {
        pantalla: function () { return _data.pantallas.contenido },
        personajes: function () { return this.pantalla.personajes },
        botones: function () { return this.pantalla.botones },
        retroalimentacion: function () { return this.pantalla.modal1.texto },
        fondo: function () {
            return {
                backgroundColor: "white",
                backgroundImage: "url(assets/" + this.pantalla.fondo + ")"
            };
        },
    },
    methods: {
        getVisible(ind){
            return this.visibles[ind];
        },
        abrir(ind) {
            if(this.current>-1){
                return;
            }
            if (!this.vistos.includes(ind)) {
                this.vistos.push(ind);
                if (this.vistos.length == this.botones.length) {
                    this.activo = true;
                }
            }
            this.visibles[ind] = false;
            this.isrefresh=!this.isrefresh;
            this.current = ind;
            this.dataModal = this.botones[ind].modal;
            this.dataModal.tipo = this.botones[ind].categoria;
        },
        abrirmodal2() {
            this.modal2 = true;
        },
        cerrarmodal() {
            if (this.modal1) {
                this.modal1 = false;
            }
            if (this.modal2) {
                this.modal2 = false;
                this.visibles[this.current] = true;
                this.current = -1;
            }
        },
        cerradomodal2() {
            this.isrefresh=!this.isrefresh;
        },
        preactividad() {
            if (this.activo) {
                $("main#contenido").fadeOut("slow", () => {
                    window.location = "preactividad.html";
                })
            }
        }
    },
    beforeMount: function () {
        
    },
    mounted: function () {
        this.$nextTick(function () {
            this.visibles = _data.pantallas.contenido.botones.map(boton => true);
            this.inicio = true;
            this.showp = true;
            this.modal1 = true;
        })
    }
});