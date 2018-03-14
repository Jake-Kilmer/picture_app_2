<?php

/*
Portrait App 1.1
by : Jacob Kilmer
remlik Apps 2018
*/

?>

<!DOCTYPE html>
<html>
  <head>
    <title>Portrait App</title>
    <link type="text/css" rel="stylesheet" href="style.css?t=<?php echo time(); ?>">
  </head>
  <body>
    <div id="wrapper" class="wrapper-cont">
      <div id="picCont">
        <div id="picContInner">
          <div id="picBoxOuter">
            <div id="picBox">

              <?php
              function totalImages() {
                $dir = opendir('./albumCovers');
                $i = 1;
                while ($file = readdir($dir)) {
                    if ($file == '.' || $file == '..') {
                        continue;
                    }
                    echo '<div id="picBoxInner' . $i . '" class="picBoxInner"><img src="./albumCovers/' . $file . '" /></div>';
                    $i++;
                }
                closedir($dir);
              }
               ?>
              <?php totalImages(); ?>
            </div>
          </div>
        </div>
      </div>
      <form class="newPortraitsForm" method="post" action="index.php">
        <input type="hidden" name="portraitImages" value="<?php //echo $newImages; ?>">
        <input type="hidden" name="portraitTotal" value="<?php //echo $imgNumber; ?>">
        <input class="start-over" type="submit" value="New Portraits">
      </form>
    </div><!-- wrapper-cont -->
    <script type="text/javascript" src="js/jquery-3.2.1.js"></script>
    <script type="text/javascript" src="js/script.js?t=<?php echo time(); ?>"></script>
  </body>
</html>
