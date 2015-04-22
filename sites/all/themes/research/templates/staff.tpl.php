<div class = "chunk staff">
  <div class = "chunk-inner">
    <div class="section--staff__wrapper">
    <?php foreach ($users as $key => $s): ?>
  <div class = "section--staff <?php print $key == 0 ? 'section--staff--active': ''; ?>" data-name="<?php print strtolower(preg_replace('/ /', '-', $s['name'])); ?>" data-experience = "<?php print $s['skills']; ?>" data-bio="<?php print $s['copy']; ?>">
    <div class = "section__img">
      <div class="overlay"></div>
      <img src="<?php print $s['pic']; ?>"/>
    </div>
    <div class = "section__heading">
      <h3>
        <?php print $s['name']; ?>
      </h3>
    </div>
    <div class = "section__copy rte">
      <?php print $s['copy']; ?>
    </div>
    <div class = "section__skills rte">
      <?php print $s['skills']; ?>
    </div>
  </div>
  <?php endforeach; ?>
    </div>
    <div class="section--staff__bio__wrapper">
      <h4>Biography</h4>
      <div class="section--staff__bio rte">
        <?php print $users[0]['copy']; ?>
      </div>
      <div class="section--staff__skills rte">
        <?php print $users[0]['skills']; ?>
      </div>
    </div>
  </div>
</div>