export function InsightsEmptyStateIllustration({
  width = 160,
  height = 132,
}: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 160 132" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#empty-state-clip)">
        <path d="M162.186 38.3252L203.755 62.3252L148.755 157.588L107.186 133.588L162.186 38.3252Z" fill="#E2E2E5" />
        <path d="M44.3672 56.2373L45.2332 56.7373L1.64002 132.243L0.773991 131.743L44.3672 56.2373Z" fill="url(#empty-state-line0)" />
        <path d="M132.764 -0.864258L133.63 -0.364258L57.1297 132.138L56.2637 131.638L132.764 -0.864258Z" fill="url(#empty-state-line1)" />
        <g filter="url(#empty-state-shadow)">
          <path d="M48 46C48 39.3726 53.3726 34 60 34H100C106.627 34 112 39.3726 112 46V86C112 92.6274 106.627 98 100 98H60C53.3726 98 48 92.6274 48 86V46Z" fill="white" shapeRendering="crispEdges" />
          <path d="M88.5249 61.5L90.3999 57.75L94.1499 55.875L90.3999 54L88.5249 50.25L86.6499 54L82.8999 55.875L86.6499 57.75L88.5249 61.5Z" fill="url(#empty-state-sparkle)" />
          <path d="M79.2749 62.125L75.3999 54.375L71.5166 62.125L63.7749 66L71.5166 69.875L75.3999 77.625L79.2749 69.875L87.0249 66L79.2749 62.125Z" fill="url(#empty-state-sparkle)" />
          <path d="M86.6499 74.2498L88.5249 70.4998L90.3999 74.2498L94.1499 76.1248L90.3999 77.9998L88.5249 81.7498L86.6499 77.9998L82.8999 76.1248L86.6499 74.2498Z" fill="url(#empty-state-sparkle)" />
        </g>
      </g>
      <defs>
        <filter id="empty-state-shadow" x="44" y="30" width="104" height="104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dx="16" dy="16" />
          <feGaussianBlur stdDeviation="10" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
        <linearGradient id="empty-state-line0" x1="-8.9997" y1="153" x2="34.0003" y2="70.9997" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E2E2E5" stopOpacity="0" />
          <stop offset="0.15" stopColor="#BE0C1E" />
          <stop offset="0.5" stopColor="#AB48DA" />
          <stop offset="0.85" stopColor="#4069FE" />
          <stop offset="1" stopColor="#E2E2E5" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="empty-state-line1" x1="59.9997" y1="131.999" x2="134" y2="19.4995" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E2E2E5" stopOpacity="0" />
          <stop offset="0.15" stopColor="#BE0C1E" />
          <stop offset="0.5" stopColor="#AB48DA" />
          <stop offset="0.85" stopColor="#4069FE" />
          <stop offset="1" stopColor="#E2E2E5" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="empty-state-sparkle" x1="65.1715" y1="60.8812" x2="93.5336" y2="82.5562" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BE0C1E" />
          <stop offset="0.5" stopColor="#AB48DA" />
          <stop offset="1" stopColor="#4069FE" />
        </linearGradient>
        <clipPath id="empty-state-clip">
          <rect width="160" height="132" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function SmartSummaryIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.64453 4.25H15.3945V5.75H4.64453V4.25Z" fill="#242628" />
      <path d="M16.6445 11L18.1445 14L21.1445 15.5L18.1445 17L16.6445 20L15.1445 17L12.1445 15.5L15.1445 14L16.6445 11Z" fill="#242628" />
      <path d="M19.3945 7.75H4.64453V9.25H19.3945V7.75Z" fill="#242628" />
      <path d="M4.64453 11.25H14.8945L13.3945 12.75H4.64453V11.25Z" fill="#242628" />
      <path d="M10.8945 14.75H4.64453V16.25H10.8945V14.75Z" fill="#242628" />
      <path d="M4.64453 19.75V18.25H13.3945L14.8945 19.75H4.64453Z" fill="#242628" />
    </svg>
  );
}

export function SmartPrepIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.4299 11.365C15.8599 11.365 16.2749 11.3 16.6699 11.17C17.0699 11.04 17.4299 10.86 17.7549 10.625L19.8749 12.75L21.0099 13.885L22.0649 12.83L18.8049 9.57501C19.0249 9.25001 19.2049 8.895 19.3399 8.505C19.4749 8.12 19.5449 7.7 19.5449 7.25C19.5449 6.1 19.1449 5.12999 18.3499 4.32999C17.5499 3.53499 16.5749 3.13501 15.4299 3.13501C14.2849 3.13501 13.3099 3.53499 12.5099 4.32999C11.7149 5.12999 11.3149 6.1 11.3149 7.25C11.3149 8.4 11.7149 9.36998 12.5099 10.17C13.3099 10.965 14.2799 11.365 15.4299 11.365ZM13.5749 5.39499C14.0799 4.88499 14.6999 4.63501 15.4299 4.63501C16.1599 4.63501 16.7799 4.88499 17.2849 5.39499C17.7949 5.89999 18.0449 6.52 18.0449 7.25C18.0449 7.98 17.7949 8.59998 17.2849 9.10498C16.7799 9.61498 16.1599 9.86499 15.4299 9.86499C14.6999 9.86499 14.0799 9.61498 13.5749 9.10498C13.0649 8.59998 12.8149 7.98 12.8149 7.25C12.8149 6.52 13.0649 5.89999 13.5749 5.39499Z"
        fill="#242628"
      />
      <path d="M3.25 5H9.43V6.75H3.25V5Z" fill="#242628" />
      <path d="M3.25 9H9.43V10.75H3.25V9Z" fill="#242628" />
      <path d="M14.93 13H3.25V14.75H13.43L14.93 13Z" fill="#242628" />
      <path d="M3.25 17H11.43V18.75H3.25V17Z" fill="#242628" />
      <path d="M17.1801 21.5L15.6801 18.5L12.6801 17L15.6801 15.5L17.1801 12.5L18.6801 15.5L21.6801 17L18.6801 18.5L17.1801 21.5Z" fill="#242628" />
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
