// check off todo iten
$( 'ul' ).on( 'click', 'li', function () {
  // if ( $( this ).css( 'color' ) === 'rgb(128, 128, 128)' ) {
  //   $( this ).css( {
  //     color: 'black',
  //     textDecoration: 'none'
  //   });
  // } else {
  //   $( this ).css( {
  //     color: 'gray',
  //     textDecoration: 'line-through'
  //   });
  // }

  // better (correct?) way
  $( this ).toggleClass( 'completed' );
});

// delete todo iten
$( 'ul' ).on( 'click', 'span', function ( event ) {
  event.stopPropagation();
  $( this ).parent().fadeOut( 500, function () {
    $( this ).remove();
  });
});

// get new todo iten
$( 'input[type="text"]' ).keypress( function ( event ) {
  if ( event.which === 13 ) {
    let todoText = $( this ).val();
    $( this ).val( '' );
    $( 'ul' ).append( '<li><span><i class="far fa-trash-alt"></i></span> ' + todoText + '</li>' );
  }
});

// toggle iten input
$( '#toggle-form' ).click( function () {
  $( 'input[type="text"]' ).fadeToggle();
});
