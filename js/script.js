initiateTable = function() {
  document.getElementById("numTable").innerHTML = "<tr><td>T</td><td>X</td><td>V</td><td>A</td></tr>";
}

var ctx = "";
initiateGraph = function() {
  ctx = document.getElementById("graph").getContext("2d");
  ctx.fillStyle="black";
  ctx.fillRect(18, 20, 2, 600);
  ctx.fillRect(18, 620, 602, 2);
  ctx.fillRect(14, 319, 10, 2);
}

processData = function(l){
  createLine(l);
  plot(l);
}

createLine = function(l) {
  var str = "<tr>";
  for(var i=0; i<l.length;i++){
    str += "<td>"+ l[i] +"</td>";
  }
  str+="</tr>";
  document.getElementById("numTable").innerHTML+=str;
}

plot = function(l) {
  ctx.fillRect(l[0]*30 + 20,640 - (l[1]*75 + 320), 2, 2);
}
