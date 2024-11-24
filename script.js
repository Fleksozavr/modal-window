document.addEventListener('DOMContentLoaded', () => {
  let form = document.getElementById('form');
  let sendButton = document.getElementById('sendButton');
  let modalButton = document.querySelector(".modal__button");
  let modalContainer = document.querySelector(".container");
  let modal = document.querySelector(".modal");
  let closeIcon = document.querySelector(".close__icon");
  let container = document.getElementById("container");

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
