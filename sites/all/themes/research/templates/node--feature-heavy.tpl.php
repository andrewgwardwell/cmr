<?php /**
 * Just looks nice.
 */
 ?>
<?php if (!empty($title)): ?>
  <div class="chunk <?php print 'chunk-'.$nid; ?>">
  <div class="chunk-inner">
  <div class="feature-heading--wrapper">
    <div class="feature--heading">
      <h3>
        <?php print $title; ?>
      </h3>
    </div>
    <div class="feature--copy">
      <p>
        <?php print strip_tags($body[0]['value']); ?>
      </p>
    </div>
  </div>
  </div>
  </div>
<?php endif; ?>