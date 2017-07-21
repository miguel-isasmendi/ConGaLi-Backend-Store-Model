db.getCollection('cellstemplatedefinitions').insert([
  {
    name: 'Block',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Game_of_life_block_with_border.svg',
    attribution: 'By None (Own work) [Public domain], via Wikimedia Commons',
    points:  [
      {x: 0, y: 0}, {x: 1, y: 0},
      {x: 0, y: 1}, {x: 1, y: 1}
    ]
  }, {
    name: 'Beehive',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Game_of_life_beehive.svg',
    attribution: 'By None (Own work) [Public domain], via Wikimedia Commons',
    points:  [
      {x: 1, y: 0}, {x: 2, y: 0},
      {x: 0, y: 1}, {x: 3, y: 1},
      {x: 1, y: 2}, {x: 2, y: 2}
    ]
  }, {
    name: 'Loaf',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Game_of_life_loaf.svg',
    attribution: 'By None (Own work) [Public domain], via Wikimedia Commons',
    points:  [
      {x: 1, y: 0}, {x: 2, y: 0},
      {x: 0, y: 1}, {x: 3, y: 1},
      {x: 1, y: 2}, {x: 3, y: 2},
      {x: 2, y: 3}
    ]
  }, {
    name: 'Boat',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Game_of_life_boat.svg',
    attribution: 'By Bryan.burgers (Own work) [Public domain], via Wikimedia Commons',
    points:  [
      {x: 0, y: 0}, {x: 1, y: 0},
      {x: 0, y: 1}, {x: 2, y: 1},
      {x: 1, y: 2}
    ]
  }, {
    name: 'Flower',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Game_of_life_flower.svg',
    attribution: 'By Harsh Srivastava (Own work) [CC BY-SA 4.0 (http://creativecommons.org/licenses/by-sa/4.0)], via Wikimedia Commons',
    points:  [
      {x: 1, y: 0},
      {x: 0, y: 1}, {x: 2, y: 1},
      {x: 1, y: 2}
    ]
  }, {
    name: 'Blinker',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Game_of_life_blinker.gif',
    details: '(period 2)',
    attribution: 'By JokeySmurf at en.wikipedia [Public domain], via Wikimedia Commons',
    points:  [
      {x: 1, y: 0},
      {x: 1, y: 1},
      {x: 1, y: 2}
    ]
  }, {
    name: 'Toad',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Game_of_life_toad.gif',
    details: '(period 2)',
    attribution: 'By JokeySmurf [Public domain], via Wikimedia Commons',
    points:  [
      {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0},
      {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1}
    ]
  }, {
    name: 'Beacon',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Game_of_life_beacon.gif',
    details: '(period 2)',
    attribution: 'By JokeySmurf at en.wikipedia [Public domain], via Wikimedia Commons',
    points:  [
      {x: 0, y: 0}, {x: 1, y: 0},
      {x: 0, y: 1},
      {x: 3, y: 2},
      {x: 2, y: 3}, {x: 3, y: 3}
    ]
  }, {
    name: 'Pulsar',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Game_of_life_pulsar.gif',
    details: '(period 3)',
    attribution: 'By JokeySmurf at en.wikipedia [Public domain], via Wikimedia Commons',
    points:  [
      {x: 4, y: 0}, {x: 10, y: 0},
      {x: 4, y: 1}, {x: 10, y: 1},
      {x: 4, y: 2}, {x: 5, y: 2}, {x: 9, y: 2}, {x: 10, y: 2},
      {x: 0, y: 4}, {x: 1, y: 4}, {x: 2, y: 4}, {x: 5, y: 4}, {x: 6, y: 4}, {x: 8, y: 4}, {x: 9, y: 4}, {x: 12, y: 4}, {x: 13, y: 4}, {x: 14, y: 4},
      {x: 2, y: 5}, {x: 4, y: 5}, {x: 6, y: 5}, {x: 8, y: 5}, {x: 10, y: 5}, {x: 12, y: 5}, {x: 8, y: 5},
      {x: 4, y: 6}, {x: 5, y: 6}, {x: 9, y: 6}, {x: 10, y: 6},
      {x: 4, y: 8}, {x: 5, y: 8}, {x: 9, y: 8}, {x: 10, y: 8},
      {x: 2, y: 9}, {x: 4, y: 9}, {x: 6, y: 9}, {x: 8, y: 9}, {x: 10, y: 9}, {x: 12, y: 9}, {x: 8, y: 9},
      {x: 0, y: 10}, {x: 1, y: 10}, {x: 2, y: 10}, {x: 5, y: 10}, {x: 6, y: 10}, {x: 8, y: 10}, {x: 9, y: 10}, {x: 12, y: 10}, {x: 13, y: 10}, {x: 14, y: 10},
      {x: 4, y: 12}, {x: 5, y: 12}, {x: 9, y: 12}, {x: 10, y: 12},
      {x: 4, y: 13}, {x: 10, y: 13},
      {x: 4, y: 14}, {x: 10, y: 14}
    ]
  }, {
    name: 'Pentadecathlon',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/I-Column.gif',
    details: '(period 15)',
    points:  [
      {x: 1, y: 0},
      {x: 1, y: 1},
      {x: 0, y: 2}, {x: 2, y: 2},
      {x: 1, y: 3},
      {x: 1, y: 4},
      {x: 1, y: 5},
      {x: 1, y: 6},
      {x: 0, y: 7}, {x: 2, y: 7},
      {x: 1, y: 8},
      {x: 1, y: 9}
    ]
  }, {
    name: 'Glider',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Game_of_life_animated_glider.gif',
    details: 'it moves across the grid cell\'s',
    points:  [
      {x: 1, y: 0},
      {x: 2, y: 1},
      {x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}
    ]
  }, {
    name: 'Lightweight spaceship (LWSS)',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Game_of_life_animated_LWSS.gif',
    details: 'it moves across the grid cell\'s',
    points:  [
      {x: 0, y: 0}, {x: 3, y: 0},
      {x: 4, y: 1},
      {x: 0, y: 2}, {x: 4, y: 2},
      {x: 1, y: 3}, {x: 2, y: 3}, {x: 3, y: 3}, {x: 4, y: 3}
    ]
  }
]);