# OOP Exercises - Solutions

This repository contains TypeScript solutions for the Object-Oriented Programming (OOP) exercises from the faculty unit.  
Each `.ts` file corresponds to an specific exercise, sometimes updated to accommodate multiple exercises.

## Exercises Completed (1–13)

1. [Persona1.ts](./exercises/01-Persona1/Persona1.ts) → Create a `Persona` class with public `nombre` and `apellido` attributes. Create an instance and print values.  
2. [Vehiculo.ts](./exercises/02-Vehiculo/Vehiculo.ts) → Create a `Vehiculo` class with public `marca` and `modelo` and a private `patente`. Create an instance and print accessible values.  
3. [Articulo.ts](./exercises/03-Articulo/Articulo.ts) → Create an `Articulo` class with private `marca` and `modelo`. Add public getters/setters. Create an instance. Note that private attributes cannot be printed directly.  
4. [Cine.ts](./exercises/04-Cine/Cine.ts) → First version: private attributes `pelicula` and `horario`, getters/setters, method `obtenerCartelera()`. Create an instance and print values.  
5. [Cine.ts](./exercises/04-Cine/Cine.ts)  → Updated version: create a second instance, modify the first instance, show both; demonstrates that `new` creates distinct objects.  
6. [Fruta.ts](./exercises/06-Fruta/Fruta.ts) → Class with private attributes `color`, `peso`, `esEstacional`. Getters/setters, `esComestible()` method, two constructors (with and without initial values).  
7. [Ninja.ts](./exercises/07-Ninja/Ninja.ts) → Class with private attributes `arteMarcial`, `arma`, `fuerza`, `salto`. Getters/setters, methods `saltar(multiplier)` and `ataque()`. Two instances with different values.  
8. [Persona.ts](./exercises/08-Persona/Persona.ts) → Class `Persona` with private `nombre` and `apellido`. Create `Visitante` and `Guardia` classes with same attributes. Instances created and printed.  
9. [Persona.ts](./exercises/09-Persona/Persona.ts) → Updated version: `Visitante` and `Guardia` extend `Persona`. Demonstrates inheritance.  
10. [Guardia/Visitante/Persona](./exercises/10-Guardia/Guardia.ts) → Add method `presentarse()` in `Persona`. Override `presentarse()` in `Guardia` to return “Hello, my name is <name> and I am the guard.” Demonstrate method precedence.  
11. [Visitante/Guardia](./exercises/11-Visitante/Visitante.ts) → Add private `dni` to `Visitante` with getters/setters. Add `controlarDocumento(dni)` in `Guardia` that prints “Adelante persona con DNI: <dni>”. Create instances and demonstrate functionality.
12. [Guardia updated](./exercises/12-Guardia/Guardia.ts) → Updated `controlarDocumento()` in `Guardia` to include visitor’s full name with DNI. Demonstrated with instances.
13. [KT-2020-P / Robot](./exercises/13-Robot/KT-2020-P.ts) → Robot class with `numeroSerie` and `ptb` attributes.

    * `Traccion` interface with `tipo`, `hpRestado`, `distanciaMax`, and `getInfo()`.
    * Implemented `RuedaCaucho` and `Oruga` classes that implement `Traccion`.
    * Assign traction to robot using `setTraccion()` and display stats via `mostrarInfo()`.
    * Demonstrates **composition**, dynamic assignment of components, and usage of interfaces.

## Exercises In Progress (12+)
 
14. Drone system with attachable tools. Model classes, update speed/altitude based on weight.  
15. Fleet management for naval ships. Classes for different ship types, instantiate and print stats.  
16. Logistics company vehicles. `cargar()` and `listarItems()` methods, handle max capacity.  
17. Scanner for objects and containers. Class hierarchy for simple, container, content, and nested objects.  
18. Real estate system: manage properties, calculate policies based on vehicle/usage.  
19–39. Additional exercises: in progress.

## Notes

- Each file contains the **complete solution** for the corresponding exercise.  
- If a file is updated for multiple exercises, it is noted in the description.  
- To run exercises:  
  ```bash
  tsc <file>.ts
  node <file>.js
