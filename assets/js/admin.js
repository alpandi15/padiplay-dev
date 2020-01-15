if ($(window).width() > 514) {
    $('.wrapper-navsecond.menu').addClass('active');
    $('.wrapper-content').addClass('active');
}
// menu
$('#menu').on('click', function(){
	$('.wrapper-content').addClass('active');
    $('.wrapper-content').addClass('transition'); 
	$('.wrapper-navsecond.menu').addClass('active');
    $('.wrapper-navsecond').addClass('transition');
	$('.wrapper-navsecond.notifications').removeClass('active');
	$('#menu').addClass('active');
	$('#notifications').removeClass('active');
})

$('#notifications').on('click', function(){
    $('.wrapper-content').addClass('active');
    $('.wrapper-content').addClass('transition'); 
	$('.wrapper-navsecond.notifications').addClass('active');
	$('.wrapper-navsecond.menu').removeClass('active');
    $('.wrapper-navsecond').addClass('transition');
	$('.wrapper-content').addClass('active');
	$('#notifications').addClass('active');
	$('#menu').removeClass('active');
})

$('.btnClose').on('click', function(){
	$('.wrapper-navsecond.notifications').removeClass('active');
	$('.wrapper-navsecond.menu').removeClass('active');
	$('.wrapper-content').removeClass('active');
})

$('#search').on('click', function(){
	$('.search').toggleClass('active');
})

$('.closeSearch').on('click', function(){
	$('.search').removeClass('active');
})

$('.profile').on('click', function(){
	$('.profile-menu').toggleClass('active');
})

// chart
// visitor
var ctx = document.getElementById('visitorChart');
ctx.height = 235;
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: '# of Votes',
            fill: false,
            smooth: false,
            lineTension: 0,
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {	
	    legend: {
	        display: false
	    },
        scales: {
            yAxes: [{
                ticks: {
                	min: 0,
                    beginAtZero: true,
                    stepSize: 5,
                }
            }]
        }
    }
});

// usert
var ctx = document.getElementById('userChart');
ctx.height = 200;
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: '# of Votes',
            fill: false,
            smooth: false,
            lineTension: 0,
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
    	legend: {
    		display: false
    	},
        scales: {
            yAxes: [{
                ticks: {
                	min: 0,
                    beginAtZero: true,
                    stepSize: 5,
                }
            }]
        }
    }
});

// tournament
var ctx = document.getElementById('tournamentChart');
ctx.height = 200;
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: '# of Votes',
            fill: false,
            smooth: false,
            lineTension: 0,
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
    	legend: {
    		display: false
    	},
        scales: {
            yAxes: [{
                ticks: {
                	min: 0,
                    beginAtZero: true,
                    stepSize: 5,
                }
            }]
        }
    }
});