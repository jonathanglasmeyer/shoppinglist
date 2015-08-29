import {vector} from './helpers';

/*eslint-disable */
var Spline = function(options) {

  this.points = options.points || [];
  this.resolution = options.resolution || 1000;
  this.tension = options.tension || 0.85;

  this.centers = [];
  this.controls = [];
  // this.stepLength = options.stepLength || 60;
  this.length = this.points.length;
  this.delay = 0;
  // this is to ensure compatibility with the 2d version
  for(var i=0; i<this.length; i++) this.points[i].z = this.points[i].z || 0;
  for(var i=0; i<this.length-1; i++){
    var p1 = this.points[i];
    var p2 = this.points[i+1];
    this.centers.push({x:(p1.x+p2.x)/2, y:(p1.y+p2.y)/2, z:(p1.z+p2.z)/2});
  }
  this.controls.push([this.points[0],this.points[0]]);
  for(var i=0; i<this.centers.length-1; i++){
    var p1 = this.centers[i];
    var p2 = this.centers[i+1];
    var dx = this.points[i+1].x-(this.centers[i].x+this.centers[i+1].x)/2;
    var dy = this.points[i+1].y-(this.centers[i].y+this.centers[i+1].y)/2;
    var dz = this.points[i+1].z-(this.centers[i].y+this.centers[i+1].z)/2;
    this.controls.push([{
      x:(1.0-this.tension)*this.points[i+1].x+this.tension*(this.centers[i].x+dx),
      y:(1.0-this.tension)*this.points[i+1].y+this.tension*(this.centers[i].y+dy),
      z:(1.0-this.tension)*this.points[i+1].z+this.tension*(this.centers[i].z+dz)},
      {
        x:(1.0-this.tension)*this.points[i+1].x+this.tension*(this.centers[i+1].x+dx),
        y:(1.0-this.tension)*this.points[i+1].y+this.tension*(this.centers[i+1].y+dy),
        z:(1.0-this.tension)*this.points[i+1].z+this.tension*(this.centers[i+1].z+dz)}]);
  }
  this.controls.push([this.points[this.length-1],this.points[this.length-1]]);

  return this;
}
Spline.prototype.pos = function(t){

  function bezier(t, p1, c1, c2, p2){
    var B = function(t) {
      var t2=t*t, t3=t2*t;
      return [(t3),(3*t2*(1-t)),(3*t*(1-t)*(1-t)),((1-t)*(1-t)*(1-t))]
    }
    var b = B(t)
      var pos = {
        x : p2.x * b[0] + c2.x * b[1] +c1.x * b[2] + p1.x * b[3],
        y : p2.y * b[0] + c2.y * b[1] +c1.y * b[2] + p1.y * b[3],
        z : p2.z * b[0] + c2.z * b[1] +c1.z * b[2] + p1.z * b[3]
      }
    return pos;
  }
  var t = t;
  if(t<0) t=0;
  if(t>this.resolution) t=this.resolution-1;

  var t2 = (t)/this.resolution;
  if(t2>=1) return this.points[this.length-1];

  var n = Math.floor((this.points.length-1)*t2);
  var t1 = (this.length-1)*t2-n;

  return bezier(t1,this.points[n],this.controls[n][1],this.controls[n+1][0],this.points[n+1]);
}

Spline.prototype.draw = function(ctx,color,thickness){
  ctx.strokeStyle = color || "#7e5e38"; // line color
  ctx.lineWidth = thickness || 8;
  ctx.beginPath();
  var pos;
  for(var i=0; i<this.resolution; i++){
    pos = this.pos(i); //bezier(i/max,p1, c1, c2, p2);
    // if(Math.floor(i/100)%2==0) ctx.lineTo(pos.x, pos.y);
    if(i!=0) ctx.lineTo(pos.x, pos.y);
    else ctx.moveTo(pos.x, pos.y);
  }
  ctx.stroke();
  return this;
}
/*eslint-enable */

export default Spline;

export function buildSpline({intensity, padding, height, step}) {
  const points = [];
  let firstY;

  for (let i = 0; i <= intensity; i++) {
    let y = padding + Math.random() * (height - padding * 2);

    // first and last y position have to be the same
    if (i === 0) {
      firstY = y;
    }

    // if last : set to first
    if (i === intensity) {
      y = firstY;
    }

    points[i] = vector({x: step * i, y});
  }

  return new Spline({points});
}

