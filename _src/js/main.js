/*=========================================================================================
// INICIO MAIN JS
========================================================================================= */


jQuery(function($) {
	$(document).ready(function() {


// ==========================
// Menu Toggle
// ==========================

     $(".e-Toglle").click(function(event){
         event.preventDefault();
         varId = $(this).attr('id');
         varWidthWindow = $(window).width();
         
          if ($(this).hasClass('a-hzt')){
                varSide = 'a-hztResize';
             } else {
                varSide = '';
             }

            
         if ($(this).hasClass('u-isExpanded')){

            //$('body').css({'overflow':'scroll'});
            $(this).removeClass('u-isExpanded');
            $(this).addClass('u-isCollapsed');
                 $('#'+varId+'-container').stop().removeClass('u-isExpanded '+varSide);
                 $('#'+varId+'-container').stop().addClass('u-isCollapsed '+varSide);
                 //if( varId == 'MainNavigation' || varWidthWindow <= 480 ) { $('body').removeClass('u-isScrollOff'); }
                 $('#'+varId+'.SwitchIcon.u-isCollapsed .u-icon').show();
                 $('#'+varId+'.SwitchIcon .iconClose').hide();
                 $('.NavigationLink.Item-level1.is-hasSubMenu, .Navigation--subMenu').removeClass('u-isExpanded');
                 $('.NavigationLink.Item-level1.is-hasSubMenu, .Navigation--subMenu').addClass('u-isCollapsed');
                 
         }else{

            // $('body').css({'overflow':'hidden'});
             $('.u-contentHide, .u-contentHide--button, .Navigation .is-hasSubMenu, .Navigation--subMenu').removeClass('u-isExpanded').addClass('u-isCollapsed');
             $(this).removeClass('u-isCollapsed');
             $(this).addClass('u-isExpanded');
                 $('#'+varId+'-container').stop().removeClass('u-isCollapsed '+varSide);
                 $('#'+varId+'-container').stop().addClass('u-isExpanded '+varSide);
                 //if( varId == 'MainNavigation' || varWidthWindow <= 480 ) { $('body').addClass('u-isScrollOff'); }
                 $('#'+varId+'.SwitchIcon.u-isExpanded .u-icon').hide();
                 $('#'+varId+'.SwitchIcon .iconClose').show();
             }
     });



//=======================================================
//Aplica a animação no scroll mediante clique no menu
//=======================================================



    $(".u-isScrollDown").click(function(event){        
        event.preventDefault();
        
       

        $('html,body').animate({scrollTop:$(this.hash).offset().top - 0}, 1000);

          if ($(".Navigation--main").hasClass('u-isExpanded')){
            $("#MainNavigation-container, .NavigationButton.NavigationButton--main").removeClass("u-isExpanded")
            $("#MainNavigation-container, .NavigationButton.NavigationButton--main").addClass("u-isCollapsed");  
         }
        
        varHash = $(this).attr('href');

        
        /*if (location.hash == varHash) {
            $(this).addClass('u-isActive');
        } else {
            $(this).removeClass('u-isActive');
        }*/
        
        if(history.pushState) {
        
            history.pushState(null, null, varHash);
        
        }
        else {
        location.hash = '#myhash';
        window.location.hash = varHash;
        }

        
   });




/*$(function(){
      $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
      });
    });
*/




// =====================================
// .ScrollOn
// Detecta o Movimento da Barra de Rolagem e aplica a classe no body
// =====================================

$(window).scroll(function(){


     var scroll = jQuery(window).scrollTop();

     //Class ScrollOn
     if ( scroll > 0 ) {
      jQuery('body').addClass('u-isScrollOn');

     } else {
      jQuery('body').removeClass('u-isScrollOn');
     }

     //Class Fixed
    /* if ( scroll > 135 ) {
      jQuery('.Intro--blog-headerBar').addClass('u-isFixed');

     } else {
      jQuery('.Intro--blog-headerBar').removeClass('u-isFixed');
     }*/

});

// =====================================
// .ScrollFade
// Mostra os objetos conforme aparecem no scroll
// =====================================
 
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.u-isScrollFade').each( function(i){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 100;
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},500);
                $(this).addClass('u-isScrollFade--on'); 
                    
            }
            
        }); 
    
    });


//=======================================================
//Aplica a animação no scroll mediante clique no menu
//=======================================================

    $(".u-isScrollDown").click(function(event){        
        event.preventDefault();
        
       

        $('html,body').animate({scrollTop:$(this.hash).offset().top - 0}, 1000);

          if ($(".Navigation--main").hasClass('u-isExpanded')){
            $("#MainNavigation-container, .NavigationButton.NavigationButton--main").removeClass("u-isExpanded")
            $("#MainNavigation-container, .NavigationButton.NavigationButton--main").addClass("u-isCollapsed");  
         }
        
        varHash = $(this).attr('href');

        
        /*if (location.hash == varHash) {
            $(this).addClass('u-isActive');
        } else {
            $(this).removeClass('u-isActive');
        }*/
        
        if(history.pushState) {
        
            history.pushState(null, null, varHash);
        
        }
        else {
        location.hash = '#myhash';
        window.location.hash = varHash;
        }

        
   });


//===================================
// RESIZE
//===================================

var headerSize = $('.Site-header').height();
var headerSize = 70;

/*$( window ).resize(function() {
  $('.Intro--home').css({'padding-top' : headerSize});
});*/


//====================================
// OWL CAROUSEL
//====================================

var break_sm = 768;
var break_md = 960;
var break_lg = 1200;

$('#depoimentos-carousel').owlCarousel({
    loop:true,
    dots: true,
    nav: true,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            margin:50,
            nav:false
        },
        768:{
            items:2,
            margin:30,
            //nav:false
        },
        960:{
            items:2,
            margin:30,
            //nav:true,
        }
    }
})


$('#projetos-carousel').owlCarousel({
    loop:true,
    dots: true,
    nav: true,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            margin:0,
            nav:false
        },
        768:{
            items:2,
            margin:0,
            //nav:false
        },
        960:{
            items:4,
            margin:0,
            //nav:true,
        }
    }
})




$('#naMidia-carousel').owlCarousel({
    loop:true,
    dots: true,
    nav: true,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            margin:0,
            nav:false
        },
        768:{
            items:2,
            margin:0,
            //nav:false
        },
        960:{
            items:3,
            margin:0,
            //nav:true,
        }
    }
})




// Persnonalizando os Botões de Navegação
/*
$('#depoimentos-carousel .owl-prev').html('<svg class="Pagination-items-item-icon u-icon iconArrowLeft"><use xlink:href="#iconArrowLeft"></use></svg>').addClass('navController navController--left navController--prev navController--button navController--border u-borderRadius50 navController--button--uniSize u-positionAbsolute is-animating u-isActionable ');
$('#depoimentos-carousel .owl-next').html('<svg class="Pagination-items-item-icon u-icon iconArrowRight"><use xlink:href="#iconArrowRight"></use></svg>').addClass('navController navController--right navController--next navController--button navController--border u-borderRadius50 navController--button--uniSize u-positionAbsolute is-animating u-isActionable ');
*/
/*
$('#parcerias-carousel--control .owl-prev').html('<svg class="Pagination-items-item-icon u-icon iconArrowLeft"><use xlink:href="#iconArrowLeft"></use></svg>').addClass('navController navController--left navController--prev navController--button navController--border u-borderRadius50 u-positionAbsolute is-animating u-isActionable ');
$('#parcerias-carousel--control .owl-next').html('<svg class="Pagination-items-item-icon u-icon iconArrowRight"><use xlink:href="#iconArrowRight"></use></svg>').addClass('navController navController--right navController--next navController--button navController--border u-borderRadius50 u-positionAbsolute is-animating u-isActionable ');
*/

$('#depoimentos-carousel .owl-prev, #projetos-carousel .owl-prev, #naMidia-carousel .owl-prev').html('<svg class="NavigationButton--controllCarousel u-icon iconArrowLeft"><use xlink:href="#iconArrowLeft"></use></svg>').addClass('navController navController--left navController--prev navController--button navController--border navController--above u-borderRadius50 navController--button--uniSize u-positionAbsolute is-animating u-isActionable ');
$('#depoimentos-carousel .owl-next, #projetos-carousel .owl-next, #naMidia-carousel .owl-next').html('<svg class="NavigationButton--controllCarousel u-icon iconArrowRight"><use xlink:href="#iconArrowRight"></use></svg>').addClass('navController navController--right navController--next navController--button navController--border navController--above u-borderRadius50 navController--button--uniSize u-positionAbsolute is-animating u-isActionable ');


/*
$('#depoimentos-carousel .owl-nav').addClass('Pagination Pagination--appendJs u-marginTop--inter u-marginBottom--inter u-flex u-justifyContentCenter');
$('#depoimentos-carousel .owl-prev').html('<svg class="Pagination-items-item-icon u-icon iconArrowLeft"><use xlink:href="#iconArrowLeft"></use></svg>').addClass('navController navController--left navController--prev navController--button navController--button--largeSize navController--border u-borderRadius50 is-animating u-marginRight--inter');
$('#depoimentos-carousel .owl-next').html('<svg class="Pagination-items-item-icon u-icon iconArrowRight"><use xlink:href="#iconArrowRight"></use></svg>').addClass('navController navController--right navController--next navController--button navController--button--largeSize navController--border u-borderRadius50 is-animating u-marginRight--inter');
$('#depoimentos-carousel .owl-nav').append('<a class="navController navController--center  navController--all  navController--button  navController--border ReadMore ReadMore--background  Button ButtonLink u-lineHeight0 hover is-animating u-marginRight--inter" href="/cases/"><span class="ShowText">VER TODOS</span></a>');
*/

// Switch de Ativo / Inativo

/*var hashUrl = window.location.hash;
$(hashUrl+'--ControllLink').addClass('active');
var owl = $('.owl-carousel');
owl.owlCarousel();
owl.on('changed.owl.carousel', function(event) {
    //location.hash = event.property.value;
  var hashUrl = window.location.hash;
  $('.Section-navigation-items-item, .Pagination .navController').removeClass('active');
  $(hashUrl+'--ControllLink').addClass('active');
})
*/

// /*=========================================================================================
// // CLOSE FUNCTION
// =========================================================================================*/

	});
});



// Abre o Lightbox
function LightboxCall(iFrame) {
  //alert( "clicked" );
  jQuery('#Lightbox--container').removeClass('Lightbox--inactive');
  jQuery('#Lightbox--container').addClass('Lightbox--active');
  jQuery('.Lightbox-window-content').html( iFrame );
}
//$( ".LightboxCall" ).on( "click", LightboxCall );


// Fecha o lightbox quando a tecla ESC é pressionada
function KeyUpEsc(evt) {
 
 if (evt.keyCode == 27) {
       jQuery('#Lightbox--container').removeClass('Lightbox--active');
       jQuery('#Lightbox--container').addClass('Lightbox--inactive');
       jQuery('.Lightbox-window-content').html( '' );
    }
}

jQuery(document).on( "keyup", KeyUpEsc );

// Mais formas de Fechar o LightBox

function LightboxClose() {
  //alert( "clicked" );
    jQuery('#Lightbox--container').removeClass('Lightbox--active');
   jQuery('#Lightbox--container').addClass('Lightbox--inactive');
   jQuery('.Lightbox-window-content').html( '' );
}

jQuery( ".LightboxClose" ).on( "click", LightboxClose );
