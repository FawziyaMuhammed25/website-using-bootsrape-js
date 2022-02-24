var img = Array.from(document.querySelectorAll("img")); // array
var parent =document.querySelector(".parentOverLay ");
var close = document.querySelector("#close"); // icon of close 
var childLayer =document.querySelector(".childLayer");
var next = document.querySelector("#next"); // right arrow.
var currentImg;
var prev = document.querySelector("#prev"); // left arrow.


//==============Show==============================================

for( i=0 ; i<img.length;i++)
{
     img[i].addEventListener("click" , parentLayer );
}

function parentLayer(eInfo)
{
     var imgSrc =eInfo.target.src;

     childLayer.style.backgroundImage =`url(${imgSrc})`;

    parent.classList.replace("d-none","d-flex");
    // مكانها فين 
   currentImg = img.indexOf(eInfo.target);
};
//==============closing=======================================
close.addEventListener("click",closeParentLayer );
function closeParentLayer()
{
    parent.classList.replace("d-flex","d-none");
};
//============================== Next ===================================

next.addEventListener("click",nextOperation); // Event 
function nextOperation()
{
     currentImg++;
     if( currentImg>=img.length)
     {
         currentImg=0;
     };
      
    var nextImg = img[currentImg].src;
    childLayer.style.backgroundImage =`url(${nextImg})`  

}; // action 
//================ prev ===============================
prev.addEventListener("click" , prevOperation); // Event.

function prevOperation()
{
    currentImg -- ;
    if(currentImg<0)
    {
        currentImg=img.length - 1; //5
    }
   var prevImg = img[currentImg].src;
   childLayer.style.backgroundImage=`url(${prevImg})`


};

//============ Key =============================================

document.addEventListener("keydown", function( eInfo){

       
       if(eInfo.key =="ArrowRight")
       {
            nextOperation();
       }
       else if (eInfo.key=="ArrowLeft") {
           prevOperation();
           
       } 
       else if (eInfo.key=="Escape") {
           closeParentLayer();
           
       }
       else if (eInfo.key == "f12") {

        eInfo.preventDefault();
           
       }
       
} );
 
//==================== closing parentLayer ==========================

document.addEventListener("click", closing );
function closing(eInfo)
{
     if (eInfo.target == parent) {

         closeParentLayer();
     }

};
//====================================================

document.addEventListener("contextmenu" , function(eInfo){
      eInfo.preventDefault();
});