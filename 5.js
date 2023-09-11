var torch = document.getElementById("torch");
var body = document.getElementsByTagName("body")[0]
var lamp = true;
body.onmousemove = function move(e){
    // var x = e.pageX;
    // var y = e.pageY;
    console.log(e.clientX, 'client x')
    console.log(e.screenX, 'screen x')
    console.log(e.pageX, 'page x')
    console.log(e.clientY, 'client y')
    console.log(e.screenY, 'screen y')
    console.log(e.pageY, 'page y')
    var x = e.clientX;
    var y = e.clientY;
    var width = torch.offsetWidth;
    var height = torch.offsetHeight;
    torch.style.left = x-width/2+'px';
    torch.style.top = y-height/2+'px';
    // client واحد پیکسلی که توی خود اچ تی ام ال هست.
    // screen واحد پیکسلی که توی مانیتور کسی که میبینه هست.
    // page واحد پیکسلی که توی خود اچ تی ام ال هست. اما در مورد صفحه های اسکرول دار اضافه میشه به قبلی ها در حالی که کلاینت صفحه در حال مشاهده هست.
};
// 1px = (100vw / [document.documentElement.clientWidth] px)
body.onclick = function(){
    lamp = !lamp;
    torch.style.display=(lamp == true? 'block' : 'none');
    // lamp == true? torch.style.display='block': torch.style.display='none';
    // if (lamp==true){
    //     torch.style.display = 'block';
    // }
    // else{
    //     torch.style.display = 'none';
    // }
}

body.addEventListener("wheel", myFunction);
function myFunction(e) {
    var zoom = e.deltaY>0?-10:10;
    var x = e.clientX;
    var y = e.clientY;
    if (lamp){ // یه باگی داشت که وقتی چراغ رو خاموش میکردی و اسکرول رو میچرخوندی سایزش صفر میشد. برای رفع این باگ این قسمت رو نوشتم.
        var width = torch.offsetWidth;
        var height = torch.offsetHeight;
    }
    width += zoom;
    height += zoom;
    torch.style.width=width+'px';
    torch.style.height=height+'px';
    torch.style.left = x-width/2+'px';
    torch.style.top = y-height/2+'px';
}