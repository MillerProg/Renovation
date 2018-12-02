var imageArray = [["images/gallery3/g3i1.jpg","images/gallery3/g3i2.jpg"], ["images/gallery2/g2i1.jpg","images/gallery2/g2i2.jpg","images/gallery2/g2i3.jpg","images/gallery2/g2i4.jpg"], ["images/gallery1/g1i1.jpg","images/gallery1/g1i2.jpg","images/gallery1/g1i3.jpg"]];
var galleryArray = ["ул. Долгоозерная","пр. Маршала Блюхера","Лисий Нос"];         
var gall=2;				    
window.number = '0';                
var imageCount;            
function img_big_click() {  
    window.location = "gallery.html?galleryNom="+gall;      
}
function gallery_img (x) {
    window.number = '0';
    gall = x;
    document.querySelector('#gallery_h2').innerHTML = galleryArray[x];
    imageCount = imageArray[gall].length;
    document.getElementById('images').src = imageArray[x][0];                
    document.getElementById('image_blur').style.backgroundImage = 'url('+imageArray[x][0]+')';                
    document.getElementById('image_blur').setAttribute( "class", "");
    setTimeout( function() {
        document.getElementById('image_blur').setAttribute( "class", "image_blur" );
    }, 2);
}
function image(num){
    imageCount = imageArray[gall].length;
            if(num == 1){
                if(number < imageCount - 1){
                    number++;
                    document.getElementById('images').src = imageArray[gall][number];
                    document.getElementById('num_img').innerHTML= number + 1 + '/' + imageCount;
                }
            }					 
            else{ 
                if(number > 0){
                    number--;
                    document.getElementById('images').src = imageArray[gall][number];
                    document.getElementById('num_img').innerHTML= number + 1 + '/' + imageCount;
                }
            }
        }
function btn_show(){
    document.getElementById('left').style.display='block';
    document.getElementById('right').style.display='block';
}
function galleryLoad() {
            var galleryNom = window.location.href.split("?")[1].split("=")[1];
                img_load(galleryNom);
}
function img_load(il) {
    var gall_i = il;
    document.write('<div class="wrapper">');
    imageCount = imageArray[gall_i].length;
    for(i = 0; i < imageCount; i++){
        document.write('<img src="'+imageArray[gall_i][i]+'" class="g_image" alt="photo" />');
    }
    document.write('</div>');
}

