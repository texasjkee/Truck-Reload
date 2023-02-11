const textReloadDiv = document.createElement('div');
textReloadDiv.classList.add('truck_extention','hide');
textReloadDiv.textContent = "Reloading";
document.body.append(textReloadDiv);

const reload = () => {
  document.querySelector('#refresh-results').click();
}

const start = setInterval(reload, 1000);

let reloadStatus = false;

document.addEventListener('keydown', e => {
  textReloadDiv.classList.toggle('hide')
  if(e.code === 'Enter') {
    console.log('work')
    reloadStatus = true;
  }
})