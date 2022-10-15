const app = new Vue({
	el: '#app',
	data: {
		//fondo: 'bg-warning',
		//color: false,

		titulo: 'CRUD con Vue',
		tarea: [],
		nuevaTarea: ''
	},
	methods: {
		agregarTarea: function (){
			this.tarea.push({
				nombre: this.nuevaTarea,
				estado: false
			});
			this.nuevaTarea='';
		},
		editarTarea: function (index) {
			console.log('pasa');
			this.tarea[index].estado = true;
		},
		eliminar: function (index) {
			this.tarea.splice(index,1);
		}
	}
})