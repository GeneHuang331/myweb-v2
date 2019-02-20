//chart
	window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "My Skills"              
		},
		animationEnabled:true,
		animationDuration:3000,
		colorSet:"colorSet2",
		backgroundColor: "#F8EEDF",
		theme: "light2",
		

		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "bar",
			dataPoints: [
				{ label: "HTML",  y: 60  },
				{ label: "CSS", y: 60  },
				{ label: "jQuery", y: 50  },
				{ label: "JavaScript",  y: 40  }
				
			]
		}

		]
	});
	chart.options.axisY = {
		prefix: "", suffix: "%" ,
 		maximum: 100,
 		interval:10
 
      };
	chart.render();
}
$(document).ready(function() {


	$('#slideBtn-jq').mouseover(function(){
		$(this).addClass('active');

		$('#slide').stop().slideDown(500);
	});
	$('#slide').mouseleave(function(){
		$(this).removeClass('active');
		$('#slide').stop().slideUp(500);
	});

    //swiper
     var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 800,
        autoplay: {
        delay: 2000,
        },
        effect: "cube",

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        /*navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },*/

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      })

     //chart-jq

});