const data = new Date();
const day = data.getDate();
const div = document.createElement('div');

div.classList.add('truck_extention','hide');
div.textContent = "Reloading";
document.body.append(div);

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
    if (e.code === 'CapsLock') {
      div.classList.toggle('hide')
      reloadStatus = !reloadStatus
    }
  })
