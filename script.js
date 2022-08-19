function SwitchRus(){
  document.getElementById("myBar").style.display = "block";
  move();

  history.pushState(null, null, "/ru");

  document.getElementById("dropdown").innerHTML = '<a><button class="lang_btn" onclick="SwitchEng();">EN</button></a> <a href = "keras1n.github.io/ua"><button class="lang_btn"">UA</button></a>';
  document.getElementById("subtitle").innerText = "веб дев | гейм дев";
  document.getElementById("subtitle2").innerText = 'Эта страница была сделана просто потому что я не знаю какую ссылку подставлять под "Made by KeRas1n"';
  document.getElementById("contact_btn").innerText = "Связаться со мной";
  document.getElementById("web_title").innerText = "Веб";
  document.getElementById("hooigle").innerHTML = '<p>Hooigle - твоя новая кастомизируемая и комфортная домашняя страница.</p> <p>В этом <span class="marked">single page application</span> вы сможете:</p>'+
          "<ul>"+
            "<li>выбрать поисковик</li>"+
            "<li>полностью кастомизировать внешний вид</li>"+
            "<li>добавлять виджеты по типу погоды и конвертера валют</li>"+
            "<li>добавлять и редактировать закладки</li>"+
          "</ul>"+
          "<br>"+
          'Вы можете использовать HOOIGLE как в веб-версии так и в качестве расширения для вашего браузера для авто замены новой вкладки.';
  document.getElementById("games_title").innerText = "Игры";
  document.getElementById("fnad").innerHTML = "<p>Пародия на FNAF с Дорой и Мэйби бейби. </p> Игра сделана по рофлу и на момент её создания я знал гораздо меньше о UNITY.";
   document.getElementById("contact_title").innerText = "Связаться со мной";
   document.getElementById("website_btn").innerHTML = 'Веб версия <img src="img/new-tab.png" width="18px">';

}

function SwitchEng(){
  document.getElementById("myBar").style.display = "block";
  move();

  history.pushState(null, null, "/");

  document.getElementById("dropdown").innerHTML = '<a><button class="lang_btn" onclick="SwitchRus();">RU</button></a> <a href = "keras1n.github.io/ua"><button class="lang_btn"">UA</button></a>';
  document.getElementById("subtitle").innerText = "web dev | game dev";
  document.getElementById("subtitle2").innerText = 'This page was created just because i really dont know which link i should put under "Made by KeRas1n"';
  document.getElementById("contact_btn").innerText = "Contact me";
  document.getElementById("web_title").innerText = "Web";
  document.getElementById("hooigle").innerHTML = '<p>Hooigle - your new customizable & comfortable home page.</p> <p>In this <span class="marked">single page application</span> you will be able to:</p>'+
          "<ul>"+
            "<li>choose search engine</li>"+
            "<li>completely customize appearance</li>"+
            "<li>add some widgets like weather or currency converter</li>"+
            "<li>add & edit your bookmarks</li>"+
          "</ul>"+
          "<br>"+
          'You can use HOOIGLE in web version or as an extension for your browser for full functionality.';
  document.getElementById("games_title").innerText = "Games";
  document.getElementById("fnad").innerHTML = "<p>A parody on a FNAF with RU girl singers. </p> The game was created for fun and also was my first project and i knew much less about for example Unity and Blender.";
   document.getElementById("contact_title").innerText = "Contact me";
   document.getElementById("website_btn").innerHTML = 'Web version <img src="../img/new-tab.png" width="18px">';

}


var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        elem.style.display = "none";
      } else {
        (width++) + (width++) + (width++) + (width++);
        elem.style.width = width + "%";
      }
    }
  }
}