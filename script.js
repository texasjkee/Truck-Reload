const div = document.createElement('div');
div.classList.add('truck_extention','hide');
div.textContent = "Reloading";
document.body.append(div);

let reloadStatus = false;

const reload = () => {
  if(reloadStatus) { 
    document.querySelector('#refresh-results').click();
  } else {
    console.log('click')
  }
}

const start = setInterval(reload, 1000);

document.addEventListener('keyup', e => {
  if (e.code === 'ControlLeft') {
    div.classList.toggle('hide')
    reloadStatus = !reloadStatus
  }
})