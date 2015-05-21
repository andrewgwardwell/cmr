<div class="chunk chunk-home-menu">
  <div class="chunk-inner">
      <?php foreach($variables['links'] as $k => $l): ?>

      <div class="menu-links <?php print(implode('', $l['classes'])); ?>">
          <a href="<?php print($l['href']);?>">
              <div class = "menu-links__image" style="background-image: url('<?php print($l['image']);?>');"></div>
              <div class = 'text-wrapper'>
                  <h4 class = "menu-links__title"><?php print($l['title']); ?></h4>
                  <p class = "menu-links__text"><?php print($l['text']); ?></p>
              </div>
          </a>
      </div>
      <?php endforeach; ?>
  </div>

</div>
