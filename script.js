const data = new Date();
const day = data.getDate();
const div = document.createElement('div');

div.classList.add('truck_extention','hide');
div.textContent = "Reloading";
document.body.append(div);

const JUDGMENT_DAY = 28;

if(day === JUDGMENT_DAY) {
  div.innerHTML = `<a href="https://www.youtube.com/watch?v=9X_Ne3S5FAU&ab_channel=MaximPopov">CLICK ME</a>`   
  div.classList.toggle('hide')
} else {
  let reloadStatus = false;

  const reload = () => {
    if(reloadStatus) { 
      document.querySelector('#refresh-results').click();
      console.log('reload')
    } else {
      console.log('click')
    }
  }

  setInterval(reload, 500);

  document.addEventListener('keyup', e => {
    if (e.code === 'ControlLeft') {
      div.classList.toggle('hide')
      reloadStatus = !reloadStatus
    }
  })
}