//alert(-5);
function R(n) { return Math.floor(n*Math.random()); }


r1x = 512;
r1y = 512;

r = 100;

r2x = r1x + r;
r2y = r1y;

//alert(-4);

v1m = 1; //0;
v1th = 180*Math.PI/180; //R(360)*Math.PI/180;

v2m = 11.8921;
v2th = 90*Math.PI/180;

v1x = v1m*Math.cos(v1th);
v1y = v1m*Math.sin(v1th);

v2x = v2m*Math.cos(v2th);
v2y = v2m*Math.sin(v2th);

m1 = 1840;
m2 = 1;

k = 20000;

// F = k/d^2

//alert(0);

function d2() { return (r1x - r2x)**2 + (r1y - r2y)**2; }
function a1() { return k/(m1*d2()); }
function a1x() { return a1()*Math.cos(Math.atan2(r2y - r1y, r2x - r1x)); }
function a1y() { return a1()*Math.sin(Math.atan2(r2y - r1y, r2x - r1x)); }
function a2() { return k/(m2*d2()); }
function a2x() { return a2()*Math.cos(Math.atan2(r1y - r2y, r1x - r2x)); }
function a2y() { return a2()*Math.sin(Math.atan2(r1y - r2y, r1x - r2x)); }


function integratenum(f, a, b, dt){
  var sum = 0;
  for (var x=a; x<b; x+=dt){
    sum += (f(x)*dt);
  }
  return sum;
}

function integrate2(f, a, b, dt){
  var sum = [0];
  for (var x=a; x<b; x+=dt){
    sum.push((f(x)*dt));
  }
  return sum;
}

//function totalsum


function load(){}

DT = 0.00001;

t = 0;

//alert(1);

function step(dt){  //dt fixo, botar depois
	a = t;
	b = t + dt;
	n = 1000;
	dtt = (b-a)/n;
	for (x=a;x<b;x+=dtt){
		v1x+=a1x()*dtt;
		v1y+=a1y()*dtt;
		v2x+=a2x()*dtt;
		v2y+=a2y()*dtt;
		r1x+=v1x*dtt;
		r1y+=v1y*dtt;
		r2x+=v2x*dtt;
		r2y+=v2y*dtt;
	}
}

function draw(){
	myctx.fillStyle = "red";
	myctx.fillRect(r1x, r1y, 1, 1);
	myctx.fillStyle = "blue";
	myctx.fillRect(r2x, r2y, 1, 1);
}



function start(){
	load();
	setInterval(function () { step(1/30); draw(); }, 33);
}


start();
