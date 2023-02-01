/* Picture App 2 JS */

if (document.readState = "loaded") {

  function createAlbumList(item, index) {
    var albumNameOption = document.createElement('option');
    albumList.appendChild(albumNameOption);
    albumNameOption.setAttribute('value', item[0]);
    var albumNameText = document.createTextNode(item[0]);
    albumNameOption.appendChild(albumNameText);
  }

  albumNames.forEach(createAlbumList);

  var theClock;

  function pictureApp(imgBox, imgId, alNa, time, array) {
    var outerCont = document.getElementById('theContainer');
    var album = alNa;
    var alArray = array;
    var photoNumber;
    var picBox = document.getElementById(''+ imgBox + '');
    var imgEl;
    var i, p;
    i = 1;
    p = 1;
    imgEl = imgId;
    imgEl = imgEl + (i + 1);

    function findNumber(item, index) {
      var itemName = album;
      if(item[0] == itemName) {
        photoNumber = item[1];
      }
    }
    alArray.forEach(findNumber);

    outerCont.setAttribute('class', 'choosen');

    if (picBox.classList.contains('activated')) {
      var child = picBox.lastElementChild;
      clearInterval(theClock);
      while (child) {
        picBox.removeChild(child);
        child = picBox.lastElementChild;
      }
    }
    else {
      picBox.setAttribute('class', 'activated');
    }

    for (p = 1; p < (photoNumber - (-1)); p++) {
      var box = document.createElement("div");
      box.setAttribute('id', 'picBoxInner' + p);
      box.setAttribute('class', 'picBoxInner');
      document.getElementById("picBox").appendChild(box);
      document.getElementById('picBoxInner' + p).style.backgroundImage = 'url(photo_albums/' + album + '/' + p + '.jpg)';
    }

    document.getElementById('picBoxInner' + i).style.opacity = 1;

    if (theClock == null) {

        theClock = setInterval(function() {
          if (i <= photoNumber) {
              if (i == photoNumber) {
                document.getElementById('picBoxInner' + i).style.opacity = 0;
                i = 1;
                document.getElementById('picBoxInner' + i).style.opacity = 1;
              }
              else {
                document.getElementById('picBoxInner' + i).style.opacity = 0;
                document.getElementById('picBoxInner' + (i + 1)).style.opacity = 1;
                i = i + 1;
              }
          }
      }, 6000);
    }
    else {
      clearInterval(theClock);
      theClock = setInterval(function() {
        if (i <= photoNumber) {
            if (i == photoNumber) {
              document.getElementById('picBoxInner' + i).style.opacity = 0;
              i = 1;
              document.getElementById('picBoxInner' + i).style.opacity = 1;
            }
            else {
              document.getElementById('picBoxInner' + i).style.opacity = 0;
              document.getElementById('picBoxInner' + (i + 1)).style.opacity = 1;
              i = i + 1;
            }
        }
    }, 6000);
    }
}
//pictureApp

  var imageButton = document.getElementById('image_changer');
  var imageButtonBack = document.getElementById('menuBack');
  var imageButtonExpander = document.getElementById('image_expander');
  imageButton.onclick = function(){
    var albumChange = document.getElementById('albumList').value;
    pictureApp('picBox', '#picBoxInner', albumChange, theClock, albumNames);
  }
  imageButtonBack.onclick = function(){
    var j = document.getElementById('theContainer');
    j.classList.remove('choosen');
    j.classList.add('menu_out');
  }
  imageButtonExpander.onclick = function(){
    var k = document.getElementById('theContainer');
    k.classList.remove('menu_out');
    k.classList.add('choosen');
  }

}// loaded document
