---
title: 'Sistemas de hipermedia: Introducción y conceptos básicos'
description: 'Un acercamiento más simple (y, en muchos casos, mejor) al desarrollo de aplicaciones web.'
pubDate: 'Apr 15 2024'
heroImage: '/blog/hypermedia-systems-intro/hs-intro-cover.webp'
tags: ['web development', 'hypermedia systems']
---

## Introducción

Si tienes un poco de experienca en el desarrollo de páginas y aplicaciones web, el término "Sistemas de hipermedia" puede sonar bastante extraño. De hecho, es bastante probable que al escuchar en hipermedia pienses únicamente en HTML.

Y sí, HTML es un tipo de hipermedia. Sin embargo, la web no solo funciona con HTML; también tenemos HTTP (Hyper Text Transfer Protocol), quien es el encargado de transferir HTML desde los servidores hasta los clientes.

Relacionado a lo anterior, también tenemos _servidores de hipermedia_, los cuales otorgan APIs a los clientes a través de una red. Y no podemos olvidar a los previamente mencionados _clientes de hipermedia_, los cuales son un tipo de software que traducen las respuestas de hipermedia a texto legible por humanos, de forma que podamos interactuar con estos sistemas. Los clientes de hipermedia más utilizados son los _navegadores_ que utilizamos en nuestro día a día.

Estos navegadores son una pieza de software altamente sofisticada que entienden no solamente HTML y otros tipos de archivos (como CSS), sino que también nos proveen de un runtime para JavaScript con un conjunto megadiverso de APIs que nos permiten crear aplicaciones internas tan complejas como aplicaciones nativas.

El alto poder de este runtime ha causado que muchos desarrolladores web hoy en día ignoren las características de hipermedia que los navegadores nos otorgan por defecto, y se enfoquen en la creación de sus aplicaciones utilizando casi exclusivamente JS. Esta tendencia ha dado lugar a lo que se conoce como Aplicaciones de Una Sola Página (o SPAs, por sus siglas en inglés).

En estas aplicaciones, HTML se convierte en una herramienta de marcado para generar el layout de nuestra página, el cual nos vemos obligados a usar por razones históricas y no realmente por su utilidad. Lo importante de todo esto es que las aplicaciones construidas de esta forma no toman ventaja de los sistemas de hipermedia sobre los cuales se construyó la web.

Para poder entender cómo se ven las aplicaciones impulsadas por la hipermedia y poder compararlas con las SPAs, neceistamos explorar desde cero los conceptos que forman al sistema de hipermedia de la web, para así poder aclarar algunos malentendidos que se han vuelto falacias a lo largo de los años.

El objetivo de esta serie de artículos es dejar en claro como es que la arquitectura de los sistemas de hipermedia se diferencia de otros sistemas, asi como la definición de las ventajas y desventajas de este acercamiento al desarrollo de software.

Gran parte de la información que aquí se plasma proviene del libro [Hypermedia Systems](https://hypermedia.systems/book/contents/) por Carson Gross, Adam Stepinski y Deni̇z Akşi̇mşek, por lo que puedo decirles con seguridad que no solo estoy hablando por hablar. Debido a que el texto está completamente en inglés, consideré que una buena forma de aportar un granito de arena a este proyecto sería traer los conceptos y las ideas tratadas ahí a la comunidad hispanohablante.

Sin más que agregar, empezemos en este viaje de redescubrimiento de la hipermedia.

## ¿Qué es un sistema de hipermedia?

Hagamos un pequeño viaje del tiempo al año 2000; cuando Roy Fielding nos dió el término _Transferencia de Estado Representacional_ (o REST, por sus siglas en inglés). En la disertación para su doctorado, él describió a REST como una _arquitectura de redes_.

Gross, Stepinski y Akşi̇mşek definen entonces a un sistema de hipermedia como _un sistema que sigue la arquitecura REST tal y como la describió originalmente Fielding_.

Es importante hacer la distinción "... tal y como la describió originalmente Fielding", ya que existe un uso consensuado actualmente para la arquitecutra REST que no es del todo correcto. Lo más probable es que, hoy en día, asocies ese término con una API que regresa JSON, ya que ese es el uso más común que se le da en la industria.

Esto es una aplicación incorrecta del término REST, ya que el JSON no es una himpermedia natural debido a la ausencia de controles de hipermedia (más adelante hablaremos de ellos). Aunado a ello, el intercambio de hipermedia es un requisito explícito para que un sistema se considere "RESTful". Es vital que recordemos que Fielding describía en su trabajo a la web tal y como existía a finales de la década de 1990; hipervínculos y formularios simples son a lo que él llamaba RESTful.

## Hipermedia: Re-aprendiendo las bases

Es bastante irónico que, a pesar de que la hipermedia es una tecnología que se utiliza por billones cada día (ya sea por medio de HTML que es transmitido y recibido por medio de HTTP por medio de clientes de hipermedia como lo son nuestros navegadores, los cuales están conectados a la World Wide Web), no existan discusiones cotidianas sobre los temas que abarca.

Y sí, hay miles de tutoriales en linea sobre cómo escribir HTML, pero es bastante complicado encontrar una discusión que se enfoque en estos sistemas en general. De hecho, es bastante común ver mucho resentimiento hacia HTML por parte de muchos desarrolladores hoy en día, quienes se sienten obligados a utilizar este sistema arcáico para generar las interfaces de sus aplicaciones basadas en JS.

### ¿Qué es la hipermedia?

Nosotros podemos entenderla como media (por ejemplo, texto) que incluye _ramificaciones no lineales_ desde una locación de la media hacia otra, por medio de, por ejemplo, _hipervínculos_. Cuando hablo de ramificaciones no lineales, simplemente me refiero a que la información es accesible de forma no sequencial. En otras palabras, podemos navegar a través de la información en diferentes direcciones, según lo que nos interese.

Ahora, los _hipervínculos_ son un ejemplo perfecto de lo que se conoce como _controles de hipermedia_, los cuales no son más que elementos que describen o controlan algún tipo de interacción (normalmente con un servidor remoto) por medio de la codificación de la información sobre la interacción de forma directa y completa dentro de ellos. _Son ellos los que diferencían a la hipermedia de los demás tipos de media._

El hipertexto, que quizá es un término con el cual estamos más familiarizados, es una subcategoría de la hipermedia.

### Una breve recapitulación de la historia de la hipermedia

Muchos expertos apuntan al artículo de 1945 [_As We May Think_](https://archive.org/details/as-we-may-think/mode/2up) por Vannevar Bush como el punto de inicio de lo que se ha convertido en la hipermedia hoy en día. En este artículo, Bush describió un dispositivo llamado _Memex_, el cual, por medio de un mecanismo bastante complejo de sustemas mecánicos y de condificación, permitiría a usarios "saltar" entre piezas de contenido relacionados entre sí. Aunque este dispositivo jamás se implementó, fue la inspiración para el trabajo posterior que resultó en la hipermedia.

Por su parte, los términos "hipertexto" e "hipermedia" fueron acuñados en 1963 por Ted Nelson. Mientras Nelson trabajaba con sus ideas, había una persona en el Instituto de Investigación de Standford que estaba intentando traer a la vida el Memex de Vannevar Bush; Douglas Engelbart.

En 1968, Engelbart dió la madre de todas las demostraciones técnicas en San Francisco, California, mostrando ante el público:

- Un sistema de edición de texto remoto y colaborativo.
- Un sistema de chat con audio y video.
- Un sistema integrado de ventanas con redimensionamiento de las mismas.
- Hipertexto que permitía navegar a nuevo contenido al hacer clic a texto subrayado.

A pesar de la ovación de pie de la audiencia, pasaron décadas antes de que las tecnologías que Engelbart desarrollo encontraran su lugar en la vida cotidiana.

#### Una implementación moderna

El primer sitio web fue publicado en 1990 por Tim Berners-Lee, un trabajador en el CERN que, debido a la desesperacion que le generaba no poder compartir y consultar de forma sencilla investigaciones y artículos académicos, encontró el momento adecuado para obtener el soporte institucional que resultaría en la creación de la _World Wide Web_.

En 1994, esta creación estaba creciendo de forma exponencial, lo cual dió origen a la [W3C](https://www.w3.org). Posteriormente, en el año 2000, Roy Fieldings publicó su ahora famosa disertación doctoral: ["Architectural Styles and the Design of Network-based Software Architectures"](https://ics.uci.edu/~fielding/pubs/dissertation/top.htm). Fielding trabajó en las especificaciones iniciales de HTTP y, en este artículo, definió el modelo de hipermedia de la web utilizando el término REST.

En un artículo posterior discutiremos las ideas de Fielding con mayor profundidad, buscando corregir nuestro entendimiento con respecto a REST y la hipermedia en general.

#### HTML: De los documentos a las aplicaciones

Inicialmente, HTML solo contaba con hipervínculos como un control de hipermedia, ya que su principal propósito era servir con un medio de solo lectura que permitiera la publicación de artículos académicos. Entonces, los hipervínculos permitían conectar diferentes artículos entre sí, lo cual facilitaba a los usuarios la navegación entre contenido relacionado.

Los formularios no fueron implementados sino hasta la segunda revisión del lenguaje, convirtiéndose así en el segundo (y oficialmente último) control de hipermedia en HTML. **La adición de este tag fue lo que nos permitió dar el salto de la lectura a las aplicaciones**, ya que ahora contabamos con un mecanismo que nos permitia crear/actualizar recursos a través de una request POST (aunque también es posible hacer requests de tipo GET con un formulario).

Con tan solo estos dos elementos (que a simple vista parecen tan simples que hasta podría generarnos aburrimiento hablar de ellos) son los que nos permitieron generar las primeras aplicaciones web, las cuales ahora clasificamos como [_Aplicaciones de la Web 1.0_](https://es.wikipedia.org/wiki/Web_1.0).

El hecho de que estas aplicaciones hayan tenido miles de usuarios (como el [Directorio de Yahoo!](https://en.wikipedia.org/wiki/Yahoo!_Directory), lanzado en 1994) nos demuestran el poder bruto que tiene la hipermedia.

## ¿Que salió mal?

HTML, a pesar de ser poderoso, no es perfecto. Si lo pensamos brevemente, hay cuatro restricciones principales tatuadas en la especificación de HTML que lo limitan de una forma aberrante:

- Solamente los tags `<a>` y `<form>` pueden hacer requests HTTP.
- Solamente los eventos `click` y `submit` desencadenan dichas requests.
- De todos los diferentes verbos en HTTP, solo tenemos acceso a `GET` y a `POST`. Si queremos acceder a alguno de los demás (como `PATCH`, `PUT` o `DELETE`), tenemos que usar JavaScript (AJAX).
- Cuando el servidor nos responde con HTML, **toda la pantalla** es reemplazada, y no tenemos la opción de modificar ese comportamiento.

Inicialmente, todos estos puntos fueron solucionados con JavaScript; el lenguaje de scripting para la web. Sin embargo, conforme el tiempo fue avanzando, comenzamos a utilizar cada vez más JavaScript para dar soluciones a diversas carencias de HTML en un mundo que se inclinaba a aplicaciones cada vez más interactivas en vez de exigirle a la [W3C](https://www.w3.org) que integrara las características que HTML requería para mantenerse a la vanguardia.

Lo anterior, en conjunto con el [pecado de considerar a JSON como parte de la arquitectura REST](https://htmx.org/essays/how-did-rest-come-to-mean-the-opposite-of-rest/), fue lo que dió lugar a lo que hoy concemos como [SPAs o Aplicaciones de Una Sola Página](https://blog.hubspot.es/website/que-es-single-page-application), las cuales clasificamos como [Aplicaciones de la Web 2.0.](https://es.wikipedia.org/wiki/Web_2.0).

Estas aplicaciones se basan en el uso de [frameworks](https://ebac.mx/blog/frameworks) o [librerías](https://www.codealo.dev/blog/que-es-una-libreria-en-programacion) bastante sofisticadas de JavaScript que permiten mantener en sincronía un conjunto de datos de interés (también llamados _estado_) con la UI. Algunos ejemplos de estas teconologías son [React](https://react.dev), [Vue.js](https://vuejs.org) y [Angular](https://angular.io).

Estas teconologías cambian el enfoque del control del estado de la aplicación del servidor hacia el cliente, en donde los navegadores ya no funcionan simplemente como el lienzo en donde las respuestas del servidor son pintadas, sino que funge también como el encargado de almacenar en la memoria local el _estado_ de la aplicación, hacer llamadas a través de AJAX a servidores para leer o insertar datos en formato JSON, y actualizar la UI cada que el _estado_ de la aplicación cambie.

Sí, HTML sigue siendo utilizado en estas aplicaciónes, pero solamente sirve como un lenguaje de marcado que nos permite darle estructura a las aplicaciones. Los controles de hipermedia nativos son normalmente evitados, y toda esta funcionalidad se transfiere a JavaScript, tirando a la basura toda las ventajas de la arquitecura RESTful sobre la cual se construyó la web.

Ahora, esto no es necesariamente malo. Hay aplicaciones altamente interactivas que simplemente serían imposibles de implementar utilizando un enfoque puro de hipermedia. Mi punto aquí es que, actualmente, la gran mayoría de desarrolladores **_ya no consideran otras alternativas a estos frameworks de JavaScript_**. Hay aplicaciones que pueden ser desarrolladas con un enfoque basado en la hipermedia con JavaScript no como un reemplazo, sino como un apoyo para complementar a HTML y hacerlo más declarativo y poderoso.

## El resurgimiento de la Hipermedia: HTMX

A mitades del año 2023, comenzamos a ver una luz el final del túnel. Carson Gross de [Big Sky Software](https://bigsky.software) develó una nueva librería de JavaScript para el desarrollo de aplicaciones web, la cual contaba con un diferenciador increíble: JavaScript no buscaba reemplazar las funcionalidades de la hipermedia, sino **potenciarla y ayudarle a dar una resolución a los 4 problemas descritos anteriormente**.

Esta librería surgió en un momento en donde los programadores estaban increíblemente fatigados de JavaScript y de todas las minuciosidades que éste implicaba. Con una sintaxis declarativa y fácil de entender, [HTMX](https://htmx.org) vino a recordarnos el poder inconmensurable que la hipermedia tiene.

Tomemos el siguiente código como ejemplo:

```JavaScript
<script src="https://unpkg.com/htmx.org@1.9.12"></script>
<button hx-post="/test" hx-swap="outerHTML" hx-trigger="hover">
  Pon el puntero sobre mi
</button>
```

Al poner el puntero sobre el botón, éste hará una request de tipo POST al servidor en la ruta `/test` (considerando que el servidor está en el mismo dominio que el HTML presentado) y reemplazara al elemento `<button>` con los contenidos de la respuesta. Asi de simple, así de sencillo.

Como podemos ver, los 4 puntos que mencionamos anteriormente son solucionados de una forma elegante, descriptiva y sencilla, sin necesidad de tirar a la arquitectura REST y a la hipermedia por la ventana.

Otra gran ventaja de volver a tomar a la hipermedia como el [motor del estado de nuestras aplicaciones](https://htmx.org/essays/hateoas/) es que ahora **cambios en la API de la cual sacamos los datos no requieren hacer cambios en el cliente.**

Con el enfoque de APIs basadas en JSON, el cliente tenía que entender qué datos le estaba compartiendo el servidor para poder mostrarlos de forma adecuada; si se llegaba a cambiar el nombre de alguna propiedad, si se agregaba una propiedad nueva, o si se eliminaba alguna propiedad, esos cambios también tenían que reflejarse en el cliente.

Con la hipermedia como nuestra piedra angular, ya que el cliente (el navegador) simplemente se encarga de mostrar las respuestas del servidor, no importa si la estructura de datos en el servidor cambia: al final, lo único que le interesa al cliente es recibir una respuesta para poder mostrarla. Lo que venga en esa respuesta no es de interés para que el cliente pueda hacer su trabajo.

## Conclusión

He estado bastante activo en redes interactuando con personas igual de apasionadas que yo por HTMX, y hay un tweet en el que pienso de menos una vez al día que resume perfectamente mi sentir por el resurgimiento de la hipermedia, el cual iba más o menos así:

_"HTMX me ayudó a darme cuenta que llevamos años intentando usar una navaja suiza como un martillo mientras nos quejamos de que no hace bien su trabajo."_

## Referencias

1. Gross, C., Stepinski, A., Aksimsek, D. (2023) Hypermedia Systems. Recuperado de https://hypermedia.systems/book/contents/.
