<?php
/**
 * @file
 * client_view.views_default.inc
 */

/**
 * Implements hook_views_default_views().
 */
function client_view_views_default_views() {
  $export = array();

  $view = new view();
  $view->name = 'clients_data';
  $view->description = '';
  $view->tag = 'default';
  $view->base_table = 'node';
  $view->human_name = 'Clients Data';
  $view->core = 7;
  $view->api_version = '3.0';
  $view->disabled = FALSE; /* Edit this to true to make a default view disabled initially */

  /* Display: Master */
  $handler = $view->new_display('default', 'Master', 'default');
  $handler->display->display_options['title'] = 'Clients Data';
  $handler->display->display_options['css_class'] = 'chunk-inner';
  $handler->display->display_options['use_more_always'] = FALSE;
  $handler->display->display_options['access']['type'] = 'perm';
  $handler->display->display_options['access']['perm'] = 'create clients content';
  $handler->display->display_options['cache']['type'] = 'none';
  $handler->display->display_options['query']['type'] = 'views_query';
  $handler->display->display_options['exposed_form']['type'] = 'basic';
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '0';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'table';
  /* Field: Content: Title */
  $handler->display->display_options['fields']['title']['id'] = 'title';
  $handler->display->display_options['fields']['title']['table'] = 'node';
  $handler->display->display_options['fields']['title']['field'] = 'title';
  $handler->display->display_options['fields']['title']['alter']['word_boundary'] = FALSE;
  $handler->display->display_options['fields']['title']['alter']['ellipsis'] = FALSE;
  /* Field: Content: Medical Device */
  $handler->display->display_options['fields']['field_medical_device']['id'] = 'field_medical_device';
  $handler->display->display_options['fields']['field_medical_device']['table'] = 'field_data_field_medical_device';
  $handler->display->display_options['fields']['field_medical_device']['field'] = 'field_medical_device';
  $handler->display->display_options['fields']['field_medical_device']['element_label_colon'] = FALSE;
  $handler->display->display_options['fields']['field_medical_device']['type'] = 'taxonomy_term_reference_plain';
  $handler->display->display_options['fields']['field_medical_device']['settings'] = array(
    'token_display_selected' => '',
    'token_display_unselected' => '',
  );
  $handler->display->display_options['fields']['field_medical_device']['delta_offset'] = '0';
  $handler->display->display_options['fields']['field_medical_device']['multi_type'] = 'ul';
  /* Field: Content: Therapy Areas */
  $handler->display->display_options['fields']['field_therapy_areas']['id'] = 'field_therapy_areas';
  $handler->display->display_options['fields']['field_therapy_areas']['table'] = 'field_data_field_therapy_areas';
  $handler->display->display_options['fields']['field_therapy_areas']['field'] = 'field_therapy_areas';
  $handler->display->display_options['fields']['field_therapy_areas']['type'] = 'taxonomy_term_reference_plain';
  $handler->display->display_options['fields']['field_therapy_areas']['delta_offset'] = '0';
  $handler->display->display_options['fields']['field_therapy_areas']['multi_type'] = 'ol';
  /* Field: Field: Work Location */
  $handler->display->display_options['fields']['field_work_location']['id'] = 'field_work_location';
  $handler->display->display_options['fields']['field_work_location']['table'] = 'field_data_field_work_location';
  $handler->display->display_options['fields']['field_work_location']['field'] = 'field_work_location';
  $handler->display->display_options['fields']['field_work_location']['type'] = 'taxonomy_term_reference_plain';
  $handler->display->display_options['fields']['field_work_location']['delta_offset'] = '0';
  $handler->display->display_options['fields']['field_work_location']['multi_type'] = 'ol';
  /* Field: Content: Edit link */
  $handler->display->display_options['fields']['edit_node']['id'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['table'] = 'views_entity_node';
  $handler->display->display_options['fields']['edit_node']['field'] = 'edit_node';
  $handler->display->display_options['fields']['edit_node']['label'] = 'Edit';
  /* Sort criterion: Content: Title */
  $handler->display->display_options['sorts']['title']['id'] = 'title';
  $handler->display->display_options['sorts']['title']['table'] = 'node';
  $handler->display->display_options['sorts']['title']['field'] = 'title';
  /* Filter criterion: Content: Published */
  $handler->display->display_options['filters']['status']['id'] = 'status';
  $handler->display->display_options['filters']['status']['table'] = 'node';
  $handler->display->display_options['filters']['status']['field'] = 'status';
  $handler->display->display_options['filters']['status']['value'] = 1;
  $handler->display->display_options['filters']['status']['group'] = 1;
  $handler->display->display_options['filters']['status']['expose']['operator'] = FALSE;
  /* Filter criterion: Content: Type */
  $handler->display->display_options['filters']['type']['id'] = 'type';
  $handler->display->display_options['filters']['type']['table'] = 'node';
  $handler->display->display_options['filters']['type']['field'] = 'type';
  $handler->display->display_options['filters']['type']['value'] = array(
    'clients' => 'clients',
  );
  /* Filter criterion: Content: Title */
  $handler->display->display_options['filters']['title']['id'] = 'title';
  $handler->display->display_options['filters']['title']['table'] = 'node';
  $handler->display->display_options['filters']['title']['field'] = 'title';
  $handler->display->display_options['filters']['title']['operator'] = 'starts';
  $handler->display->display_options['filters']['title']['exposed'] = TRUE;
  $handler->display->display_options['filters']['title']['expose']['operator_id'] = 'title_op';
  $handler->display->display_options['filters']['title']['expose']['label'] = 'Title Starts With';
  $handler->display->display_options['filters']['title']['expose']['operator'] = 'title_op';
  $handler->display->display_options['filters']['title']['expose']['identifier'] = 'title';
  $handler->display->display_options['filters']['title']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
  );
  /* Filter criterion: Content: Medical Device (field_medical_device) */
  $handler->display->display_options['filters']['field_medical_device_tid']['id'] = 'field_medical_device_tid';
  $handler->display->display_options['filters']['field_medical_device_tid']['table'] = 'field_data_field_medical_device';
  $handler->display->display_options['filters']['field_medical_device_tid']['field'] = 'field_medical_device_tid';
  $handler->display->display_options['filters']['field_medical_device_tid']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_medical_device_tid']['expose']['operator_id'] = 'field_medical_device_tid_op';
  $handler->display->display_options['filters']['field_medical_device_tid']['expose']['label'] = 'Medical Device';
  $handler->display->display_options['filters']['field_medical_device_tid']['expose']['operator'] = 'field_medical_device_tid_op';
  $handler->display->display_options['filters']['field_medical_device_tid']['expose']['identifier'] = 'field_medical_device_tid';
  $handler->display->display_options['filters']['field_medical_device_tid']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
  );
  $handler->display->display_options['filters']['field_medical_device_tid']['type'] = 'select';
  $handler->display->display_options['filters']['field_medical_device_tid']['vocabulary'] = 'medical_device';
  $handler->display->display_options['filters']['field_medical_device_tid']['hierarchy'] = 1;
  /* Filter criterion: Content: Therapy Areas (field_therapy_areas) */
  $handler->display->display_options['filters']['field_therapy_areas_tid']['id'] = 'field_therapy_areas_tid';
  $handler->display->display_options['filters']['field_therapy_areas_tid']['table'] = 'field_data_field_therapy_areas';
  $handler->display->display_options['filters']['field_therapy_areas_tid']['field'] = 'field_therapy_areas_tid';
  $handler->display->display_options['filters']['field_therapy_areas_tid']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_therapy_areas_tid']['expose']['operator_id'] = 'field_therapy_areas_tid_op';
  $handler->display->display_options['filters']['field_therapy_areas_tid']['expose']['label'] = 'Therapy Areas';
  $handler->display->display_options['filters']['field_therapy_areas_tid']['expose']['operator'] = 'field_therapy_areas_tid_op';
  $handler->display->display_options['filters']['field_therapy_areas_tid']['expose']['identifier'] = 'field_therapy_areas_tid';
  $handler->display->display_options['filters']['field_therapy_areas_tid']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
  );
  $handler->display->display_options['filters']['field_therapy_areas_tid']['type'] = 'select';
  $handler->display->display_options['filters']['field_therapy_areas_tid']['vocabulary'] = 'therapy_area';
  $handler->display->display_options['filters']['field_therapy_areas_tid']['hierarchy'] = 1;
  /* Filter criterion: Field: Work Location (field_work_location) */
  $handler->display->display_options['filters']['field_work_location_tid']['id'] = 'field_work_location_tid';
  $handler->display->display_options['filters']['field_work_location_tid']['table'] = 'field_data_field_work_location';
  $handler->display->display_options['filters']['field_work_location_tid']['field'] = 'field_work_location_tid';
  $handler->display->display_options['filters']['field_work_location_tid']['exposed'] = TRUE;
  $handler->display->display_options['filters']['field_work_location_tid']['expose']['operator_id'] = 'field_work_location_tid_op';
  $handler->display->display_options['filters']['field_work_location_tid']['expose']['label'] = 'Location';
  $handler->display->display_options['filters']['field_work_location_tid']['expose']['operator'] = 'field_work_location_tid_op';
  $handler->display->display_options['filters']['field_work_location_tid']['expose']['identifier'] = 'field_work_location_tid';
  $handler->display->display_options['filters']['field_work_location_tid']['expose']['remember_roles'] = array(
    2 => '2',
    1 => 0,
    3 => 0,
    4 => 0,
  );
  $handler->display->display_options['filters']['field_work_location_tid']['type'] = 'select';
  $handler->display->display_options['filters']['field_work_location_tid']['vocabulary'] = 'location';
  $handler->display->display_options['filters']['field_work_location_tid']['hierarchy'] = 1;

  /* Display: Page */
  $handler = $view->new_display('page', 'Page', 'page');
  $handler->display->display_options['defaults']['footer'] = FALSE;
  /* Footer: Global: Unfiltered text */
  $handler->display->display_options['footer']['area_text_custom']['id'] = 'area_text_custom';
  $handler->display->display_options['footer']['area_text_custom']['table'] = 'views';
  $handler->display->display_options['footer']['area_text_custom']['field'] = 'area_text_custom';
  $handler->display->display_options['footer']['area_text_custom']['label'] = 'Export CSV';
  $handler->display->display_options['footer']['area_text_custom']['content'] = '<a href="/clients-data/export">Export</a>';
  $handler->display->display_options['path'] = 'clients-data';

  /* Display: Block */
  $handler = $view->new_display('block', 'Block', 'block');
  $handler->display->display_options['defaults']['pager'] = FALSE;
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '5';
  $handler->display->display_options['defaults']['style_plugin'] = FALSE;
  $handler->display->display_options['style_plugin'] = 'default';
  $handler->display->display_options['defaults']['style_options'] = FALSE;
  $handler->display->display_options['defaults']['row_plugin'] = FALSE;
  $handler->display->display_options['row_plugin'] = 'fields';
  $handler->display->display_options['defaults']['row_options'] = FALSE;

  /* Display: Data export */
  $handler = $view->new_display('views_data_export', 'Data export', 'views_data_export_1');
  $handler->display->display_options['pager']['type'] = 'some';
  $handler->display->display_options['pager']['options']['items_per_page'] = '0';
  $handler->display->display_options['pager']['options']['offset'] = '0';
  $handler->display->display_options['style_plugin'] = 'views_data_export_csv';
  $handler->display->display_options['path'] = 'clients-data/export';
  $export['clients_data'] = $view;

  return $export;
}
