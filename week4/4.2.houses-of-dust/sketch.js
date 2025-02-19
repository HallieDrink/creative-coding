
let poem = '';

let grammar = tracery.createGrammar({
  "origin":["A HOUSE OF #material#\n#place#\nUSING #light#\nINHABITED BY #inhabitants#"];
  "material":["MUD","BRICKS", "LEAVES", "WEEDS", "GLASS", "STRAW", "DUST", "WOOD", "PAPER", "SAND", "STONE", "TIN", "DISCARDED CLOTHING"];
  "place":["IN A GREEN", "MOSSY TERRAIN", "IN AN OVERPOPULATED AREA", "BY THE SEA", "BY AN ABANDONED LAKE", "IN A DESERT", "IN A DESERTED FACTORY", "IN DENSE WOODS", "IN JAPAN", "AMONG SMALL HILLS", "IN SOUTHERN FRANCE", "AMONG HIGH MOUNTAINS", "ON AN ISLAND", "ON OPEN GROUND", "IN A COLD, WINDY CLIMATE", "IN A PLACE WITH BOTH HEAVY RAIN AND BRIGHT SUN", "IN A DESERTED AIRPORT", "IN A HOT CLIMATE", "INSIDE A MOUNTAIN"];
  "light":["CANDLES", "ALL AVAILABLE LIGHTING", "ELECTRICITY", "NATURAL LIGHT", "LOVERS"];
  "inhabitants":["PEOPLE WHO SLEEP VERY LITTLE", "VEGETARIANS", "HORSES AND BIRDS", "PEOPLE SPEAKING MANY LANGUAGES WEARING LITTLE OR NO CLOTHING", "ALL RACES OF MEN REPRESENTED WEARING PREDOMINANTLY RED CLOTHING", "CHILDREN AND OLD PEOPLE","FRIENDS", "FRENCH AND GERMAN SPEAKING PEOPLE", "FISHERMEN AND FAMILIES", "PEOPLE WHO LOVE TO READ"];
})

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(220);
  poem = grammar.flatten("#origin#");
  textFont("Impact")
  textSize(25);
  text(poem, 200,200);
}






 