document.addEventListener("deviceready", function() {
	var minutos = 0,
	segundos = 0,
	decimas = 0,
	comenzar = false,
	refrescar,
	verde = false,
	rojo = false,
	set;
	$("#boton_derecho").mouseout(function(){
		$("#boton_izquierdo").mouseout(function(){
			if(comenzar == false){
				cronometro();
				f_scramble();
				espera();
			}
		})
	});
	$("#boton_izquierdo").mouseout(function(){
			$("#boton_derecho").mouseout(function(){
			if(comenzar == false){
				cronometro();
				f_scramble();
				espera();
			}
		})
	});
	$("#boton_izquierdo").click(function(){
		$("#boton_derecho").click(function(){
			if(comenzar == true){
				clearInterval(refrescar);
				f_scramble();
			}
		});
	});
	$("#boton_derecho").click(function(){
			$("#boton_izquierdo").click(function(){
				if(comenzar == true){
					clearInterval(refrescar);
					f_scramble();
				}
		});
	});
	$("#reset").click(function(){
		$("#contador").val("00:00.00");
		decimas = 0;
		segundos = 0;
		minutos = 0;
		comenzar = false;
		clearInterval(refrescar);
		f_scramble();
	});
	function cronometro(){
			comenzar = true;
			 refrescar = setInterval(correr,0.00002);
			function correr(){
					decimas++;	
				$("#contador").val(f_minuto(minutos)+":"+f_segundo(segundos)+"."+f_decima(decimas));
				if(decimas>98){
					decimas = 0;
					segundos++;	
				}	
				if(segundos>58){
					segundos = 0;
					minutos++;
					
				}	
			}
			function f_minuto(minuto){
				var resul = "0"+minuto;
				if(minuto<10){
					resul;
				}else{
					resul = minuto;
				}
				return resul;
			}
			function f_segundo(segundo){
				var resul = "0"+segundo;
				if(segundo<10){
					resul;	
				}else{
					resul = segundo;
				}
				return resul;
			}
			function f_decima(decima){
				var resul = "0"+decima;
				if(decima<10){
					resul;	
				}else{
					resul = decima;
				}
				return resul;
			}	
	}
	function espera(){
		setInterval(function(){
			var i=0;
			i++;
			if(i==1){			
				$("#boton_rojo").css("-webkit-filter","brightness(2.8)");
			}
			if(i==3){				
				$("#boton_verde").css("-webkit-filter","brightness(1)");	
			}
		},700);
	}
	function f_scramble(){
		var math = Math.floor(Math.random() * (27-1+1)) + 1;
		var scramble;
		switch(math){
			case 1:
				scramble = $("#scramble").html("D' F' D' L2 B' F2 U2 L B F' L' R U2 B F' L");	
			break;		
			case 2:
				scramble = $("#scramble").html("U2 L' D U2 F' L' D' L' U2 F2 L R' B2 F R D");
			break;
			case 3:
				scramble = $("#scramble").html("D U2 R' F D' U L' R2 F2 L2 R B F2 D R B' F");
			break;
			case 4:
				scramble = $("#scramble").html("L' R F D' U2 F2 D2 R' F' L2 D2 U L R B' L");
			break;
			case 5:
				scramble = $("#scramble").html("D' U2 B D B L B2 R' D2 U R' B' F' D' B2 R");
			break;
			case 6:	
				scramble = $("#scramble").html("F L2 F L B F2 D2 B' F D2 U2 L' D' U' F B L'");
			break;
			case 7:
				scramble = $("#scramble").html("R2 U' R' U L' R' F R2 D' U' L' D2 U' B' F'");
			break;
			case 8:
				scramble = $("#scramble").html("D2 U B F' U B F' L' B L' R' U' B' U L R B2");
			break;
			case 9:
				scramble = $("#scramble").html("L' F R2 D B F' D2 B' D B' F2 L' F' L2 B2");
			break;
			case 10:
				scramble = $("#scramble").html("B2 D' U' L R D' U B' L R D2 B D' L U B' U2");
			break;
			case 11:
				scramble = $("#scramble").html("D' B2 D U' F L' D' L R2 D U' L2 F' U' F2 R'");
			break;
			case 12:
				scramble = $("#scramble").html("B D' B2 D' U2 L2 R' B2 F2 D U' B' F2 U' R'");
			break;
			case 13:
				scramble = $("#scramble").html("L' R2 D2 U R F L' D2 U' B F' R' D2 U' B2 D");
			break;
			case 14:
				scramble = $("#scramble").html("D U' F2 D2 R' B' F D' U2 B' L2 R2 B' L2 D");
			break;
			case 15:
				scramble = $("#scramble").html("D' U' L2 B' R D2 R' B2 L2 R' D U B2 D' U2");
			break;
			case 16:
				scramble = $("#scramble").html("U' B2 F2 L' F L U2 L R2 B' L2 F D' L R2 U");
			break;
			case 17:
				scramble = $("#scramble").html("L' R' D2 B F' L U' L' U' B2 F L R' F2 U D");
			break;
			case 18:
				scramble = $("#scramble").html("B' L' F D2 U L B F' L R D2 L R B' F' L2 B");
			break;
			case 19:
				scramble = $("#scramble").html("B' D2 U' L' R F' R2 B F L2 D' R2 F2 D' U'");
			break;
			case 20:
				scramble = $("#scramble").html("L2 R' F R B' D R D2 U' B2 F' D U2 L R B2");
			break;
			case 21:
				scramble = $("#scramble").html("B' F' D L B D' L D2 B2 L' R2 D B2 F2 D L'");
			break;
			case 22:
				scramble = $("#scramble").html("U' R2 D2 L B2 F D B2 R F D2 L B F2 U' D F");
			break;
			case 23:
				scramble = $("#scramble").html("B2 D2 F' D' U L2 R' B R2 U2 L D' B F D' U");
			break;
			case 24:
				scramble = $("#scramble").html("L' F' U2 B' R F2 L' R D' L' R2 F U' L2 F2");
			break;
			case 25:
				scramble = $("#scramble").html("U L B2 R U' F U' B' F' D2 F' L' U B2 F2 U'");
			break;
			case 26:
				scramble = $("#scramble").html("F2 L D U' L2 R' F2 D U B' F' R F D R2 U2 L");
			break;
			case 27:
				scramble = $("#scramble").html("L B U B2 D2 B2 F2 U2 F2 L D F' L R D2 F ");
			break;
			case 28:
				scramble = $("#scramble").html("D' L' R2 B' F2 L' B2 F L2 U2 R' U L' D2 U");
			break;
			case 29:
				scramble = $("#scramble").html("R U B F' U2 L2 R2 B2 F U L2 U2 B2 L B2 D U2");
			break;
			case 30:
				scramble = $("#scramble").html("U2 R2 B2 F2 D' U2 L' R D2 B2 F2 L2 B' L2 F2");
			break;
		}
		return scramble;
	}
				f_scramble();
});
//entre 25 y 75
//Math.floor(Math.random() * (75-25+1)) + 25;
