function newvec(x,y){
  return {x:x,y:y};
}

function sumvec(v1,v2){
  return newvec(v1.x+v2.x,v1.y+v2.y);
}

function scalevec(a, v1){
  return newvec(a*v1.x, a*v1.y); 
}

function subvec(v1, v2){
  return sumvec(v1, scalevec(-1, v2));
}

function dotvec(v1, v2){
  return v1.x*v2.x + v1.y*v2.y;
}

function mag2vec(v){
  return dotvec(v, v);
}

function magvec(v){
  return Math.sqrt(dotvec(v,v));
}



function newtri(v1,v2,v3){
  return {v1:v1, v2:v2, v3:v3};
}

function linha(p1,v1){
  return function (x, y) { return (v1.y*(x-p1.x) - v1.x*(y-p1.y)); };
}

function memosig(s1,s2){
  return (s1 == 0 && s2 == 0) || (s2 != 0 && s1/s2 > 0);
}

function vinsidetri(v,tri){
  var linha1 = linha(tri.v1, subvec(tri.v2, tri.v1));
  var sig1 = linha1(tri.v3.x, tri.v3.y);
  var vv1 = linha1(v.x, v.y);
  var linha2 = linha(tri.v2, subvec(tri.v3, tri.v2));
  var sig2 = linha2(tri.v1.x, tri.v1.y);
  var vv2 = linha2(v.x, v.y);
  var linha3 = linha(tri.v3, subvec(tri.v1, tri.v3));
  var sig3 = linha3(tri.v2.x, tri.v2.y);
  var vv3 = linha3(v.x, v.y);
  return memosig(sig1, vv1) && memosig(sig2, vv2) && memosig(sig3, vv3);  //dentro && dentro && dentro
}

function tricoll(tri1, tri2){
  var strikes1 = 0;
  var strikes2 = 0;
  //checa vertices dentro do outro triangulo
  for (v in tri1) {
    if (vinsidetri(v, tri2){
      return true;
    }
  }
  for (v2 in tri2){
    if (vinsidetri(v2, tri1){
      return true;
    }
  }
  return false;
}
