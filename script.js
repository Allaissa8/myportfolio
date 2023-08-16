$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
        });

    $(window).on('scroll load', function(){

        $('#menu').removeclass('fa-times');
        $('header').removeclass('toggle');
    });

$('a[href*="#"]').on('click', function(e){

e.preventDefault();

$('html, body').animate({

    scrollTop :  $($(this).attr('href')).offset().top,
},
    500,
    'linear'
);

});
});


  const scriptURL = '<https://script.google.com/macros/s/AKfycbx_ZDPRr07h57is3mQs0A4CpwVfjTspgBgKRmV10n_Iv48jSVKFIp4I3y9hZLtPCUyr/exec>'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
