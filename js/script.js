createLine = function(l) {
  var str = "<tr>";
  for(var i=0; i<l.length;i++){
    str += "<td>"+ l[i] +"</td>";
  }
  str+="</tr>";
  document.getElementById("numTable").innerHTML+=str;
}
