//Script

let burgerMenu= document.querySelector('.burger-menu'),
    navMenu= document.querySelector('header nav');

burgerMenu.addEventListener('click', function(){
    navMenu.classList.toggle('show');
});

let socialMedia= document.querySelectorAll('.social-media a')

socialMedia.forEach(function(item){
  item.addEventListener('mouseover', function(){
    socialMedia.forEach(function(item){
      item.classList.remove('active');
    });
       item.classList.add('active');
    });
});
