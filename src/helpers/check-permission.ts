interface User {
  module: { name: string };
  permissions: {
    name: string;
  }[];
}

function checkPermission(
  userModules: User[],
  userModule: string,
  userPermission: string
): boolean {
  if (!userModules) return false;

  return userModules.some(
    (module) =>
      module.module.name === userModule &&
      module.permissions.some(
        (permission) => permission.name === userPermission
      )
  );
}

export default checkPermission;
