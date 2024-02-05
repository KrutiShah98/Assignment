filoSlider
==========

Ротатор с необычным эффектом смены изображений

Подготовка
-----------
Для работы необходимо подключить jquery, сам скрипт и css
```html
<script src='http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js'></script>
<script src='js/filoSlider.js'></script>

<link rel="stylesheet" href="css/filoSlider.css">
```
Внешний вид можно изменить с помощью редактирования css

Необходимая разметка
--------------------
```html
<div id="slider">
  <img src="...">
  ...
  <img src="...">
</div>
```

Использование
-------------
```javascript
$('#slider').filoSlider();
```

Настройки (по-умолчанию)
---------
```html
$('#slider').filoSlider({
  'slicesHorizontal' : 8,   // кол-во кусочков по горизонтали
  'slicesVertical' : 8,     // кол-во кусочков по вертикали
  'timeout' : 2000,         // таймаут смены изображений
  'fadeTimeout' : 5,        // таймаут между исчезанием кусочков
  'fadeTime' : 700,         // время исчезания кусочка
  'navigation' : true       // использование навигации
});
```