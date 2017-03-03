<?php
/**
 * Created by PhpStorm.
 * User: AWardwell
 * Date: 6/26/15
 * Time: 1:15 AM
 */
?>

<div class = "chunk clients">
    <div class = "chunk-inner">
        <div class = "section__copy rte">
            <h2>Clients</h2>
        </div>
        <div class="client-grid">
            <div class = "client-grid__inner">
                <?php foreach ($clients as $s): ?>
                    <div class = "client-wrapper">
                        <div class = "client-inner">
                                <div class = "section__img">
                                    <img alt = "<?php print $s['name']; ?>" src="<?php print $s['pic']; ?>"/>
                                </div>
                            <div class = "section__copy rte">
<!--                                <h2 class = "tip-expand">-->
<!--                                    --><?php //print $s['name']; ?>
<!--                                </h2>-->
                                <!--              <div class = "section__tip rte">-->
<!--                                                <a href="--><?php //print $s['link']; ?><!--">-->
                                <!--                  <div class = "copy-website">-->
                                <!--                    <p>--><?php //print $s['body']; ?><!--</p>-->
                                <!--                  </div>-->
                                <!--                </a>-->
                                <!--              </div>-->
                            </div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</div>