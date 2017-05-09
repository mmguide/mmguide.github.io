
      // needs cleaned up :) 
      var chars = '⚧田由M甲申甴电☫甶0男甸A甹町画甼甽甾T甿畀畁畂∞畃R畄畅畆畇I≌畈畉畊畋X界畍⩰畎畏畐Q畑ॐ'; // om
        chars = chars.split(''); // make array
        var font_size = 8;

      AFRAME.registerComponent("amatrix", {
        dependencies: ["draw"],
        init: function(){ 
        this.draw = this.el.components.draw; //get access to the draw component
        this.draw.canvas.width = '1024';
        this.draw.canvas.height = '1024';
        this.cnvs = this.draw.canvas;
        var columns = this.cnvs.width/font_size;
            this.drops = [];
            for(var x=0;x<columns;x++){
            this.drops[x]=1;
            }
            this.ctx = this.draw.ctx;
      },
      tick: function(){
        this.ctx.fillStyle = 'rgba(0,0,0,0.05)';
        this.ctx.fillRect(0,0,this.cnvs.width,this.cnvs.height);
        this.ctx.fillStyle = '#0F0';
        this.ctx.font = font_size + 'px helvetica';
        for(var i=0;i<this.drops.length;i++){
            var txt = chars[Math.floor(Math.random()*chars.length)];
            this.ctx.fillText(txt,i*font_size, this.drops[i]*font_size);   
            if(this.drops[i]*font_size>this.cnvs.height&&Math.random()>0.975){
            this.drops[i] = 0; // back to the top!   
            }
            this.drops[i]++;
        }
        this.draw.render(); 
      }
    });