export const ROLES = {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  CONTRIBUTOR: 'contributor',
=======
<<<<<<< HEAD
=======
=======
>>>>>>> remove comments
  CONTRIBUTOR: 'contributor',
  DEVELOPER: 'developer',
  MANAGER: 'manager',
=======
=======
>>>>>>> Update Role
=======
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
>>>>>>> Update Role
=======
=======
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
  // VIEWER: 'viewer',
  CONTRIBUTOR: 'contributor',
  PROOFREADER: 'proofreader',
  DEVELOPER: 'developer',
  MANAGER: 'manager',
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
  OWNER: 'owner',
<<<<<<< HEAD
  MANAGER: 'manager',
>>>>>>> Update Role
  DEVELOPER: 'developer',
  MANAGER: 'manager',
  OWNER: 'owner',
=======
>>>>>>> remove comments
  PROOFREADER: 'proofreader',
  // VIEWER: 'viewer',
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export const ROLES_AVAILABLE_INVITE_USER = [ROLES.OWNER, ROLES.MANAGER];

// Array ordenado Hierarquicamente
=======
// Arrey ordenado Hierarquicamente
>>>>>>> remove comments
=======
// Array ordenado Hierarquicamente
>>>>>>> erase comments
=======
// Array ordenado Hierarquicamente
>>>>>>> Code Review
export const ROLES_LIST = [
=======
  // VIEWER: 'viewer',
=======
>>>>>>> Update Role
=======
  // VIEWER: 'viewer',
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
>>>>>>> Update Role
  CONTRIBUTOR: 'contributor',
  PROOFREADER: 'proofreader',
  DEVELOPER: 'developer',
  MANAGER: 'manager',
  OWNER: 'owner',
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Arrey ordenado Hierarquicamente
export const ROLES_LIST = [ // mudar nome
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
// Array ordenado Hierarquicamente
=======
=======
>>>>>>> remove comments
=======
>>>>>>> erase comments
=======
>>>>>>> Code Review
// Array ordenado hierarquicamente
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
// Array ordenado Hierarquicamente
>>>>>>> Code Review
export const ROLES_LIST = [
<<<<<<< HEAD
>>>>>>> erase comments
=======
export const ROLES_LIST = [ // mudar nome
>>>>>>> remove comments
=======
export const ROLES_LIST = [
>>>>>>> erase comments
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
export const ROLES_LIST = [ // mudar nome
>>>>>>> remove comments
>>>>>>> remove comments
=======
>>>>>>> erase comments
=======
=======
  OWNER: 'owner',
};

<<<<<<< HEAD
// Arrey ordenado Hierarquicamente
export const ROLES_LIST = [ // mudar nome
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
<<<<<<< HEAD
>>>>>>> Feita lógica de restrição de convites de cargos no módulo role
=======
=======
// Array ordenado Hierarquicamente
export const ROLES_LIST = [
>>>>>>> erase comments
>>>>>>> erase comments
=======
  OWNER: 'owner',
};

// Array ordenado Hierarquicamente
export const ROLES_LIST = [
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
  ROLES.OWNER,
  ROLES.MANAGER,
  ROLES.DEVELOPER,
  ROLES.PROOFREADER,
  ROLES.CONTRIBUTOR,
  // ROLES.VIEWER,
];

export const ERROR_CODES = {
  INVITED_EXISTING_ROLE: 'INVITED_EXISTING_ROLE',
  INVITED_NOT_AVAILABLE: 'INVITED_NOT_AVAILABLE',
  INVITED_NOT_EXISTING_ROLE: 'INVITED_NOT_EXISTING_ROLE',
  INVITED_SAME_OR_HIGHER_ROLE: 'INVITED_SAME_OR_HIGHER_ROLE',
  INVITED_YOURSELF: 'INVITED_YOURSELF',
  REMOVED_NOT_EXISTING_ROLE: 'REMOVED_NOT_EXISTING_ROLE',
  REMOVED_SAME_OR_HIGHER_ROLE: 'REMOVED_SAME_OR_HIGHER_ROLE',
  REMOVED_YOURSELF_AS_OWNER: 'REMOVED_YOURSELF_AS_OWNER',
  UPDATED_FROM_SAME_OR_HIGHER_ROLE: 'UPDATED_FROM_SAME_OR_HIGHER_ROLE',
  UPDATED_NOT_EXISTING_ROLE: 'UPDATED_NOT_EXISTING_ROLE',
  UPDATED_TO_SAME_OR_HIGHER_ROLE: 'UPDATED_TO_SAME_OR_HIGHER_ROLE',
  UPDATED_YOURSELF: 'UPDATED_YOURSELF',
};

export const ERROR_MESSAGES = {
  INVITED_EXISTING_ROLE: 'The provided user is already part of the project.',
<<<<<<< HEAD
  INVITED_NOT_AVAILABLE: 'Only manager and owner can invite users to a project',
  INVITED_NOT_EXISTING_ROLE: "You don't have a role in this project",
  INVITED_SAME_OR_HIGHER_ROLE:
    'You cannot invite an user with the same or higher role.',
  INVITED_YOURSELF: 'You cannot invite yourself.',
  REMOVED_NOT_EXISTING_ROLE: 'The provided user is not part of the project.',
  REMOVED_SAME_OR_HIGHER_ROLE:
    'You can not remove someone with the same or higher role than your own.',
  REMOVED_YOURSELF_AS_OWNER:
    'You cannot remove your ownership from the project.',
  UPDATED_FROM_SAME_OR_HIGHER_ROLE:
    'You can not update someone with the same or higher role than your own.',
  UPDATED_NOT_EXISTING_ROLE: 'The provided user is not part of the project.',
  UPDATED_TO_SAME_OR_HIGHER_ROLE:
    'You can not give the same or higher role than your own to an user.',
  UPDATED_YOURSELF: 'You cannot update your own role.',
=======
  INVITED_SAME_OR_HIGHER_ROLE:
    'You cannot invite an user with the same or higher role.',
  UPDATED_YOURSELF: 'You cannot update your own role.',
  UPDATED_NOT_EXISTING_ROLE: 'The provided user is not part of the project.',
  UPDATED_TO_SAME_OR_HIGHER_ROLE:
    'You can not give the same or higher role than your own to an user.',
  UPDATED_FROM_SAME_OR_HIGHER_ROLE:
    'You can not update someone with the same or higher role than your own.',
  REMOVED_NOT_EXISTING_ROLE: 'The provided user is not part of the project.',
  REMOVED_YOURSELF_AS_OWNER:
    'You cannot remove your ownership from the project.',
  REMOVED_SAME_OR_HIGHER_ROLE:
    'You can not remove someone with the same or higher role than your own.',
>>>>>>> merge
};
