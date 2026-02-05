import { leroyTheme } from "@/theme/leroy";

const iconSize = 80;
const stroke = leroyTheme.grey40;
const fill = leroyTheme.grey20;

/** Server icon: stacked trays/rack. */
export function ServerIcon() {
  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="8" y="8" width="48" height="14" rx="2" fill={fill} stroke={stroke} strokeWidth="2" />
      <rect x="12" y="12" width="8" height="6" rx="1" fill={leroyTheme.grey40} />
      <rect x="22" y="12" width="8" height="6" rx="1" fill={leroyTheme.grey40} />
      <rect x="32" y="12" width="8" height="6" rx="1" fill={leroyTheme.grey40} />
      <rect x="8" y="26" width="48" height="14" rx="2" fill={fill} stroke={stroke} strokeWidth="2" />
      <rect x="12" y="30" width="8" height="6" rx="1" fill={leroyTheme.grey40} />
      <rect x="22" y="30" width="8" height="6" rx="1" fill={leroyTheme.grey40} />
      <rect x="32" y="30" width="8" height="6" rx="1" fill={leroyTheme.grey40} />
      <rect x="8" y="44" width="48" height="14" rx="2" fill={fill} stroke={stroke} strokeWidth="2" />
      <rect x="12" y="48" width="8" height="6" rx="1" fill={leroyTheme.grey40} />
      <rect x="22" y="48" width="8" height="6" rx="1" fill={leroyTheme.grey40} />
      <rect x="32" y="48" width="8" height="6" rx="1" fill={leroyTheme.grey40} />
    </svg>
  );
}

/** Client icon: monitor/screen. */
export function ClientIcon() {
  return (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect x="6" y="10" width="52" height="36" rx="3" fill={fill} stroke={stroke} strokeWidth="2" />
      <rect x="10" y="14" width="44" height="28" rx="1" fill={leroyTheme.grey0} stroke={leroyTheme.grey20} strokeWidth="1" />
      <path d="M26 24h12v2H26zM26 28h8v2h-8z" fill={leroyTheme.grey40} />
      <rect x="28" y="50" width="8" height="4" fill={leroyTheme.grey40} />
      <path d="M22 54h20v2H22z" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}
