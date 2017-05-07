/**
 * AsignaturaController
 *
 * @description :: Server-side logic for managing Asignaturas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function (req,res){
        var params = req.params.all();
        if (params.estudiantes.length > 0) {
            if (!EstudianteService.insertarEstudiantesAsignaturaCreada(params.estudiantes)){
                sails.log.debug("error al insertar estudiantes");
            }
            else{
                sails.log.debug("Estudiantes de la asignatura insertados como estudiantes");
            }
        }
        if ((params.monitores) && (params.monitores.length > 0)) {
            if (!MonitorService.insertarMonitorAsignaturaCreada(params.monitores)){
                sails.log.debug("error al insertar monitores");
            }
            else{
                sails.log.debug("Monitores de la asignatura insertados como monitores");
            }
        }
        Asignatura.create(params, function(err,asignatura){
            if (err) return next(err);
            res.status(200);
            res.json(asignatura);
        });
    },

    agregarPregunta: function(req,res,next){
        var params = req.params.all();        
        sails.log.debug("hola "+ params.nombreAsignatura);
        Asignatura.findOne({nombre: params.nombreAsignatura}).populate('preguntas').populate('estudiantes').exec(function(err, asignatura) {
            if(typeof asignatura !== 'undefined' && asignatura){
                sails.log.debug("adentro " + asignatura.estudiantes );
                if (err) return next(err);

                Estudiante.findOne({id:params.estudiante}).exec(function(err,estudiante){
                    if (err) return next(err);
                    Pregunta.create(params.pregunta,function(err,pregunta){
                        if (err) return next(err);
                        
                    });
                
                });

              /*  asignatura.preguntas.add(pregunta);
                        res.json(params.estudiante);   
                        asignatura.save(function(err){
                            if(err){
                            res.json(ResponseService.CrearResponse(err,null,"ocurrio un error"));   
                            } 
                            else{
                                res.json(ResponseService.CrearResponse(params.pregunta,asignatura,"ocurrio un error"));   
                            }                    
                        });*/
                
                
                /*if (asignatura.estudiantes.length > 0){
                    sails.log.debug(" voy a if de id");
                    if (Asignatura.estudianteEnAsignatura(params.pregunta.estudiante.id,asignatura.estudiantes)) {
                        if(Asignatura.insertarPregunta(params.pregunta,asignatura != null)){
                            res.json(ResponseService.CrearResponse(true,asignatura,""));
                        }
                        else{
                         res.json(ResponseService.CrearResponse(false,null,"ocurrio un error"));   
                        }
                    }
                    else{
                        var response = {

                        }
                         res.json(ResponseService.CrearResponse(false,null,"Es estudiante no pertenice a la asignacion"));
                    }
                }  */ 
            }
           /* for (i = 0; i < asignatura.estudiantes.length; i++){
                sails.log.debug("for");
                 
                /*if (params.estudiante.id == asignatura.estudiantes[i].id) {
                    sails.log.debug("if");
                    sails.log.debug("estudiante "+ params.estudiante.id + " asignatura " +  asignatura.estudiantes[i].id);
                    asignatura.preguntas.push(params.pregunta);
                    asignatura.save(function(err){
                        if(error) return next(error);
                        res.json(asignatura);
                    })
                    break;
                }
            }     */       
        });
    }
};

