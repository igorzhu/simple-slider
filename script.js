$(function(){
		   
	
	$('.pics li:last-child').clone().prependTo('.pics');
	$('.pics li:nth-child(2)').clone().appendTo('.pics');
		   
	var picsN = $('.pics li').length,                 //количество картинок
		picW = $('.pics li img').width(),			  //ширина одной картинки в слайдере
		picsW = picW * picsN,    					  //ширина блока с картинками
		transition = 700;                             //скорость прокрутки слайда (ms)
	
	$('.pics').width(picsW);
		   
	var shiftVal = -picW,
		slideCounter = 1;

		
	$('.pics').css({		   
		left: shiftVal    // Устанавливаем слайдер на первый слайд
	});
	
	$('body').on('click', '.r_arrow', function(e){	
											   
		if ($(':animated').length) {
			return false;
		}									   
		
		if( slideCounter < picsN-2 )
			{
				shiftVal -= picW;
				slideCounter++;
				
				$('.pics').animate({
					left:  shiftVal
				}, transition);
				
			}
						
		else
			{
				shiftVal -= picW;
				
				$('.pics').animate({
					left:  shiftVal
				}, transition, function(){
						$('.pics').css({
							left: -picW
						});
					}
				);
				
				slideCounter = 1;
				shiftVal = -picW;
			}
		
		e.preventDefault();
	});
	
	
	$('body').on('click', '.l_arrow', function(e){	
											   
		if ($(':animated').length) {
			return false;
		}										   
											   
		if( slideCounter > 1 )
			{
				shiftVal += picW;
				slideCounter--;
				
				$('.pics').animate({
					left:  shiftVal
				}, transition);
			}
			
		else
			{
				shiftVal += picW;
				
				$('.pics').animate({
					left:  shiftVal
				}, transition, function(){
					
						shiftVal = -(picW * (picsN - 2)) ;
						
						$('.pics').css({
							left: shiftVal
						});
					}
				);

				slideCounter = picsN - 2;
				
			}
		
		e.preventDefault();
	});
	
}); 
