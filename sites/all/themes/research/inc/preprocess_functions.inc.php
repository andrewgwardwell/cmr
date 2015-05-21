<?php
/**
 * Created by PhpStorm.
 * User: Awardwell
 * Date: 11/6/14
 * Time: 6:30 PM
 */

function research_preprocess_html(&$vars){
  $data = array(
    '#type' => 'html_tag',
    '#tag' => 'meta',
    '#attributes' => array(
      'name' => 'viewport',
      'content' => 'width = device-width, initial-scale = 1.0'
    )
  );
  drupal_add_html_head($data, 'viewport');
}

/**
 * @param $vars
 * @throws \Exception
 */
function research_preprocess_page(&$vars){
  drupal_add_js(drupal_get_path('theme', 'research') . '/js/libraries/modernizr.custom.js');
  drupal_add_js(drupal_get_path('theme', 'research') . '/js/libraries/classie.js', array('scope' => 'footer'));
  drupal_add_js(drupal_get_path('theme', 'research') . '/js/libraries/sidebarEffects.js', array('scope' => 'footer'));
  $menu = menu_tree_all_data('menu-colmares-menu');
  $menu_rendered = theme('coll_menu_main', array('menu' => $menu));
  $main_menu = menu_tree_all_data('main-menu');
  $main_menu_rendered = theme('coll_menu_main', array('menu' => $main_menu));
//  $vars['page']['header'] = theme('header', array('menu' => $menu_rendered, 'logo' => array(), 'title' => 'collmares'));
  $vars['page']['mob_nav'] = theme('mob_nav', array('menu' => $menu_rendered));
  $vars['page']['footer'] = theme('footer', array('menu' => $main_menu_rendered, 'elements' => null));
  $vars['page']['header'] = theme('header', array(
    'menu' => $menu_rendered,
    'logo' => array(),
    'title' => 'Collaborative Market Research'
  ));
  $page_content = $vars['page']['content']['system_main'];
  unset($vars['page']['content']['system_main']);
  //  Dirty swap because block weighting isn't working well.
  $vars['page']['first_content'] = $page_content;
}


function research_preprocess_node(&$vars){
  $node = $vars['node'];
  $type = $node->type;
  $lang = $node->language;
  $class = !empty($node->field_site_class[$lang]) ? $node->field_site_class[$lang][0]['taxonomy_term']->name : false;
  if($class == 'global' || $class == 'therapy'){
    // stacking block features
    $vars['theme_hook_suggestions'][] = 'node__feature_heavy';
  }
  if($type == 'homepage'){
      $menu_exs = $node->field_menu_blocks[LANGUAGE_NONE];
      $links = array();
      foreach($menu_exs as $k => $m){
          $item = field_collection_item_load($m['value']);
//          drupal_json_output($item);
//          die();
          $title = $item->field_menu_headline[LANGUAGE_NONE][0]['value'];
          $text = $item->field_menu_text[LANGUAGE_NONE][0]['value'];
          $link = $item->field_menu_link[LANGUAGE_NONE][0]['value'];
          $uri = $item->field_menu_image[LANGUAGE_NONE][0]['uri'];
          if($k == 1){
              $classes = array('second');
              $image = image_style_url('homepage_medium', $uri);
          } elseif($k == 0){
              $classes = array('first');
              $image = image_style_url('homepage_large', $uri);
          } else {
              $classes = array();
              $image = image_style_url('homepage_small', $uri);
          }
          $links[] = array(
              'classes' => $classes,
              'title' => $title,
              'text' => $text,
              'href' => drupal_get_path_alias($link),
              'image' => $image,
          );

      }
      $vars['menu_ex'] = theme('cmr_link_blocks', array('links' => $links));

  }
  if($type == 'complex_page'){
    $sections = $node->field_section[$lang];
    $sec_rend = '';
    $i = 1;
    foreach($sections as $section){
      $sec = entity_metadata_wrapper('field_collection_item', $section['value']);
      $s['title'] = $sec->field_section_title->value();
      $s['body'] = $sec->field_section_copy->value();
      $s['img'] = $sec->field_section_image->value();
      $s['mob_align'] = $sec->field_section_mobile_alignment->value();
      $s['d_align'] = $sec->field_section_desktop_alignment->value();
      $s['color'] = strtolower($sec->field_section_color->value());
      if(empty($s['img'])){
        $s['d_align'] = 'center';
      } elseif ($s['d_align'] == 'Align Image Left') {
        $s['d_align'] = 'left';
        $s['img']['src'] = file_create_url($s['img']['uri']);
      } else {
        $s['d_align'] = 'right';
        $s['img']['src'] = file_create_url($s['img']['uri']);
      }
      if($i%2 == 0){
        $s['stripe'] = 'even';
      } else {
        $s['stripe'] = 'odd';
      }
      $s['key'] = $i;
      $vars['section_count'][$i]['title'] = truncate_utf8($sec->field_section_title->value(), 144, true);
      $vars['section_count'][$i]['anchor'] = '#section-'.$i;
      $i++;
      $sec_rend .= theme('comp_page_sec', array('section' => $s));
    }
    $blocks = block_list('content');
    foreach($blocks as $k => $b){
      $i++;
      if($k != 'system_main'){
        $vars['section_count'][$i]['title'] = preg_replace('/_/', ' ', ucfirst($b->delta));
        $vars['section_count'][$i]['anchor'] = '#block-'.$b->module.'-'.$b->delta;
      }
    }

    $vars['section_count'][0]['title'] = 'Top';
    $vars['section_count'][0]['anchor'] = '#st-container';
    ksort($vars['section_count']);
    $vars['sections'] = $sec_rend;
    if(!empty($class)){
      if($class == 'home') {
    }
    }
  }
  if($type == 'page' && !empty($class)) {
    if($class == 'team'){
    }
    if($class == 'therapy') {
      $vocabl_list = taxonomy_get_tree('3');
//      $output = theme('term_tree_list', array('render element' => $vocabl_list));
      $vars['special'] = 'special therapy terms will go here';
    }
  }
}

/**
 * Preprocess function for the therarpy areas theming.
 * @param $vars
 */
function research_preprocess_cmr_therapy_areas(&$vars){
  $mob_areas = cache_get('therapy_areas');
  $now = time();
  //12 hour refresh
//  if (empty($mob_areas->data) || ($now - $mob_areas->created) > 43200){
    $output = research_wrapper_mobile($vars['data']);
    cache_set('therapy_areas', $output);
//  } else {
//    $output = $mob_areas->data;
//  }
  $vars['mobile_areas'] = $output;
}

/**
 * preprocesss funciont theming function for mobile.
 * @param $vars
 */
function research_wrapper_mobile($data){
  $children = $data['children'];
  $output = theme('cmr_therapy_areas_mobile', array('data' => $data));
  if(!empty($children)){
      foreach ($children as $c){
        $c = (array)$c;
        $kids = !empty($c['children']) ? 'children' : '';
        $suffix = "<li class='mobile-therapy-area {$kids}' data-info='{$c['tid']}'>";
        $output .= $suffix.research_wrapper_mobile($c).'</li>';
      }
  } else {
    $data = (array)$data;
    $suffix = "<li class='mobile-therapy-area' data-info='{$data['tid']}'>";
    $output = $suffix.$output.'</li>';
  }
  return '<ul class="mob-therapy-wrap">'.$output.'</ul>';
}

