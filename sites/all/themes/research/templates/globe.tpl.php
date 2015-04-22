
<?php
/**
 * Globe Template
 */
?>
<script id="popupTpl" type="text/template">
  <img class='popup-logo' src='{{picture}}' />
  <h6 class="country-name">{{country}}</h6>
  <ul>
    <h6 class="list__heading">Therapy Areas</h6>
    {{#exs}}
  <li>{{.}}</li>
  {{/exs}}
    </ul>
    <ul>
      <h6 class="list__heading">Medical Devices</h6>
      {{#devs}}
  <li>{{.}}</li>
  {{/devs}}
      </ul>

</script>
<div class = "chunk globe">
  <div class = "">
<div class = "globe-filter--wrapper">
  <div class="control">
    <div class="areas--tog globe-switch gs-active-sw" data-tar="areas"><span>Therapy Areas</span></div>
    <div class="dev--tog globe-switch" data-tar="devices"><span>Medical Devices</span></div>
  </div>
  <div class = "filter-wrapper">
  <div class = "filter_blocks areas globe-active">
    <ul>
      <?php foreach($expertise as $k => $e):?>
        <?php if($k == 'all'):?>
        <li class = 'expertise__item active' data-expertise = "<?php print $e; ?>">
          <?php else:?>
        <li class = 'expertise__item' data-expertise = "<?php print $e; ?>">
          <?php endif;?>
          <span>
          <?php print $k; ?>
        </span>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>
  <div class = "filter_blocks devices">
    <ul>
      <?php foreach($devices as $dk => $de):?>
        <li class = 'expertise__item' data-expertise = "<?php print $de; ?>">
          <span>
          <?php print $dk; ?>
          </span>
        </li>
      <?php endforeach; ?>
    </ul>
  </div>
  </div>

</div>
    <div class="section--globe__wrapper">
      <div id="earth_div">
      </div>
    </div>
  </div>
</div>