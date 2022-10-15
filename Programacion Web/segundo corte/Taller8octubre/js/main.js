const app = new Vue({
	el: '#app',
	data: {
		titulo: ' Hola Mundo',
		equipos: [{nombre: 'Nacional', Ciudad: 'Medellin', puntos:9},
			{nombre: 'Bucaramanga',Ciudad: 'Bucaramanga', puntos: 7},
			{nombre: 'America', Ciudad: 'Cali', puntos: 4},
			{nombre: 'Junior', Ciudad: 'Barranquilla', puntos: 1}
		],
		nuevoEquipo: ''
	},
	methods:{
		agregarEquipo(){
			this.equipos.push({
				nombre: this.nuevoEquipo,ciudad: 'prueba', puntos: 8
			})
			this.nuevoEquipo='';
		}
	},
	computed:{
		sumarPuntos(){
			this.total=0;
			for (equipos of this.equipos)
				this.total += equipos.puntos
			return this.total;
		}
	}
})