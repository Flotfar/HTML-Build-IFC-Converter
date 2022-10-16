/* written by Tim McGinley 2022 */
/* Editted by Joakim Mørk, Valdemar Rasmussen, Jonas Munch, Oscar Hansen 2022 */

// Aditions made to 'html-build.js':
// - Calculate num. beams and columns for structural building entities, adding them to properties box (17-38)
// - 
// -
// -

function main() {
	
	// calculate the floors
	const floors = document.getElementsByTagName("floor-");
	let num_floors = floors.length;
	console.log(num_floors);

	// calculate the beams
	const beams = document.getElementsByTagName("beam-");
	let num_beams = beams.length;
	console.log(num_beams);

	// calculate the columns
	const columns = document.getElementsByTagName("column-");
	let num_columns = columns.length;
	console.log(num_columns);
	

	// add data to the properties box
	$('props-').prepend('number of beams is '+num_beams+'');
	$('props-').prepend('number of columns is '+num_columns+'<br>');
	$('props-').prepend('STRUCTURAL ELEMENTS:'+'<br>');
	$('props-').prepend(''+'<br>');
	$('props-').prepend('number of floors is '+num_floors+'<br>');
	$('props-').prepend('site elevation is '+$('site-').attr('elev')+'<br>');
	$('props-').prepend('BUILDING PROPERTIES:'+'<br>');
	
	// load the plan so we can edit it
	plan('Group 14 - HTML.Build <br><br> - Click on a floor to see the plan <br><br> - Click on a beam to see properties');
	
	// floor, interactive menu 
	$( 'floor-' ).each(function() {
	console.log($(this)[0].innerHTML);
		$( this ).on("click", function(){
			//$('plan-').css("background-color","black");
			
			changePlan($(this).attr('name') + ':' + $(this).attr('level'));
			
			//$( this ).innerHTML
		});
	});

	// beam, interactive menu 
	$( 'beam-' ).each(function() {
		console.log($(this)[0].innerHTML);
			$( this ).on("click", function(){
				//$('plan-').css("background-color","black");
				
				changePlan('Crossection: '+ $(this).attr('class')
				+ '<br><br> Name: ' + $(this).attr('name') 
				+ '<br><br> Material: ' + $(this).attr('material') 
				+ '<br><br> Length: ' + $(this).attr('length') 
				+ '<br><br> Reference level: ' + $(this).attr('level') 
				+ '<br><br> Placement: ' + $(this).attr('placement'));
				
				//$( this ).innerHTML
			});
		});
	
}

function plan(text) {
	jQuery('<div>', {
		id: 'plan',
		class: 'plan',
		title: 'click a floor to see the plan',
		html:text
	}).appendTo('plan-');  
		
	}
	
	function changePlan(text) {
		$('#plan').html(text);
	}
	
// HTML-Build DOM

// shoulds include...
/*





*/


// ---------------------------------------------------------------------
//   model                    |             view
//    '-> project             |               '-> plan               
//      '-> site              |       this shows a floor in plan        |
//        '-> building        |                                         |
// #section                   |               '-> props                 |
// this shows the floors      |      this shows the selected properties |
// in section                 |                                         |
//    <floor...->             |                                         |
//                            |                                         |
// ---------------------------------------------------------------------





