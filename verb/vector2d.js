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

function unitvec(v){
  var mag = magvec(v);
  if (mag != 0){
    return scalevec(1/mag, v);
  }
  return v;
}
