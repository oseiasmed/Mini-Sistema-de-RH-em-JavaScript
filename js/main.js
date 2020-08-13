
document.getElementById('formulario').addEventListener('submit', cadastrarFuncionario);
function cadastrarFuncionario(e){
	
	var nomeFuncionario = document.getElementById('nomeFuncionario').value;
	var salario = document.getElementById('salario').value;
	var contaBancaria = document.getElementById('contaBancaria').value;
	alert("Funcionário cadastrado com sucesso")

	if(!nomeFuncionario && !salario && !contaBancaria){
		
		alert("Preencha todos os campos!");
		return false;
	} 

	var funcionario = {
		nome: nomeFuncionario,
		salarioFuncionario: salario,
		contaBancaria:contaBancaria
	};

	if(localStorage.getItem('arquivos') === null){
		var funcionarios = [];
		funcionarios.push(funcionario);
		localStorage.setItem('arquivos', JSON.stringify(funcionarios));
	} else {
		var funcionarios = JSON.parse(localStorage.getItem('arquivos'));
		funcionarios.push(funcionario);
		localStorage.setItem('arquivos', JSON.stringify(funcionarios));
	}

	document.getElementById('formulario').reset();

	mostrarStorage();

	e.preventDefault();
}

function removeData(salarioFuncionario){
	var arquivos = JSON.parse(localStorage.getItem('arquivos'));
	console.log(arquivos);

	 for(var i = 0 ; i < arquivos.length; i++){
		if(arquivos[i].salarioFuncionario == salarioFuncionario){
			arquivos.splice(i, 1);
		}
	}

	localStorage.setItem('arquivos', JSON.stringify(arquivos));

	mostrarStorage();
}

function 
mostrarStorage(){
	var funcionarios = JSON.parse(localStorage.getItem('arquivos'));
	var arquivosResultado = document.getElementById('resultados');

	arquivosResultado.innerHTML = '';

	for(var i = 0; i < funcionarios.length; i++){
		var nome = funcionarios[i].nome;
		var salarioFuncionario = funcionarios[i].salarioFuncionario;
		var contaBancaria = funcionarios[i].contaBancaria
		 arquivosResultado.innerHTML += '<tr><td>'+ nome + '</td>'+
		 							 	  '<td>'+ salarioFuncionario + '</td>' +
		 							 	  '<td>'+ contaBancaria + '</td>' +
		 							 	  '<td><button onclick="removeData(\''+ salarioFuncionario +'\')" class="btn btn-warning">Editar</button></td>'+
		 							 	  '<td><button onclick="removeData(\''+ salarioFuncionario +'\')" class="btn btn-danger">Remover</button></td>'+
		 							 '</tr>';
	}
}


