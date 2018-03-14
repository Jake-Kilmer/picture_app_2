/* Picture-App JS */
$(document).ready(function() {


  /*  PICTURE APP JS  */
  /* Use paramaters images container id or class, individual images class, individual images id minus the number */

  function pictureApp(imgBox, img, imgId) {

  var pictureBox = $(imgBox);
  var pictureBoxInner = $(img);
  var pictureAmount = pictureBoxInner.length;
  var i;
  var imgEl;
  i = 0;
  imgEl = imgId;
  imgEl = imgEl + (i + 1);

  $(imgEl).fadeIn();

    setInterval(
      function() {
        console.log(i);
        if (i == (pictureAmount - 1)) {
          i = 0;
          $(imgEl).fadeOut();
          imgEl = imgId + (i + 1);
          console.log(i + ' ' + imgEl);
          $(imgEl).fadeIn();
        }
        else if (i < (pictureAmount - 1)) {
            i = i + 1;
            $(imgEl).fadeOut();
            imgEl = imgId + (i + 1);
            console.log(i + ' ' + imgEl);
            $(imgEl).fadeIn();
        }
    }, 7500);
  }

pictureApp('#picBox', '.picBoxInner', '#picBoxInner');

});
