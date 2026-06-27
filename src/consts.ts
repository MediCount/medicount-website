// 사이트 전역 설정 + 외부 서비스 ID.
// 정적 공개 사이트라 여기 값은 클라이언트에 노출됨(정상 — 분석/인증 토큰은 원래 공개값).
// 비워두면 해당 기능은 자동으로 비활성화됨(분석 미발화 / 인증 메타 미출력).

export const SITE = {
  name: "MediCount",
  url: "https://medicountapp.com",
  description:
    "여러 공급사에 흩어진 의료기기 사용보고를 사진 한 장으로 한 번에. 간호사가 보고하면 품목별 담당 공급사에게 비동기로 동시에 전파됩니다.",
  email: "support@medicountapp.com",
  locale: "ko_KR",
  ogImage: "/og.png",
} as const;

// ── 분석 ────────────────────────────────────────────────
// GA4 측정 ID. 예: "G-XXXXXXXXXX". 비우면 GA4·쿠키 고지 모두 미출력.
export const GA_MEASUREMENT_ID = "G-23HCZV18X2";

// ── 검색엔진 소유확인(메타태그 방식) ─────────────────────
// Google은 DNS TXT(도메인 속성) 권장 → 그 경우 아래는 비워둬도 됨.
export const GOOGLE_SITE_VERIFICATION = "";
export const NAVER_SITE_VERIFICATION = "";
export const BING_SITE_VERIFICATION = "";

// ── 조직 정보(JSON-LD Organization) ─────────────────────
export const ORG = {
  legalName: "메디카운트",
  founder: "김민철",
  email: "support@medicountapp.com",
  address: "경기도 성남시 분당구 벌말로30번길 12, 912동 404호",
  addressRegion: "경기도 성남시",
} as const;
