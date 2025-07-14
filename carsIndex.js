var text = document.querySelector('.text')
function scrolListener(e){
  var screenTop = document.scrollingElement.scrollTop;
  var screenBottom = screenTop + innerHeight;
  var textTop = text.getBoundingClientRect().top
  
  if ( textTop < screenBottom && textTop < screenTop)
  {
    text.children[0].classList.add("showText");
    text.children[0].classList.remove("hideText");
  }
  
}

document.onscroll = scrolListener


document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.mobile-nav').classList.toggle('fl');
    console.log('helo');

  });

function caFunc(){
  console.log('Fine');
}
// window.onload = function() {
//   window.scrollTo(0, document.body.scrollHeight);
// };

// document.querySelector('.burger').addEventListener('click', function(){
//     document.querySelector('.mobile-nav').classList.toggle('paraH');
// });

// function clickMe(){
//     // ar = [1,2,3,4,5,6,7,8,9,10,11,12];
//     // let x = 0
//     // while(x < ar.length){
//     //     console.log(ar[x])
//     //     x += 1;
//     // }
//     const hour = 1
//     if (hour <= 11) {
//         console.log('red')
//       } else if (hour >= 12 && hour <= 18) {
//         console.log('green')
        
//       } else if (hour > 18) {
//         console.log('blue')
//       }
// }
// clickMe();