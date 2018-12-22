(function(){

    let flakeNum = 20;
    let pic = new Image(5,5);
    pic.src = "https://i.pinimg.com/originals/53/8f/81/538f816fdecb460e0d80ec4037cefa27.png";
    let d = document;
    let deg = 180/3.14;
    let rad = 3.14/180;
    let idx = (typeof d.getElementsByTagName != "undefined")?d.getElementsByTagName('div').length:0;
    let f = {w:0,h:0,cx:0,cy:0,flake:[],x:[],y:[],cutRight:[],cutLeft:[],dst:[],size:[],vel:[],acc:[],blo:[],rate:[],rng:[],ang:[],counter:[]}

    let con = d.createElement('div');
    con.setAttribute('style','display:block;'
        +'position:fixed;'
        +'height:100%;width:100%;'
        +'margin:auto;padding:0px;'
        +'top:0;left:0;left:0;right:0;'
        +'overflow:hidden;'
        +'visibility:hidden;');
    d.body.appendChild(con);

    for (let i = 0; i < flakeNum; i++) {
        f.counter[i] = 0;
        let img = d.createElement('img');
        img.setAttribute('id','flake'+(idx+i));
        img.setAttribute('src',pic.src);
        img.setAttribute('style','display:none;'
            +'position:absolute;'
            +'transform: translate3d(0px,0px,0)'
            +'height:5vh;width:5vh;'
            +'visibility:visible;');
        con.appendChild(img);
    }

    function win() {
        let ddw = d.documentElement.clientWidth;
        let ddh = d.documentElement.clientHeight;
        let scrollBarRight = (typeof ddw == 'number') ? window.innerWidth - ddw : 0;
        let scrollBarBottom = (typeof ddh == 'number') ? window.innerHeight - ddh : 0;
        f.h = window.innerHeight - scrollBarBottom -1;
        f.w = window.innerWidth - scrollBarRight -1;
        f.cy = f.h/2|0;
        f.cx = f.w/2|0;
    }

    function rsz() {
        win();
        for (let i = 0; i < flakeNum; i++) {
            f.flake[i].style.display = 'none';
            f.counter[i] = 0;
            rst(i);
        }
    }
    window.addEventListener("resize", rsz, false);

    function rst(s) {
        if (f.counter[s] > 1) {
            f.flake[s].style.display = 'block';
        }
        if (f.counter[s] < 2) {
            f.counter[s]++;
        }
        f.cutLeft[s] =Math.random() * f.cx/2;
        f.cutRight[s] = f.w - Math.random() * f.cx/2;
        f.y[s] = Math.random() * f.h;
        f.x[s] = (f.cx - f.cx/3) + Math.random() * f.cx/1.5;
        f.rng[s] = f.cx-100 + Math.random() * 200;
        let dy = (f.y[s] - f.cy/6);
        let dx = (f.x[s] - f.rng[s]);
        f.ang[s] = Math.atan2(dy,dx) * deg;
        f.dst[s] = 5 + (Math.sqrt(dy*dy + dx*dx));
        f.size[s] = 0.1;
        f.acc[s] = 0;
        f.blo[s] = 0;
        f.vel[s] = (1.8 * (f.dst[s] / 2) / 100);
        f.rate[s] = (-0.01 + Math.random() * 0.02);
    }

    function animate() {
        for (let i = 0; i < flakeNum; i++){
            f.y[i] += f.vel[i] * Math.sin((f.ang[i]) * rad);
            f.x[i] += f.vel[i] * Math.cos((f.ang[i]+=f.blo[i]) * rad);
            f.acc[i] = (f.vel[i] / (f.dst[i] + (400 * f.vel[i] / 100)) * f.vel[i]);
            f.vel[i] += f.acc[i];
            f.size[i] += ((f.vel[i] * 0.6) / (190 * f.dst[i] / 100));
            f.blo[i] += f.rate[i];
            if (f.y[i] < -f.cy/2) {
                f.ang[i]  *= -1;
            }
            if (f.x[i]+f.size[i] < f.cutLeft[i] || f.x[i] > f.cutRight[i] || f.y[i] > f.h || f.x[i] > f.w || f.x[i]+f.size[i] < 0){
                rst(i);
            }
            f.flake[i].style.transform = 'translate3d('+f.x[i]+'px, '+f.y[i]+'px,0) scale('+f.size[i]+')';
        }
    }

    function run() {
        requestAnimationFrame(run);
        animate();
    }

    function init() {
        win();
        for (let i = 0; i < flakeNum; i++){
            f.flake[i] = d.getElementById("flake"+(idx+i));
            rst(i);
        }
        run();
    }
    window.addEventListener("load",init,false);

})();