# Pokémon TCG Eeveelutions

Proyecto de cartas interactivas en HTML/CSS/JavaScript donde puedes mostrar cartas de Eeveelutions con nombres en japonés, inglés y español.

## Qué explica este README

- Cómo usar el proyecto
- Cómo agregar nuevos Pokémon
- Qué hace el interruptor de fan names
- Últimas actualizaciones incluidas

## Uso rápido

1. Abre VS Code/cards/eeveevolutions-tcg-cards.html en tu navegador.
2. Usa los botones de idioma para cambiar entre japonés, inglés y español.
3. Activa el interruptor de fan names para mostrar u ocultar los nombres de fan en las cartas.
4. Haz clic en una carta o presiona Enter/barra espaciadora para girarla.

## Agregar nuevos Pokémon

1. Abre VS Code/cards/script.js.
2. Busca el arreglo pokemonCards al inicio del archivo.
3. Copia uno de los objetos existentes y pégalo dentro del arreglo.
4. Actualiza los campos clave:
   - 
ameJa → nombre en japonés
   - 
ameEn → nombre en inglés
   - 
ameEs → nombre en español
   - FanName → nombre de fan personalizado
   - 	ypeJa, 	ypeEn, 	ypeEs → nombre del tipo en cada idioma
   - 	ypeCode → clave de estilo de tipo (ej. water, electric, fire)
   - hp, attack, defense → valores numéricos
   - umber → número de Pokédex usado para la imagen
   - emoji → emoji para la parte trasera de la carta

5. Guarda el archivo y recarga la página para ver la nueva carta.

## Interruptor de Fan names

- El interruptor controla si se muestra o se oculta la sección de Fan-name en cada carta.
- La lógica está en VS Code/cards/script.js dentro de la función 	oggleFanNames(checkbox).
- El CSS en VS Code/cards/styles.css anima el panel con desplazamiento, desvanecimiento y cambio de altura.
- Cuando está activado, la sección aparece suavemente; cuando está desactivado, se oculta con animación.

## Últimas actualizaciones

- Se añadió un badge de tipo con fondo negro translúcido y texto blanco legible.
- Se reforzó compatibilidad visual para Chrome y múltiples navegadores.
- Se agregó el toggle de fan names con animación de desplazamiento y fade.
- Se mejoró la estructura para permitir agregar cartas nuevas fácilmente.
- Se dejó un ejemplo comentado en VS Code/cards/script.js para copiar y pegar al crear nuevos Pokémon.

## Notas

- El estilo de la tarjeta depende del campo 	ypeCode para aplicar clases CSS.
- La URL de la imagen se genera desde 
umber, usando sprites oficiales de Pokémon.
- Si quieres más tipos de Pokémon, mantén la consistencia de 	ypeCode y agrega los nombres en los tres idiomas.
