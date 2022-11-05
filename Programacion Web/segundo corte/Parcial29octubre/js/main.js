const app = new Vue({
	el: '#app', data: {
		titulo: 'Johs Brayan Salinas López',
		empleados: [],
		cedula: '',
		nombre: '',
		apellidos: '',
		estadoCivil: '',
		contador: 0,
		color: 'bg-success'
	}, methods: {
		agregarEmpleado: function () {
			let seleccionado = this.$refs.seleccionado.value
			this.empleados.push({
				ced: this.cedula, nom: this.nombre, apelli: this.apellidos, estCivil: seleccionado, estado: false
			});
			localStorage.setItem('empleados', JSON.stringify(this.empleados));
		}, editarTarea: function (index) {
			this.empleados[index].estado = true;
			localStorage.setItem('empleados', JSON.stringify(this.empleados));
		}, eliminar: function (index) {
			this.empleados.splice(index, 1);
			localStorage.setItem('empleados', JSON.stringify(this.empleados));
		}, change: function (valor) {
			if (valor < 20) this.color = 'bg-success'; else if (valor < 50) this.color = 'bg-warning'; else this.color = 'bg-danger';
		}, aumentar: function (e) {

			if (this.contador < 100) this.contador++;
			return this.change(this.contador);
		}, disminuir: function (e) {
			if (this.contador > 0) this.contador--;
			return this.change(this.contador);
		},


	}, created: function () {
		let datosDb = JSON.parse(localStorage.getItem('empleados'));
		if (datosDb === null) this.empleados = []; else this.empleados = datosDb;
	}
})