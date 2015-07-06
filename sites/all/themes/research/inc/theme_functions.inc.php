<?php
/**
 * Created by PhpStorm.
 * User: Awardwell
 * Date: 11/6/14
 * Time: 6:30 PM
 */

function research_theme(){
  return array(
    'header' => array(
      'variables' => array(
        'menu' => array(),
        'logo' => array(),
        'title' => NULL
      ),
      'template' => 'templates/header'
    ),
    'coll_menu_main' => array(
      'variables' => array(
        'menu' => NULL
      ),
      'template' => 'templates/coll_menu_main',
    ),
    'mob_nav' => array(
      'variables' => array(
        'menu' => array(),
      ),
      'template' => 'templates/mob_nav'
    ),
  'comp_page_sec' => array(
    'variables' => array(
      'section' => NULL
    ),
    'template' => 'templates/section',
  ),
    'staff' => array(
      'variables' => array(
        'users' => NULL
      ),
      'template' => 'templates/staff',
    ),
    'clients' => array(
      'variables' => array(
        'clients' => NULL
      ),
      'template' => 'templates/clients',
    ),
      'clients2' => array(
          'variables' => array(
              'clients' => NULL
          ),
          'template' => 'templates/clients2',
      ),
    'dashboard' => array(
      'variables' => array(
        'items' => NULL
      ),
      'template' => 'templates/dashboard',
    ),
    'footer' => array(
      'variables' => array(
        'menu' => NULL,
        'elements' => NULL
      ),
      'template' => 'templates/footer',
    ),
    'skills' => array(
      'variables' => array(
        'title' => NULL,
        'skills' => NULL
      ),
      'template' => 'templates/skills',
    ),
    'cmr_globe' => array(
      'variables' => array(
        'data_points' => NULL,
        'expertise' => NULL,
      ),
      'template' => 'templates/globe',
    ),
    'cmr_global_practices' => array(
      'template' => 'templates/global_practices',
    ),
      'cmr_contact_block' => array(
          'template' => 'templates/contact_block',
      ),
    'cmr_therapy_areas' => array(
      'variables' => array(
        'data' => NULL,
      ),
      'template' => 'templates/therapy_areas',
    ),
    'cmr_therapy_areas_mobile' => array(
      'variables' => array(
        'data' => NULL,
      ),
      'template' => 'templates/therapy_areas_mobile',
    ),
      'cmr_link_blocks' => array(
          'variables' => array(
              'links' => NULL,
          ),
      'template' => 'templates/link_blocks',
      ),
    'section_nav' => array(
      'variables' => array(
        'section_nav' => NULL,
      ),
      'template' => 'templates/section_nav',
    ),
);
}
