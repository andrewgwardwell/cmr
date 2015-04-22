<div class = 'skill__wrapper'>
<div class = 'skill__wrapper--inner'>
  <?php if (count($skills) > 0): ?>
  <h4 class = 'skill__heading'><?php print $title; ?></h4>
  <ul class = 'skill__list'>

    <?php foreach ($skills as $s): ?>
      <li class='skill__item'>
        <span><?php print $s; ?></span>
      </li>
    <?php endforeach; ?>
  </ul>
  <?php endif; ?>
</div>
</div>


