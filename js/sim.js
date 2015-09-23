var m = 1,
    k = 1,
    t = 0,
    x = 1,
    v = 0,
    dt = 0.001,
    tf = 20;


initiateTable();
initiateGraph();
for (t=0; t<=tf; t+=dt) {
  t = +t.toFixed(3);
  var f = -k * x;
  var a = f / m;
  v = v + a * dt;
  x = x + v * dt;
  plot ([t, x.toFixed(3), v.toFixed(3), a.toFixed(3)]);
  if(t%0.5==0)
    createLine([t, x.toFixed(3), v.toFixed(3), a.toFixed(3)]);
}
