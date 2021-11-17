world = {
  rad: 10,
  col: 15,

  map: [
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    -1, -1, -1, -1, 83, 85, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
    99, 101, -1, -1, -1, -1, -1, -1, -1, 141, 84, 84, 84, 84, 84, 100, 100, 84,
    84, 84, 85, -1, -1, 83, 84, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    100, 101, -1, -1, 99, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    101, -1, -1, 99, 100,
  ],
  width: 480,
  height: 320,
};
var context = document.querySelector("canvas").getContext("2d");
var buffer = document.createElement("canvas").getContext("2d");

tile_sheet = {
  image: new Image(),
  columns: 16,
  tile_height: 32,
  tile_width: 32,
};
function loop() {
  for (let index = world.map.length - 1; index > -1; --index) {
    var value = world.map[index];
    var source_x =
      (value % this.tile_sheet.columns) * this.tile_sheet.tile_width;
    var source_y =
      Math.floor(value / this.tile_sheet.columns) * this.tile_sheet.tile_height;
    var destination_x = (index % world.col) * this.tile_sheet.tile_width;
    var destination_y =
      Math.floor(index / world.col) * this.tile_sheet.tile_height;
    this.buffer.drawImage(
      this.tile_sheet.image,
      source_x,
      source_y,
      this.tile_sheet.tile_width,
      this.tile_sheet.tile_height,
      destination_x,
      destination_y,
      this.tile_sheet.tile_width,
      this.tile_sheet.tile_height
    );
  }
  this.context.scale(1, 1);
  this.context.drawImage(
    this.buffer.canvas,
    0,
    0,
    world.width,
    world.height,
    0,
    0,
    this.context.canvas.width,
    this.context.canvas.height
  );
  death.innerHTML = "Deaths: " + deathcount;
}

tile_sheet.image.addEventListener("load", function (event) {
  buffer.canvas.height = world.height;
  buffer.canvas.width = world.width;
});
tile_sheet.image.src = "bilder/pixel_platform_01_tileset_final.png";
