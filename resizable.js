var wzf=angular.module("wzf");
wzf.module('my-app',[])
	.directive("resizable",function($document){
		var startx=0,starty=0,x=0,y=0;
		var link=function($scope,$element,$attr){
			$element.css({
				top:"100px",
				overflow: "hidden",
				display:"block"
			});
			
			var top=angular.element("<div style='width:100%; border-top:2px solid black;  height:1px;'></div>");
			top.css({
				position:"absolute",
				top:"0px",
				left:"0px"
			});
			top.bind("mouseover",function($event){
				top.css({
					cursor:"n-resize"
				});
			}).bind("mousedown",function($event){
				y=$($element).height();
				starty=$event.clientY;
				$document.bind('mousemove',mousemove1);
				$document.bind('mouseup',mouseup1);
				$event.stopPropagation();
			});
			$element.append(top);
			
			function mousemove1($event){
				yy=y-($event.clientY-starty);
				$element.css({
					height:yy+'px',
					top:$event.clientY+'px'
				}); 
				
			}
			function mouseup1(){
				$document.unbind('mousemove',mousemove1);
				$document.unbind('mouseup',mouseup1);
			}
			var bottom=angular.element("<div style='width:100%; border-bottom:2px solid black; height:1px;'></div>");
			bottom.css({
				position:"absolute",
				bottom:"0px",
				left:"0px"
			});
			bottom.bind("mouseover",function($event){
				bottom.css({
					cursor:"n-resize"
				});
			}).bind("mousedown",function($event){
				y=$($element).height();
				starty=$event.clientY;
				$document.bind('mousemove',mousemove2);
				$document.bind('mouseup',mouseup2);
				$event.stopPropagation();
			});
			$element.append(bottom);
			function mousemove2($event){
				yy=y+($event.clientY-starty);
				$element.css({
					height:yy+'px'
				}); 
			}
			function mouseup2(){
				$document.unbind('mousemove',mousemove2);
				$document.unbind('mouseup',mouseup2);
			}
			
			var left=angular.element("<div style='width:1px; border-left:2px solid black; height:100%;'></div>");
			left.css({
				position:"absolute",
				top:"0px",
				left:"0px"
			});
			left.bind("mouseover",function($event){
				left.css({
					cursor:"e-resize"
				});
			}).bind("mousedown",function($event){
				x=$($element).width();
				startx=$event.clientX;
				$document.bind('mousemove',mousemove3);
				$document.bind('mouseup',mouseup3);
				$event.stopPropagation();
			});
			$element.append(left);
			
			function mousemove3($event){
				xx=x-($event.clientX-startx);
				$element.css({
					width:xx+'px',
					left:$event.clientX+'px'
				}); 
				
			}
			function mouseup3(){
				$document.unbind('mousemove',mousemove3);
				$document.unbind('mouseup',mouseup3);
			}
			
			
			var right=angular.element("<div style='width:1px; border-left:2px solid black; height:100%;'></div>");
			right.css({
				position:"absolute",
				top:"0px",
				right:"0px"
			});
			right.bind("mouseover",function($event){
				right.css({
					cursor:"e-resize"
				});
			}).bind("mousedown",function($event){
				x=$($element).width();
				startx=$event.clientX;
				$document.bind('mousemove',mousemove4);
				$document.bind('mouseup',mouseup4);
				$event.stopPropagation();
			});
			$element.append(right);
			
			function mousemove4($event){
				xx=x+($event.clientX-startx);
				$element.css({
					width:xx+'px'
				}); 
				
			}
			function mouseup4(){
				$document.unbind('mousemove',mousemove4);
				$document.unbind('mouseup',mouseup4);
			}
			
		};
		return {
			link:link
		};
	})
