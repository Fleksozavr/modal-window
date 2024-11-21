document.addEventListener('DOMContentLoaded', () => {
  var form = document.getElementById('form');
  var sendButton = document.getElementById('sendButton');
  var modalButton = document.querySelector(".modal__button");
  var modalContainer = document.querySelector(".container");
  var modal = document.querySelector(".modal");
  var closeIcon = document.querySelector(".close__icon");
  var container = document.getElementById("container");

  function close() {
      modalContainer.classList.remove('active');
      modal.classList.remove('active');
      
      const nameInput = document.getElementById('name');
      const surnameInput = document.getElementById('surname');
      
      nameInput.value = '';
      surnameInput.value = '';
  }

  closeIcon.addEventListener('click', close);

  container.addEventListener('click', (event) => {
      let target = event.target;
      if (!modal.contains(target)) {
          close();
      }
  });

  form.addEventListener('input', () => {
      const name = document.getElementById('name').value.trim();
      const surname = document.getElementById('surname').value.trim();
      
      sendButton.disabled = !(name && surname);
  });

  modalButton.addEventListener('click', () => {
      modalContainer.classList.add('active');
      modal.classList.add('active');
  });


  sendButton.addEventListener('click', (event) => {
      event.preventDefault();

      const name = document.getElementById('name').value.trim();
      const surname = document.getElementById('surname').value.trim();

      if (!name || !surname) {
          const confirmResult = confirm("Пожалуйста, заполните все поля. Нажмите 'ОК' для продолжения или 'Отмена' для закрытия модального окна.");
          if (confirmResult) {
              return;
          } else {
              close();
          }
      } else {
          close();
      }
  });
});
