export function InsightsEmptyStateIllustration({
  width = 160,
  height = 132,
}: { width?: number; height?: number }) {
  return (
    <img
      src="/insights-empty-state.svg"
      width={width}
      height={height}
      alt=""
      style={{ display: "block", width, height }}
    />
  );
}

// The "AI gradient diagonal" — same 3-stop ramp used by BookMoreMenu's
// Smart Summary / Smart Prep icons: red → violet → blue, in userSpaceOnUse
// coords tied to the 24×24 viewBox. Each icon supplies its own endpoint pair
// because the gradient is aligned to that icon's specific path layout.
let aiGradientIdSeq = 0;
const nextAiGradientId = () => `ai-grad-${++aiGradientIdSeq}`;

function AiGradientDefs({
  id,
  x1,
  y1,
  x2,
  y2,
}: {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) {
  return (
    <defs>
      <linearGradient id={id} x1={x1} y1={y1} x2={x2} y2={y2} gradientUnits="userSpaceOnUse">
        <stop stopColor="#BE0C1E" />
        <stop offset="0.5" stopColor="#AB48DA" />
        <stop offset="1" stopColor="#4069FE" />
      </linearGradient>
    </defs>
  );
}

export function SmartSummaryIcon({
  size = 24,
  gradient = false,
}: {
  size?: number;
  gradient?: boolean;
}) {
  const gradId = gradient ? nextAiGradientId() : "";
  const fill = gradient ? `url(#${gradId})` : "#242628";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {gradient && <AiGradientDefs id={gradId} x1={5.40315} y1={9.56562} x2={19.8494} y2={21.5599} />}
      <path d="M4.64453 4.25H15.3945V5.75H4.64453V4.25Z" fill={fill} />
      <path d="M16.6445 11L18.1445 14L21.1445 15.5L18.1445 17L16.6445 20L15.1445 17L12.1445 15.5L15.1445 14L16.6445 11Z" fill={fill} />
      <path d="M19.3945 7.75H4.64453V9.25H19.3945V7.75Z" fill={fill} />
      <path d="M4.64453 11.25H14.8945L13.3945 12.75H4.64453V11.25Z" fill={fill} />
      <path d="M10.8945 14.75H4.64453V16.25H10.8945V14.75Z" fill={fill} />
      <path d="M4.64453 19.75V18.25H13.3945L14.8945 19.75H4.64453Z" fill={fill} />
    </svg>
  );
}

export function SmartPrepIcon({
  size = 24,
  gradient = false,
}: {
  size?: number;
  gradient?: boolean;
}) {
  const gradId = gradient ? nextAiGradientId() : "";
  const fill = gradient ? `url(#${gradId})` : "#242628";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {gradient && <AiGradientDefs id={gradId} x1={4.11505} y1={9.33319} x2={20.8869} y2={22.9509} />}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4299 11.365C15.8599 11.365 16.2749 11.3 16.6699 11.17C17.0699 11.04 17.4299 10.86 17.7549 10.625L19.8749 12.75L21.0099 13.885L22.0649 12.83L18.8049 9.57501C19.0249 9.25001 19.2049 8.895 19.3399 8.505C19.4749 8.12 19.5449 7.7 19.5449 7.25C19.5449 6.1 19.1449 5.12999 18.3499 4.32999C17.5499 3.53499 16.5749 3.13501 15.4299 3.13501C14.2849 3.13501 13.3099 3.53499 12.5099 4.32999C11.7149 5.12999 11.3149 6.1 11.3149 7.25C11.3149 8.4 11.7149 9.36998 12.5099 10.17C13.3099 10.965 14.2799 11.365 15.4299 11.365ZM13.5749 5.39499C14.0799 4.88499 14.6999 4.63501 15.4299 4.63501C16.1599 4.63501 16.7799 4.88499 17.2849 5.39499C17.7949 5.89999 18.0449 6.52 18.0449 7.25C18.0449 7.98 17.7949 8.59998 17.2849 9.10498C16.7799 9.61498 16.1599 9.86499 15.4299 9.86499C14.6999 9.86499 14.0799 9.61498 13.5749 9.10498C13.0649 8.59998 12.8149 7.98 12.8149 7.25C12.8149 6.52 13.0649 5.89999 13.5749 5.39499Z"
        fill={fill}
      />
      <path d="M3.25 5H9.43V6.75H3.25V5Z" fill={fill} />
      <path d="M3.25 9H9.43V10.75H3.25V9Z" fill={fill} />
      <path d="M14.93 13H3.25V14.75H13.43L14.93 13Z" fill={fill} />
      <path d="M3.25 17H11.43V18.75H3.25V17Z" fill={fill} />
      <path d="M17.1801 21.5L15.6801 18.5L12.6801 17L15.6801 15.5L17.1801 12.5L18.6801 15.5L21.6801 17L18.6801 18.5L17.1801 21.5Z" fill={fill} />
    </svg>
  );
}

export function SmartRiskScannerIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 21.25H6.5V22.75H2V18.25H3.5V21.25Z" fill="#242628" />
      <path d="M22.5 22.75H18V21.25H21V18.25H22.5V22.75Z" fill="#242628" />
      <path d="M13.335 11.165L15.5 12.25L13.335 13.335L12.25 15.5L11.165 13.335L9 12.25L11.165 11.165L12.25 9L13.335 11.165Z" fill="#242628" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.75 8.09766V10.4424C18.75 13.9824 17.0604 17.3633 14.2305 19.4883L12.25 20.9727L10.2695 19.4883C7.43958 17.3633 5.75 13.9824 5.75 10.4424V8.09766L12.25 4.38281L18.75 8.09766ZM7.25 8.96777V10.4424C7.25 13.5124 8.71492 16.4431 11.1699 18.2881L12.25 19.0977L13.3301 18.2881C15.7851 16.4481 17.25 13.5124 17.25 10.4424V8.96777L12.25 6.11328L7.25 8.96777Z"
        fill="#242628"
      />
      <path d="M6.5 3.5H3.5V6.5H2V2H6.5V3.5Z" fill="#242628" />
      <path d="M22.5 6.5H21V3.5H18V2H22.5V6.5Z" fill="#242628" />
    </svg>
  );
}

export function AuditSmartPrepIcon({
  size = 24,
  gradient = false,
}: {
  size?: number;
  gradient?: boolean;
}) {
  const gradId = gradient ? nextAiGradientId() : "";
  const fill = gradient ? `url(#${gradId})` : "#242628";
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {gradient && <AiGradientDefs id={gradId} x1={3.5} y1={8.5} x2={20.5} y2={22.5} />}
      {/* Shield outline */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 3.5L4.5 6.5V11C4.5 15.5 7.5 19.5 12 21C16.5 19.5 19.5 15.5 19.5 11V6.5L12 3.5ZM6 7.5L12 5.25L18 7.5V11C18 14.75 15.5 18 12 19.25C8.5 18 6 14.75 6 11V7.5Z"
        fill={fill}
      />
      {/* Document lines inside shield */}
      <path d="M9 10H15V11H9V10Z" fill={fill} />
      <path d="M9 12.5H15V13.5H9V12.5Z" fill={fill} />
      <path d="M9 15H13V16H9V15Z" fill={fill} />
      {/* AI sparkle */}
      <path d="M17.5 16L18.5 18L20.5 19L18.5 20L17.5 22L16.5 20L14.5 19L16.5 18L17.5 16Z" fill={fill} />
    </svg>
  );
}
