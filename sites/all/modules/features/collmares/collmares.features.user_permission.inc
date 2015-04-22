<?php
/**
 * @file
 * collmares.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function collmares_user_default_permissions() {
  $permissions = array();

  // Exported permission: 'simple_admin'.
  $permissions['simple_admin'] = array(
    'name' => 'simple_admin',
    'roles' => array(
      'administrator' => 'administrator',
      'cmr administrator' => 'cmr administrator',
    ),
    'module' => 'cmr',
  );

  return $permissions;
}
