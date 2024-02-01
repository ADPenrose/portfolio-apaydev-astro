---
title: '¿Quiúbole con el diseño de teclados mecánicos? — Parte 1: La idea, la teoría y los prerrequisitos'
description: 'Cómo iniciar con el diseño de teclados mecánicos y no morir en el intento.'
pubDate: 'Oct 03 2022'
heroImage: '/blog/keeb_guide_1/keeb_guide_1.webp'
tags: ['electronics', 'mechanical keyboards', 'design']
---

## Prólogo

Mi primer contacto con el mundo de los teclados mecánicos fue en los inicios de mi adolescencia, en aquellas épocas doradas en donde los videojuegos comenzaron a tomar relevancia dentro de Youtube. Entre 2012 y 2016, todos los grandes gamers de la plataforma comenzaron a adquirir teclados mecánicos de marcas como Razer, Logitech, Corsair y HyperX. Ese sonido tan característico se volvió con el tiempo parte del consciente colectivo de los que frecuentamos ese tipo de contenido, y fue en muchos casos el detonante que nos impulsó a dejar los teclados de membrana atrás.

No obstante, fue hasta hace apenas un año y medio aproximadamente que descubrí como tal el nicho de los teclados mecánicos. Desde el primer minuto, me sentí maravillado por la diversidad de características, tamaños, colores, y distribuciones presentes en los teclados de distintos miembros de la comunidad (por ejemplo, el [Whimsey](https://thisisfourteen.co/product/whimsy), el [Discipline](https://github.com/coseyfannitutti/discipline)/[Mysterium](https://github.com/coseyfannitutti/mysterium)/[Romeo](https://github.com/coseyfannitutti/romeo), el [Mercutio](https://mechwild.com/product/mercutio/), el [Sesame](https://github.com/kb-elmo/sesame), el [RedHerring](https://github.com/dcpedit/redherring), etc).

No obstante, fue hasta que vi el SmAllice de quark.works (Brandon Beltrán) que la idea de diseñar un teclado mecánico comenzó a gestarse en mi mente. Intrigado, le mandé un mensaje preguntándole dónde había aprendido a diseñar teclados mecánicos, y Brandon, siendo la increíble persona que es, no solo me mandó las dos guías de las cuales aprendió, sino que también me dijo que cualquier duda que tuviera, podía preguntarla sin miedo en su servidor de Discord.

De ese entonces a la actualidad ha pasado poco más de un año, y en este periodo de tiempo he sido capaz de diseñar tres teclados mecánicos con características bastante interesantes (uso de un encoder como perilla para subir/bajar el volumen del sistema, uso de una pantalla OLED para mostrar imágenes sencillas o ciertos datos al usuario, etc.), y todo ha sido posible gracias a la maravillosa comunidad de diseñadores presente en este hermoso hobby. Este nicho me ha dado y enseñado muchísimas cosas, y pienso que lo mínimo que puedo hacer es aportarle algo.

Verán, si bien existen varias guías que tratan el diseño de teclados mecánicos, todas se encuentran en inglés, lo cual no está mal; nos guste o no, el inglés es el idioma global. Sin embargo, siento que es momento de tener una guía de diseño de teclados completamente en español, actualizada, y que cubra no solo los aspectos tratados en las guías existentes, sino también temas específicos como la implementación de varias distribuciones (tanto en la PCB como en el firmware), la programación del teclado, el diseño de la carcasa, etc.

Ahora, lo anterior no busca ser una justificación para no aprender inglés; como diseñadores de teclados, tendremos constantemente la necesidad de comunicarnos con personas de diferentes países (ya sea para buscar disponibilidad de componentes o simplemente para pedir ayuda en la solución de algún problema). Si estás leyendo esto y no sabes inglés, esta es la señal divina que tanto esperabas para comenzar a aprender.

Como podrán darse cuenta, lo anterior suena bastante ambicioso (y, en efecto, lo es). Por lo tanto, he decidido dividir esta mega-guía en conjuntos de artículos que traten diferentes temas, los cuales implican diversos niveles de comprensión de conceptos teóricos y prácticos de electrónica, programación y modelado 2D. Por lo tanto, este primer conjunto de artículos fungirá como la base sobre la cual iremos construyendo un entendimiento acerca del proceso de diseño de teclados mecánicos.

En pocas palabras, primero vamos a enfocarnos en entender el diseño más simple de un teclado, y en conjuntos de artículos posteriores veremos cómo implementar características como encoders, pantallas OLED, LEDs, soporte para múltiples distribuciones, etc.

Entonces, en este primer artículo, nos enfocaremos en (1) entender cómo funciona eléctricamente un teclado y (2) en la instalación y configuración de todas las herramientas que vamos a ocupar.

## La idea

En la [guía de diseño de AI03](https://wiki.ai03.com) (la cual es considerada como lectura obligatoria para todos los que quieren aprender a diseñar teclados mecánicos) se construye desde cero un pequeño macropad de 4 teclas, lo cual simplifica muchísimo los procesos de diseño y ensamblaje.

Sin embargo, para la mayoría de las personas, un macropad tan pequeño no otorga la suficiente funcionalidad. Ahora, no sería conveniente diseñar un teclado 60%-65% (tal y como se muestra en la [guía de Masterzen](https://www.masterzen.fr/2020/05/03/designing-a-keyboard-part-1/)) ya que el proceso se haría mucho más largo y tedioso, lo cual tampoco es conveniente.

Por lo tanto, buscando mantener tanto la funcionalidad como la simplicidad, llegué a la conclusión de que lo mejor será diseñar y construir un pad numérico (numpad) con la siguiente distribución de teclas (layout):
![Figura 1: Distribución del pad númerico que se va a diseñar](https://i.imgur.com/8ubaR8D.png)

A falta de una mejor idea, este pequeño proyecto llevará el nombre “Tutopad” (lo sé, es horrible, pero podría ser peor).

## La electrónica

Ahora, lo siguiente que tenemos que determinar es el tipo de componentes que vamos a utilizar para nuestro pequeño numpad: ¿Usaremos componentes THT o componentes SMD?

Para poder tomar esta decisión, primero es importante entender la diferencia entre estas dos clasificaciones:

- **_THT_**: Este término es el acrónimo de Through-Hole Technology o Tecnología de Agujeros Pasantes, ya que utiliza los agujeros que se encuentran en las placas de circuito impresas (PCBs) para poder montar los diferentes componentes eléctricos y electrónicos. Debido a su tamaño, son mucho más fáciles de conseguir, manipular e implementar a proyectos y prototipos.
  ![Figura 2: Componentes THT en una placa de circuitos impresa](https://i.imgur.com/nKJUWZJ.png)
- **_SMD_**: Este término es el acrónimo de Surface-Mount Device o Dispositivo de Montaje Superficial, ya que su montaje es por medio de puntos de contacto plano en la superficie de las placas de circuito impresas (PCBs). Son mucho más pequeños que los componentes THT, lo cual permite ocupar de manera más eficiente el espacio disponible en la PCB.
  ![Figura 3: Componentes SMD en una placa de circuitos impresa](https://i.imgur.com/rLCWgYH.png)

Para que lo mencionado anteriormente quede más claro, a continuación, se comparan los tamaños de una resistencia THT (arriba) contra los de una resistencia SMD (abajo), siendo ambas de 10kOhms.
![Figura 4: Resistencia THT (arriba) vs. resistencia SMD (abajo), ambas de 10kOhms](https://i.imgur.com/ffrdNRc.png)

Debido a que los componentes THT son (a) más sencillos de conseguir y (b) son mucho más fáciles de montar a una PCB (con un cautín) que los SMD, nos apegaremos a diseñar nuestro teclado con estos primeros.

Ahora, para mantener este proyecto lo más sencillo posible, nos vamos a apoyar en un Arduino Pro-Micro, lo cual nos va a ahorrar tanto el diseño como el montaje de muchísimos componentes en nuestra PCB (como lo es el puerto USB, los sistemas de protección contra descargas eléctricas/ESD, los capacitores y resistencias requeridas por el microcontrolador, el microcontrolador ATMEGA32U4, el cristal oscilador, el circuito de reseteo, etc.).

En una primera instancia, todo esto puede parecer muy complicado, pero no se dejen apantallar por palabras y términos. Conforme esta serie de artículos avance, van a ver que muchos de estos términos son casi triviales. Recuerden que el objetivo de este primer artículo no es hacerlos expertos en electrónica, sino más bien darles un entendimiento básico de las partes generales que componen a un teclado y el principio de funcionamiento de este (siendo esto último lo que veremos a continuación).

## El Principio de Funcionamiento de un Teclado Mecánico

Tal y como lo menciona Masterzen en su guía de diseño, un teclado no es más que la combinación de:

- Keycaps/”teclas”.
- Switches/interruptores.
- Un plate que sirve como soporte para los switches (opcional).
- Una PCB (printed circuit board/placa de circuitos impresa) a la cual se soldan los switches y todos los componentes eléctricos y electrónicos.
- Un case/carcasa dentro de la cual se monta el teclado.

Entonces, lo primero que vamos a analizar es el funcionamiento de la PCB. ¿Cómo es que un teclado detecta qué tecla es la que estamos presionando? Pues bueno, de manera muy simplificada, la PCB lo que hace es convertir las pulsaciones de las teclas en señales que las computadoras puedan entender (lo cual se conoce como el protocolo HID para USB). La PCB contiene un microcontrolador (al cual nos referiremos a partir de ahora como MCU), el cual contiene un CPU, algo de RAM, memoria flash, puertos de entrada/salida de propósito general (también llamados GPIO’s).

A su vez, la PCB contiene todos los componentes eléctricos y electrónicos necesarios para el correcto funcionamiento del MCU (resistencias, capacitores de desacople, fusibles, sistemas de protección contra descargas electrostáticas, etc.), y también contiene a la matriz de switches. Ahora, como mencione anteriormente, en este proyecto vamos a utilizar un Pro-Micro para así simplificar la cantidad de componentes que tendremos que conectar entre sí en el programa de diseño/soldar a nuestra PCB, lo cual nos permitirá enfocarnos de lleno en el último componente de la PCB: la matriz de switches/interruptores.

Normalmente, los switches se colocan en una distribución compuesta por filas y por columnas, la cual simula la distribución física de nuestro teclado. Este acomodo de filas y columnas es lo que se conoce como la matriz de switches. Por su parte, el MCU está constantemente escaneando a una gran velocidad esta matriz al proveer voltaje a una cierta columna, esperar alguna medida en las filas, y repetir ese mismo proceso con la columna siguiente.

Si una tecla es presionada (lo cual implica que el switch debajo de esa tecla se cierra), una lectura aparecerá en la fila a la cual pertenece la tecla presionada cuando el MCU alimente un voltaje a la columna a la cual pertenece dicha tecla. Entonces, el MCU puede deducir cuál tecla fue apretada tan solo viendo a que columna le está aplicando voltaje y de cual fila está recibiendo una lectura.

En pocas palabras, el voltaje es generado por un pin del MCU y alimentado a una cierta columna. Si en dicha columna se presiona un switch, se cerrará el circuito, lo cual permitirá que la corriente pase de la columna a la fila a la cual pertenece el switch. Conociendo la columna a la cual se está aplicando voltaje y la fila en la cual se está detectando una lectura, el MCU puede deducir la tecla que se presionó y entonces enviar el código normalizado de la tecla correspondiente por medio del cable USB que une al teclado y a la computadora.

Sin embargo, hay un pequeño problema: si se presiona más de una tecla a la vez, es posible que el MCU registre pulsaciones que no se hicieron. Entonces, ¿Cómo damos solución a este problema? Para explicarlo y generar un entendimiento visual de lo visto hasta este momento, utilizaremos algunas imágenes (NOTA: el flujo de electricidad mostrado en los siguientes esquemas no representa el comportamiento real de la corriente. Tómenlo como una simplificación para fines didácticos). A continuación, se muestra el esquema de una matriz de 4 switches:
![Figura 5: Esquema de una matriz de 4 switches](https://i.imgur.com/TeYnseq.png)

Si nosotros presionamos el interruptor SW01, el voltaje alimentado a la columna 1 por el MCU empujará a la corriente a través del switch presionado hacia la fila en la cual se encuentra dicho switch (en este caso, la fila 0). El flujo de la corriente puede verse en la siguiente imagen:
![Figura 6: Tipos de polarización de un diodo](https://i.imgur.com/FUVlO0T.png)

Entonces, si el diodo sufre una polarización directa, éste se comportará como un interruptor abierto y dejará que la corriente fluya libremente. Ahora, si sufre de una polarización inversa, se comportará como un interruptor abierto, lo cual evitará que la corriente fluya (la dirección de los flujos de corriente para cada caso se encuentra señalada en la imagen anterior en color amarillo). Añadiendo diodos a las posiciones adecuadas resulta en la siguiente matriz:
![Figura 7: Matriz de 4 switches con diodos integrados](https://i.imgur.com/JRjIUnh.png)

Ahora, ¿Qué pasaría si volvemos a presionar los interruptores SW00, SW01 y SW11 a la vez? Gracias a los diodos que colocamos en nuestra matriz, la corriente no va a poder viajar de la fila 1 hacia el interruptor SW01, ya que dicha corriente va a polarizar inversamente al diodo D01, lo cual causará que éste se comporte como un interruptor abierto.

Entonces, cuando el MCU mande un voltaje a la columna 0, va a recibir una lectura en la línea 0, pero no en la línea 1. De manera homóloga, cuando el MCU mande un voltaje a la columna 1, va a recibir lecturas en la línea 0 y en la línea 1, lo cual provocará que registre únicamente las 3 teclas que se presionaron. Todo lo anterior se encuentra ilustrado en las siguientes 2 imágenes (la primera se da durante la alimentación de la columna 0 y la segunda durante la alimentación de la columna 1, teniendo en cuenta de que estos dos eventos ocurren casi simultáneamente):
![Figura 8: Comportamiento de la matriz al alimentar la columna 0](https://i.imgur.com/hxZNCyv.png)
![Figura 9: Comportamiento de la matriz al alimentar la columna 1](https://i.imgur.com/TIrXDUb.png)

## Conclusiones

En el próximo capítulo, vamos a enfocarnos en la instalación y configuración de todas las herramientas que vamos a utilizar para diseñar nuestro numpad (Git, Kicad, y el repositorio de GitHub para nuestro teclado).

Si llegaste hasta aquí, te quiero agradecer por haberte dado el tiempo de leerme. Si quieres apoyarme, puedes invitarme un café en Ko-Fi haciendo clic en el botón rosa con la leyenda “Give a tip” o haciendo clic aquí. Es ahí en donde estaré colocando los links a los repositorios que contengan los archivos de este tutorial en el futuro. No temas, estos links estarán disponibles de manera gratuita para todo mundo, la donación es de carácter opcional.

Responde a este post con dudas o comentarios que quieras compartir con la comunidad. Haré lo posible por responder a la brevedad. c:
