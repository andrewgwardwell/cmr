<?php /**
 * Just looks nice.
 */
 ?>
  <div class="hero hero--complex left-aligned section <?php print empty($field_hero_image[0]) ? 'no-hero': 'hero-present';?>" id="section-0">
    <?php if (!empty($field_hero_image[0])):?>
    <div class = "hero__image hero--complex" style="background-image: url('<?php print file_create_url($field_hero_image[0]['uri']);?>')"></div>
    <?php endif; ?>
  </div>
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