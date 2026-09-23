export const ADMIN_USERNAME = "AdminAlgoritm";
export const ADMIN_EMAIL = "AdminAlgoritm@algorithmnode.io";

export function resolveLoginEmail(identifier: string) {
  const value = identifier.trim();
  if (!value.includes("@") && value.toLowerCase() === ADMIN_USERNAME.toLowerCase()) {
    return ADMIN_EMAIL;
  }
  return value;
}

export function isAdminSession(user: { email?: string | null; app_metadata?: Record<string, unknown> } | null) {
  if (!user) return false;
  if (user.app_metadata?.role === "admin") return true;
  return (user.email ?? "").toLowerCase() === ADMIN_EMAIL.toLowerCase();
}
