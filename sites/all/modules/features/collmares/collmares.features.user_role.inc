<?php
/**
 * @file
 * collmares.features.user_role.inc
 */

/**
 * Implements hook_user_default_roles().
 */
function collmares_user_default_roles() {
  $roles = array();

  // Exported role: administrator.
  $roles['administrator'] = array(
    'name' => 'administrator',
    'weight' => 2,
  );

  // Exported role: cmr administrator.
  $roles['cmr administrator'] = array(
    'name' => 'cmr administrator',
    'weight' => 3,
  );

  return $roles;
}
