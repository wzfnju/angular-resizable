wzf.directive('draggable',function($document){
		var startx=0,starty=0,x=0,y=0;
		return function(scope,element,attr){
			element.css({
				position:"absolute",
				border:'1ps solid red',
				backgroundColor:'lightgrey',
				cursor:'pointer'
			});
			element.bind('mousedown',function(event){
				startx=event.clientX;
				starty=event.clientY;
				x=$(element).offset().left;
				y=$(element).offset().top;
				$document.bind('mousemove',mousemove);
				$document.bind('mouseup',mouseup);
				$event.stopPropagation();
			});
			function mousemove(event){
				yu=y+(event.clientY-starty);
				xu=x+(event.clientX-startx);
				element.css({
					top:yu+'px',
					left:xu+'px'
				});
			}
			function mouseup(){
				$document.unbind('mousemove',mousemove);
				$document.unbind('mouseup',mouseup);
			}
		};
	});
