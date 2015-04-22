<div id="section-<?php print $section['key']; ?>" class = "chunk section section--<?php print $section['stripe']; ?> section--<?php print $section['d_align']; ?> section--<?php print $section['mob_align']; ?> <?php print $section['d_align']; ?> section--<?php print $section['color']; ?>">
  <div class = "chunk-inner">
  <?php if($section['d_align'] == 'right'): ?>
    <div class = "section__img">
      <img src="<?php print $section['img']['src']; ?>"/>
    </div>
  <?php endif; ?>
  <div class = "section__copy rte">
    <h2>
      <?php print $section['title']; ?>
    </h2>
    <?php print $section['body']['value']; ?>
  </div>
  <?php if($section['d_align'] == 'left'): ?>
    <div class = "section__img">
      <img src="<?php print $section['img']['src']; ?>"/>
    </div>
  <?php endif; ?>
  </div>
</div>