<?php if (!empty($body)): ?>
  <div class="hero hero--complex left-aligned">
<!--    <div class = "hero__image hero--complex" style="background-image: url('--><?php //print file_create_url($field_hero_image[0]['uri']); ?><!--/*')"></div>*/-->
    <div class="hero__inner">
      <div class="hero__cta">
        <div class="hero__caption--header">
          <h3>
            <?php print $title; ?>
          </h3>
        </div>
        <div class="hero__caption--copy">
          <?php print strip_tags($body[0]['value']); ?>
        </div>
      </div>
    </div>
  </div>
<?php endif; ?>
<?php print $special; ?>
<?php if (!empty($form)): ?>
  <?php print $form; ?>
<?php endif; ?>