
// La declaración 'use strict' en JavaScript se utiliza para activar el modo estricto en un script o en una función. Al usar 'use strict', estás optando por una versión más restrictiva del lenguaje JavaScript, lo que impone ciertas restricciones y genera errores para prácticas que de otra manera serían silenciosamente ignoradas.

//     Asignación a variables no declaradas:

// 'use strict';
// x = 10; // Error: x is not defined

//     Asignación a variables de solo lectura:

// 'use strict';
// const y = 20;
// y = 30; // Error: Assignment to constant variable.

//     Uso de palabras clave reservadas:

// 'use strict';
// var let = 5; // Error: Unexpected 'l=et' as a variable declaration.

//     Eliminación de variables, funciones o argumentos:

// 'use strict';
// delete Object.prototype; // Error: Cannot delete property 'prototype' of object

//     Uso de with:

// 'use strict';
// with(obj) {
//     // Error: Strict mode code may not include a with statement
// }

//     Argumentos duplicados en funciones:

// 'use strict';
// function myFunction(a, b, a) {
//     // Error: Duplicate parameter name not allowed in this context
// }