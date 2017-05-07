# Monitores
proyecto backend con sails 

Este proyect me ayudo a conocer y comprender muchas nociones del framework Sails js.
Sail js es un excelente framework para trabajar, ayuda al programador a desarrollar un backend de forma rapida y sencilla, y se puede conectar rapidamente con una base de datos.

Este proyecto fue creado solo con la parte de backend  - sails new Monitores --no-frontend - . Se utilizo para la persistencia
mongoDB. Se aprendieron y se pusieron en práctica las nociones de Servicios para realizar porcesamientos de informacion en los controllers. De igual forma utilizaron metodos de los mismo modelos para procesamiento de la informacion del modelo en si, siguiendo el principio de 
Responsabilidad simple.

Se cometiron errores al crear los modelos, como por ejemplo al crear el atributo Estudiante en el modelo Pregunta, se coloco
type: 'estudiante' en vez de model: 'estudiante' (ya que era una relacion uno a uno), en el caso de crear colecciones se hizo de manera correcta.

Para el diseño de la base de datos, se tomo la premisa que se pude leer en el pdf que muestra los modelos de la BD, tanto SQL como NoSQL, perso 
solo se implemento el modelo NoSQL.

Este proyecto es un inicio en el mundo de los Backend en nuevas tecnologias como Sails js, pero no fue terminado su desarrollo.
