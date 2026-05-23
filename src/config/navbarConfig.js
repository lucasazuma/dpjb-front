// Centralized navbar configuration by role
export const ROLES = {
  ELECTOR: "elector",
  DEFAULT: "default",
};

export const MENU_CONFIG = {
  [ROLES.ELECTOR]: [
    { label: "Registrar Pedido", path: "/RegisterAsset" },
    { label: "Pedidos", path: "/Requests" },
    { label: "QRcode", path: "/QRcode" },
    { label: "Procura", path: "/SearchAsset" },
    { label: "Logout", action: "logout" },
  ],
  [ROLES.DEFAULT]: [
    { label: "Informação do usuário", path: "/AssetInfo" },
    { label: "QRcode", path: "/QRcode" },
    { label: "Logout", action: "logout" },
  ],
  GUEST: [{ label: "Login", path: "/Login" }],
};

export const getMenuForRole = (role) => {
  return MENU_CONFIG[role] || MENU_CONFIG.GUEST;
};

export const BRAND_NAME = "DPJB";
