

var image;
var grayimage;
function upload(){
 
  var input=document.getElementById("id1");
  var fileinput=document.getElementById("finput");
  image= new SimpleImage(fileinput);
  grayimage=new SimpleImage(fileinput);
  image.drawTo(input); 
}

function makeGray(){
  for(var pixel of grayimage.values()){
  var average=((pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3)  
    pixel.setRed(average);
    pixel.setGreen(average);
    pixel.setBlue(average);
  }
  var imgcanvas = document.getElementById("id2");
  grayimage.drawTo(imgcanvas);
}