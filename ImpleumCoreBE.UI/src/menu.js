const MenuOptions = function() {
  this.setActive = function(obj) {
    var elems = document.querySelectorAll(".nav-item.active");

    [].forEach.call(elems,
      function(el) {
        el.classList.remove("active");
      });
    obj.parentElement.classList.add("active");
  };
};

var _menuOptions = new MenuOptions();
