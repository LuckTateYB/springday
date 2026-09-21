export interface Flower {
  id: string;
  name: string;
  emoji: string;
  meaning: string;
  message: string;
  image: string;
  memory: string;
  hidden?: boolean;
}

export const gardenContent = {
  eyebrow: 'BTS • 21 de septiembre',
  title: 'Jardín de luz para la loquita BTS',
  hint: 'Falta una flor más especial... Empieza desde la izquierda, es que no funciona lo que estaba armando para las flores xd',
  plant: {
    message: 'Ya descubriste las 5 flores. Ahora planta la flor que representa su brillo más grande.',
    action: 'Plantar mi flor',
  },
  final: {
    title: 'Gracias por ser una flor que nunca dejó de florecer.',
    message:
  'Cada pétalo guarda la fuerza de BTS, la fe de “Spring Day” y la felicidad de “Euphoria”. Y entre todas estas flores, estás tú: una chica que crece con valentía, elegancia y un brillo que deseo que nunca se apague. Ojalá la vida te regale siempre razones para sonreír y momentos que se sientan como una pequeña euforia.',
    action: 'Volver a recorrer nuestro jardín',
  },
} as const;

export const flowers: Flower[] = [
  {
    id: 'margarita',
    name: 'Margarita',
    emoji: '🌼',
    meaning:
      'Como en “Spring Day”, la belleza no se rompe con el frío: solo espera a la primavera para florecer.',
    message:
      'A veces pienso que tienes esa forma tan tuya de iluminar incluso los días difíciles. Ojalá nunca olvides lo mucho que vales y que, así como en Spring Day siempre existe la esperanza de volver a florecer, tú también encuentres siempre tu camino de regreso a la felicidad.',
    image: './photos/images-05.jpg',
    memory:
      'Si la margarita representa la alegría, creo que esta flor tendría mucho que aprender de ti. Pero probablemente terminaría siendo Army xd el delulu está tan fuerte que hasta las flores tendrían tus gustos musicales.',
  },
  {
    id: 'azucena',
    name: 'Azucena',
    emoji: '🪷',
    meaning:
      'Con el espíritu de “Young Forever”, cada reto la vuelve más alta, más segura y más brillante.',
    message:
      'Me gusta imaginar todo lo que puedes llegar a construir. Tienes sueños que merecen ser perseguidos con valentía, y espero que nunca dejes de confiar en quien eres y en todo lo que puedes llegar a ser. Que cada paso te acerque a esa versión de ti que tanto deseas.',
    image: './photos/images-02.jpg',
    memory:
      'Tienes sueños grandes y espero que los cumplas todos. Eso sí, cuando seas una millonaria y estés cumpliendo cada meta, acuérdate de los que te soportaron con tus delulus. Yo reclamo mi lugar xd',
  },
  {
    id: 'lavanda',
    name: 'Lavanda',
    emoji: '💜',
    meaning:
      'Como “Answer: Love Myself”, su verdadero brillo nace cuando aprende a amarse sin miedo.',
    message:
      'Ojalá puedas mirarte con la misma ternura con la que yo admiro tantas cosas de ti. No tienes que demostrar tu valor todo el tiempo: mereces cuidarte, reconocerte y aprender a quererte en cada etapa. Tu brillo no depende de ser perfecta, sino de ser tú.',
    image: './photos/images-03.jpg',
    memory:
      'Es la flor que recuerda que la grandeza también se siente en la paciencia, asi que cada que quieras matar a alguien recuerda que a Jungkook no le gustaría eso jakjaja',
  },
  {
    id: 'rosa',
    name: 'Rosa',
    emoji: '🌹',
    meaning:
      'Con “Life Goes On”, ella acepta el cambio y sigue avanzando con valentía y elegancia.',
    message:
      'Sé que no todos los días son sencillos, pero deseo que nunca pierdas esa valentía que te hace seguir adelante. Si alguna vez el camino se vuelve pesado, ojalá recuerdes que no tienes que tenerlo todo resuelto para seguir siendo alguien increíble. Tu historia todavía tiene muchas flores por abrir.',
    image: './photos/images-01.jpg',
    memory:
      'Si algún día el camino se pone difícil, recuerda respirar, descansar y cerrar el día con un "Life goes on".',
  },
  {
    id: 'nuestra-flor',
    name: 'Tu flor',
    emoji: '🌻',
    meaning:
      'La flor más especial, como “A Brand New Day”, nace cuando una chica descubre que su brillo es infinito.',
    message:
      'Si pudiera elegir una flor para ti, sería esta: amarilla, porque me recuerda a la luz que deseo que siempre encuentres en tu vida. No sé qué nos deparará el futuro, pero sí sé que me alegra haberte conocido y que me gustaría seguir descubriendo, poco a poco, todo lo bonito que hay en ti. Esta flor es para ti, porque mereces que te recuerden lo especial que eres.',
    image: './photos/images-01.jpg',
    memory:
      'Esta es tu flor, aunque técnicamente la estoy regalando yo y tú eres la que tiene que sonreír xd Espero que cuando la veas recuerdes que hay alguien que disfruta conocerte y que quiere seguir compartiendo momentos divertidos y bonitos contigo.',
    hidden: true,
  },
];
