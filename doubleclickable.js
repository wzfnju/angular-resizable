wzf.directive('doubleclickable',function($document){
		var count=0;
		var width,height,top,left;
		return function($scope,$element,$attr){
			$element.bind('dblclick',function(){
				if(count==0){
					width=$($element).width();
					height=$($element).height();
					top=$($element).offset().top;
					left=$($element).offset().left;
					$element.css({
						width:"100%",
						height:"100%",
						top:"0px",
						left:"0px"
					});
					count=1;
				}else{
					$element.css({
						width:width+'px',
						height:height+"px",
						top:top+"px",
						left:left+"px"
					});
					count=0;
				}
			});
		};
	});
