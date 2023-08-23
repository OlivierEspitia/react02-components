import React from "react"

const studentName = "Tania";


/* 
LOS DATOS PASADOS COMO PROS, LOS RECIBIMOS COMO
UN OBJETO DE UN PARAMETRO DE LA FUNCION

Desestructuracion: Obtener las claves de un objeto, para hacer asignaciones menos c
complejas.

{name, url} = promp;
*/
const Student = ( { info, children } ) => {
  
    return (
      <>
        <a href={ info.url } target="_blank">
          <h4> { info.name } </h4>
        </a>
        <p> Ex-alumno:{ info.isGraduate ? " Sí " : " No "}   </p>
  <p>{children}</p>
      </>
    );
  };
  
export default Student;