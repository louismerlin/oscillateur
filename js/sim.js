var m = 1,
    k = 1,
    t = 0,
    x = 1,
    v = 0,
    dt = 0.001,
    tf = 20;

for (t=0; t<=tf; t+=dt) {
  t = +t.toFixed(3);
  var f = -k * x;
  var a = f / m;
  v = v + a * dt;
  x = x + v * dt;
  console.log(t + " " + x + " " + v + " " + a);
}
