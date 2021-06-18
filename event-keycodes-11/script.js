const insert = document.getElementById("insert");

window.addEventListener("keydown", (eventObject) => {
  // we can use innerHTML along with template literals to create dynamic markup
  insert.innerHTML = `
      <div class="key">
        
        ${eventObject.key === " " ? "Space" : eventObject.key}
        <small>event.key</small>
      </div>
      <div class="key">
        ${eventObject.keyCode}
        <small>event.keyCode</small>
      </div>
      <div class="key">
        ${eventObject.code}
        <small>event.code</small>
      </div>`;
});
