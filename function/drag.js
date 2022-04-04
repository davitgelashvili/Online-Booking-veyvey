$( init );

function init() {
  $( ".dragdrop" ).sortable({
    //   connectWith: ".dragdrop",
    //   stack: '.connected-sortable li'
    }).disableSelection();
}