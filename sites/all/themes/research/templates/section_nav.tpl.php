<?php foreach($section_nav as $nav):?>
<a data-dest="<?php print $nav['link'];?>" class="section_nav--link">
	<div class = "section_nav--item" style="background-image: url('<?php print $nav['img'];?>')">
		<div class="section_nav--title">
			<h4><?php print $nav['title'];?></h4>
		</div>
	</div>
</a>
<?php endforeach; ?>