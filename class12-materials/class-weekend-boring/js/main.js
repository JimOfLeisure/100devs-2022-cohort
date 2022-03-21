document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();

  //Conditionals go here
  if (['tuesday', 'thursday'].some(e => e === day)) {
    console.log('Class today');
  } else if (['saturday', 'sunday'].some(e => e === day)) {
    console.log('Weekend');
  } else {
    console.log('meh');
  }

}
