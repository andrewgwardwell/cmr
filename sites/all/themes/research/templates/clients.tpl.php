<?php
/**
 * $users[] = array(
'name' => $name,
'pic' => $pic_src,
'link' => $link,
'loc' => $loc,
'therapy' => $therapy,
'dev' => $dev,
);
 */
?>

<div class = "chunk clients">
<div class = "chunk-inner">
  <div class = "section__copy rte">
    <h2>Clients</h2>
  </div>
  <div class="client_slides--wrapper">
    <div class = "client_slides">
      <?php foreach ($clients as $s): ?>
        <div class = "client-wrapper">
          <div class = "client-inner">
            <div class = "section__img">
              <img src="<?php print $s['pic']; ?>"/>
            </div>
            <div class = "section__copy rte">
              <h2 class = "tip-expand">
                <?php print $s['name']; ?>
              </h2>
<!--              <div class = "section__tip rte">-->
<!--                <a href="--><?php //print $s['link']; ?><!--">-->
<!--                  <div class = "copy-website">-->
<!--                    <p>--><?php //print $s['body']; ?><!--</p>-->
<!--                  </div>-->
<!--                </a>-->
<!--              </div>-->
            </div>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</div>
</div>
