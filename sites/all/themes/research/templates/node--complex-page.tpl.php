<?php if (!empty($body)): ?>
  <div class="hero hero--complex left-aligned section <?php print $state_class; ?>" id="section-0">
  <?php if(!empty($field_hero_image[0])):?>
    <div class = "hero__image hero--complex" style="background-image: url('<?php print file_create_url($field_hero_image[0]['uri']);?>')"></div>
  <?php endif; ?>
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
        <?php if(!empty($section_nav)): ?>
          <div class="chunk chunk-section-nav">
            <div class="chunk-inner">
              <?php print $section_nav;?>
            </div>
          </div>
        <?php endif; ?>
    </div>
  </div>
<?php endif; ?>


<div class = "sections">
  <?php print $sections; ?>
</div>
<?php if(!empty($special)): ?>
<?php print $special; ?>
<?php endif; ?>
<!--<div class="complex-page-nav">-->
<!--  --><?php //foreach ($section_count as $key => $c): ?>
<!--    <div class="cp-nav__item --><?php //print $key == 0 ? 'cp-nav__item--active' : ''; ?><!-- " data-dest="--><?php //print $c['anchor']; ?><!--">-->
<!--      <span class="cp-nav__item__title">--><?php //print $c['title']; ?><!--</span>-->
<!--    </div>-->
<!--  --><?php //endforeach; ?>
<!--</div>-->
