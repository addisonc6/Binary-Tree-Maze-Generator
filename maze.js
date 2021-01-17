function drawBinaryAlg() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "#ebe423";
      lineWidth = document.getElementById("width").value / 3
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      var offset = 200;
      ctx.moveTo(0,0);
      var i, j;
      var slider = document.getElementById("size");
      var s = parseInt(slider.value) * 4 + 4;
      var xCells = (canvas.width / s) - 4;
      var yCells = (canvas.height / s) - 4;
      for(i = 0; i < yCells; i++){
        var yLevel = s * i + s;
        for(j = 0; j < xCells; j++){
          if(Math.round(Math.random())){
            ctx.moveTo(s * j + s + offset, yLevel);
            ctx.lineTo(s * j + s + offset,  yLevel + s);
            ctx.stroke();
          }
          else{
            ctx.moveTo(s * j + s + offset,  yLevel);
            ctx.lineTo(s* j + (2*s) + offset,  yLevel);
            ctx.stroke();
          }
        }
      }
      ctx.closePath();
    }
  }