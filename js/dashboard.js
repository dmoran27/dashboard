$(document).ready(function() {
    $('#example').DataTable( {
        columnDefs: [
            {
                targets: [ 0, 1, 2 ],
                className: 'mdl-data-table__cell--non-numeric'
            }
        ]
    } );

	$(window).resize(function(){
  

if( $(window).width()>575){
		$('li').removeClass('dropdown');
		$('li').addClass('dropright');
		
	}else{
		$('li').removeClass('dropright');
		$('li').addClass('dropdown');
		

	}

});

	

  
} );