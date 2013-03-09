
SVG.BBox = function(element) {
  /* actual, native bounding box */
  var box = element.node.getBBox()
  
  /* include translations on x an y */
  this.x = box.x + element.trans.x
  this.y = box.y + element.trans.y
  
  /* add the center */
  this.cx = box.x + element.trans.x + box.width / 2
  this.cy = box.y + element.trans.y + box.height / 2
  
  /* plain width and height */
  this.width  = box.width
  this.height = box.height
  
}