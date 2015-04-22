<div class = "dashboard">
  <?php foreach ($items as $i): ?>
  <a href="<?php print $i['link']; ?>">
    <button>
      <?php print $i['name']; ?>
    </button>
  </a>
    <?php if(!empty($i['desc'])): ?>
      <?php print $i['desc']; ?>
    <?php endif; ?>
  <?php endforeach; ?>
</div>