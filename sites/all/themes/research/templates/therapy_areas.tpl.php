<script id="therapyTpl" type="text/template">
  <div class="close-button"></div>
  <div class="therapy-info--inner">
    <div class="therapy-info--heading bump">
      <h4>{{term.name}}</h4>
      <p>{{term.description}}</p>
    </div>
    <div class="therapy-info--staff bump">
      {{#staff_true}}
      <h5 class="section__title">Experience</h5>
      {{/staff_true}}
      <div class="therapy-info--staff--inner staff">
        {{#staff}}
        <div class = 'staff-wrapper'>
          <div class = 'section__img'>
            <img src="{{pic}}"/>
          </div>
          <a href="{{link}}">
            <h5 class="section__heading">{{name}}</h5>
          </a>
        </div>
        {{/staff}}
      </div>
      </div>
    <div class="therapy-info--clients bump">
      {{#client_true}}
      <h5 class="section__title">Evidence</h5>
      {{/client_true}}
    <div class="therapy-info--clients--inner">
      {{#clients}}
      <div class = 'client-wrapper'>
        <div class = 'section__img'>
        <img src="{{pic}}"/>
        </div>
        <a href="{{link}}">
          <h5 class="section__heading">{{name}}</h5>
        </a>
      </div>
      {{/clients}}
    </div>
    </div>
    </div>
</script>

<div class="therapy-areas">
</div>
<div class="therapy-areas--mobile">
    <?php print $mobile_areas; ?>
</div>
<div class="therapy-info">
</div>
