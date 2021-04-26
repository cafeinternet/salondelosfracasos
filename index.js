   
//    $(document).ready(function() {

  

   var adj = [
        'Miradas', 'Clandestinas',
        'Curiosity', 'Mars',
        'Topografías', 'humanas',
        'Officina' ,'acontecimientos',
        'sospecha','simbólica',
        'UBIQUE',
        'LA TERRAZA',
        'EL TRANSEUNT',
        'URBANO', 'LOS MIGRANTES' ,
        'BOGOTÁ WITNESS',
        'LAZOS DE CHAPINERO',
        'CHIQUITA BURGER',
        'DEAMBULACIÓN',
        'INSTANTÁNEA' ,
        'DESDE LA OTRA ESQUINA',
        'LO INTERMINABLE',
        'TEJIDOS ESPORÁDICOS',
        'DOBLE', 'VIA.',' MEDELLIN', ' CARACAS', 'DE LA CIUDAD', 'EL HUMO' ,'TRAS CONTUNDENCIAS',		
        'LA RIQUEZA COLOMBIANA		',
        'SEIS INTERVENCIONES PARA ESPACIOS DOMESTICOS Y DE INTERES CULTURAL',		
        'PINTANDO POR LA PAZ		',
        'EXPOSICION FOTOGRAFICA DE AVES Y PAISAJES EN PARQUES NATURALES DE',		
        'MONTENEGRO ARTE S.A.S		',
        'ORO Y PLATA		',
        'ALTERIDADES Y DICOTOMIAS		',
        'ALTERIDADES Y DICOTOMIAS		',
        'ICONOGRAFIA LENGUAJE VISUAL		',
        'SOY MUJER		',
        'PRESENCIA EN LA AUSENCIA		',
        'DESEMPOLVARTE		',
        'CIRCULO COMPLETO		',
        'DESPUES DE TODO		',
        'LA PRIMERA CAVERNA OPITECUSTATACOENSIS		',
        'VILLAGES OF GUADUAS, ESCENA DE MERCADO		',
        'ESPECTRO		',
        'IGNOTO		',
        'MOUSTROS		',
        'PINTANDO POR LA PAZ		',
        'ORO Y PLATA		',
        'ALTERIDADES Y DICOTOMIAS		',
        'ESPEJOS ALUCINADOS		',
        'LA RIQUEZA COLOMBIANA		',
      
        ,'VAPOR		',
        'MEMENTO ENSAYOS SOBRE IDENTIDAD Y MEMORIA		',
        'DE PUERTAS PARA AFUERA		',
        'SI UN TIGRE ENTRARA EN ESTE CUARTO		',
        'SONRISAS DE YESO		',
        'L MIRADA IMAGINADA IMAGEN MIRADA		',
        'REMINICENCIAS		',
        'NOCIONES SOBRE EL ESPACIO DOMESTICO PRODUCCION FORMAS DE VIDA APROPIACION Y REPRESENTACION',		
        'Y COMIENZO AQUI...	',	
        'CARTOGRAFIA PARA EL PROGRESO',		
        'COMISION CRONOGRAFICA		',
        'ESPACIOLOGIA		',
        'DESCONOCIDO		',
        'RETROVISOR		',
        'PROYECTO DE ILUSTRACION VOLI LOS NO LUGARES	 ',	
        'EL NIDO DEL FRANCOTIRADOR	',	
        'PROYECTO FRAGMENTOS PARA MAÑANA',		
        'VITREUS		',
        'L ASUMIR LAS SANGRES 		',
      
        'ASAMBLEA ORDINARIA		',
        'LA PRODUCCIÓN DE LO PUBLICO',		
        'ENTELEQUIAS		',
        'EL PROCESO COMO OBRA DE ARTERELACIONAL', 		
        'PROYECTO BALAZO		',
        'SABOR DEL BARRIO		',
        'MAS AGUA MAS VIDA		',
        'LA RIQUEZA COLOMBIANA		',
        'ESTILO CALLEJERO		',
        'EL ALQUIMISTA		',
        'ENTELEQUIAS 		',
      
        'ALISIOS		',
        'ESPACIOS VACÍOS: LA CONSTRUCCIÓN DEL CUERPO',		
        'BACTERIOGRAFÍA: MICROHISTORIAS VIVAS',		
        'TRA(S)DUCCIONES		',
        'FOMENTO DE LAS ARTES PLASTICAS Y VISUALES',		
        'AMBULANTE		',
        'ABRAZAR LO INVISIBLE		',
     
        'Miradas Clandestinas		',
        'Curiosity Mars		',
        'Topografías humanas		',
        '"Officina (acontecimientos ',
        'en sospecha simbólica)"	',	
       
        'UBIQUE		',
        'LA TERRAZA		',
        'EL TRANSEUNT		',
        '"CREACIÓN DE LA ESCUELA DE ARTE ',
        'URBANO LOS MIGRANTES"		',
        'BOGOTÁ WITNESS		',
        'LAZOS DE CHAPINERO		',
        'CHIQUITA BURGER		',
        '"‘DEAMBULACIÓN ',
        'INSTANTÁNEA"		',
        'MAMA		',
        'DESDE LA OTRA ESQUINA		',
        'LO INTERMINABLE		',
        'TEJIDOS ESPORÁDICOS		',
      
        ];
        
        var fonts = [
    'font1',
'font2',
'font3',
'font4',
'font5',
'font6',
'font7',
'font8',
'font9',
'font10',
'font11',
'font12',   
'font13',        
'font14',
'font15',
'font16',
'font17'    ]



var wallpapers = [
'wall1',
'wall2',
'wall3',
'wall4',
'wall5',
'wall6',
'wall7',
'wall8',
    'wall9'
]
        
        var getAdjective = function() {
        return adj[Math.floor(Math.random() * adj.length)];
        };
        var getFont = function() {
        return fonts[Math.floor(Math.random() * fonts.length)];
        };
        var getWall = function() {
            return wallpapers[Math.floor(Math.random() * wallpapers.length)];
            };
        
    

        $(document).ready(function(){
            $("#iransans").click(function(){
                $('#page').html(getAdjective());
                $("#page").removeClass().addClass(getFont()); 
                $("#iransans").removeClass().addClass(getWall()); 
                console.log(getFont())
            });
        });

