/*document.addEventListener('DOMContentLoaded', function() {
 const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
  const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');
const switchMode = document.getElementById('switch-mode');
  const content = document.getElementById('content');


  allSideMenu.forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault();
      allSideMenu.forEach(i => {
        i.parentElement.classList.remove('active');
      });
      item.parentElement.classList.add('active');
    });
  });

  menuBar.addEventListener('click', function() {
    sidebar.classList.toggle('hide');
    if (sidebar.classList.contains('hide')) {
      content.style.width = 'calc(100% - 60px)';
      content.style.left = '60px';
    } else {
      content.style.width = 'calc(100% - 280px)';
      content.style.left = '280px';
    }
  });

  switchMode.addEventListener('change', function() {
    document.body.classList.toggle('dark', this.checked);
  });

});
window.addEventListener('resize', function() {
      sidebar.classList.add('hide');
      content.style.width = 'calc(100% - 60px)';
      content.style.left = '60px';
});


function ajusterMenuLatéral() {
  if (window.innerWidth < 768) {
      sidebar.classList.add('hide');
      content.style.width = 'calc(100% - 60px)';
      content.style.left = '60px';
  }

}

ajusterMenuLatéral();

window.addEventListener('resize', ajusterMenuLatéral);



document.addEventListener("DOMContentLoaded", function() {
  // Toggle dark mode
  const switchMode = document.getElementById("switch-mode");
  switchMode.addEventListener("click", function() {
    document.body.classList.toggle("dark");
  });

  // Toggle sidebar
  const menuIcon = document.querySelector(".bx.bx-menu");
  const sidebar = document.getElementById("sidebar");
  menuIcon.addEventListener("click", function() {
    sidebar.classList.toggle("hide");
  });
});
*/
/*
document.addEventListener('DOMContentLoaded', function() {
  const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
  const menuBar = document.querySelector('#content nav .bx.bx-menu');
  const sidebar = document.getElementById('sidebar');
  const switchMode = document.getElementById('switch-mode');
  const content = document.getElementById('content');

  allSideMenu.forEach(item => {
      item.addEventListener('click', function(event) {
          event.preventDefault();
          allSideMenu.forEach(i => {
              i.parentElement.classList.remove('active');
          });
          item.parentElement.classList.add('active');
      });
  });

  menuBar.addEventListener('click', function() {
      sidebar.classList.toggle('hide');
      if (sidebar.classList.contains('hide')) {
          content.style.width = 'calc(100% - 60px)';
          content.style.left = '60px';
      } else {
          content.style.width = 'calc(100% - 280px)';
          content.style.left = '280px';
      }
  });

  switchMode.addEventListener('change', function() {
      document.body.classList.toggle('dark', this.checked);
  });

  window.addEventListener('resize', function() {
      sidebar.classList.add('hide');
      content.style.width = 'calc(100% - 60px)';
      content.style.left = '60px';
  });

  function ajusterMenuLatéral() {
      if (window.innerWidth < 768) {
          sidebar.classList.add('hide');
          content.style.width = 'calc(100% - 60px)';
          content.style.left = '60px';
      }
  }

  ajusterMenuLatéral();

  window.addEventListener('resize', ajusterMenuLatéral);
});
*/
