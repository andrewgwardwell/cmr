<?php foreach ($menu as $link): ?>
  <?php
  $cur = $link['link']['link_path'];
  $active = $cur == current_path() ? 'active' : '';
  ?>
  <?php if(!$link['link']['hidden']): ?>
  <li class="menu__item <?php print $active; ?>">
    <?php print l("<h5>{$link['link']['title']}</h5>", $link['link']['href'], array('html' => TRUE)) ?>
  </li>
<?php endif; ?>
<?php endforeach; ?>
