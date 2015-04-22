<?php
/**
 * @file
 * collmares.features.inc
 */

/**
 * Implements hook_views_api().
 */
function collmares_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function collmares_node_info() {
  $items = array(
    'clients' => array(
      'name' => t('Clients'),
      'base' => 'node_content',
      'description' => t('Retain information about your clients.'),
      'has_title' => '1',
      'title_label' => t('Client Name'),
      'help' => '',
    ),
    'complex_page' => array(
      'name' => t('Complex Page'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Page Title'),
      'help' => '',
    ),
    'page' => array(
      'name' => t('Basic page'),
      'base' => 'node_content',
      'description' => t('Use <em>basic pages</em> for your static content, such as an \'About us\' page.'),
      'has_title' => '1',
      'title_label' => t('Page Title'),
      'help' => '',
    ),
    'staff' => array(
      'name' => t('Staff'),
      'base' => 'node_content',
      'description' => t('Content type for retaining information pertaining to staff.'),
      'has_title' => '1',
      'title_label' => t('Name'),
      'help' => '',
    ),
  );
  drupal_alter('node_info', $items);
  return $items;
}
