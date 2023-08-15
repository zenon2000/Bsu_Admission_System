
$(function() {

    // slider type
    $t = "new-slide"; // opitions are fade and slide
    
  	//variables
    $f = 1000,  // fade in/out speed
    $s = 1000,  // slide transition speed (for sliding carousel)
    $d = 5000;  // duration per slide
    
    $n = $('.new-slide').length; //number of slides
    $w = $('.new-slide').width(); // slide width
  	$c = $('.new-container').width(); // container width
   	$ss = $n * $w; // slideshow width
  
  	
      function new_timer() {
        $('.new-timer').animate({"width":$w}, $d);
        $('.new-timer').animate({"width":0}, 0);
    }

  
  // fading function
    function fadeInOut() {
      new_timer();
        $i = 0;    
        var setCSS = {
            'position' : 'absolute',
            'top' : '0',
            'left' : '0'
        }        
        
        $('.new-slide').css(setCSS);
        
        //show first item
        $('.new-slide').eq($i).show();
        

        setInterval(function() {
          timer();
            $('.new-slide').eq($i).fadeOut($f);
            if ($i == $n - 1) {
                $i = 0;
            } else {
                $i++;
            }
            $('.new-slide').eq($i).fadeIn($f, function() {
                $('.timer').css({'width' : '0'});
            });

        }, $d);
        
    }
    
    function slide() {
      new_timer();
        var setSlideCSS = {
            'float' : 'left',
            'display' : 'inline-block',
          	'width' : $c
        }
        var setSlideShowCSS = {
            'width' : $ss // set width of slideshow container
        }
        $('.new-slide').css(setSlideCSS);
        $('.new-slideshow').css(setSlideShowCSS); 
        
        
        setInterval(function() {
            new_timer();
            $('.new-slideshow').animate({"left": -$w}, $s, function(){
                // to create infinite loop
                $('.new-slideshow').css('left',0).append( $('.slide:first'));
            });
        }, $d);
        
    }
    
    if ($t == "fade") {
        fadeInOut();
        
    } if ($t == "slide") {
        slide();
        
    } else {
      
    }
});