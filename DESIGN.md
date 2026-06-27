---
version: alpha
name: MediCount-marketing-design
description: "MediCount 마케팅 홈페이지 디자인 시스템. 절제된 라이트 마케팅 캔버스 — 순백(#ffffff) 배경에 쿨 톤 surface 밴드(#f7f8fa~#e7eaef)와 1px 헤어라인으로 위계를 만든다. 유일한 색상 액센트는 라벤더블루(#5e6ad2)로 브랜드 마크·1차 CTA·포커스 링·핵심 링크·전파 다이어그램 활성선에만 절제해서 쓴다. 타입은 Pretendard 단일 가족(한글·영문) 500~600에 네거티브 트래킹. 카드 12px·패널 16px·버튼 8px. 그래디언트·스포트라이트 카드·두 번째 액센트·700 weight·pill CTA는 쓰지 않는다. 제품 스크린샷이 없으므로 라이트 패널과 '1→N 전파' 다이어그램이 페이지의 주인공이 된다."

colors:
  primary: "#5e6ad2"
  on-primary: "#ffffff"
  primary-hover: "#4c57c0"
  primary-pressed: "#404aa8"
  primary-soft: "#eceefb"
  ink: "#0d0e12"
  ink-muted: "#3f434d"
  ink-subtle: "#6b7079"
  ink-tertiary: "#9aa0aa"
  canvas: "#ffffff"
  surface-1: "#f7f8fa"
  surface-2: "#eef0f4"
  surface-3: "#e7eaef"
  hairline: "#e6e8ec"
  hairline-strong: "#d3d6dd"
  inverse-canvas: "#0d0e12"
  inverse-ink: "#f7f8f8"
  semantic-success: "#27a644"

typography:
  display-xl:
    fontFamily: Pretendard
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: -2.4px
  display-lg:
    fontFamily: Pretendard
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1.6px
  display-md:
    fontFamily: Pretendard
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -1.0px
  headline:
    fontFamily: Pretendard
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.6px
  card-title:
    fontFamily: Pretendard
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.3px
  subhead:
    fontFamily: Pretendard
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: -0.2px
  body-lg:
    fontFamily: Pretendard
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: -0.1px
  body:
    fontFamily: Pretendard
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: -0.05px
  body-sm:
    fontFamily: Pretendard
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  caption:
    fontFamily: Pretendard
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  button:
    fontFamily: Pretendard
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: 0
  eyebrow:
    fontFamily: Pretendard
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: 0.6px
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px
  section-mobile: 64px

components:
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.body-sm}"
    height: 60px
    note: "하단 1px {colors.hairline}, sticky, backdrop-blur(반투명 흰 배경). 브랜드 마크 좌측, 링크 우측, 우측 끝 button-primary."
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 16px
    hover: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "1px {colors.hairline-strong}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 16px
  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.ink-muted}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 14px
  feature-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    border: "1px {colors.hairline}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: 24px
    hover: "border {colors.primary}, 미세 그림자 0 1px 2px rgba(13,14,18,0.05)"
  panel:
    backgroundColor: "{colors.surface-1}"
    border: "1px {colors.hairline}"
    rounded: "{rounded.xl}"
    padding: 24px
    note: "전파 다이어그램·강조 시각요소를 담는 큰 패널. 페이지의 주인공."
  cta-banner:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    border: "1px {colors.hairline}"
    typography: "{typography.headline}"
    rounded: "{rounded.xl}"
    padding: 48px
    note: "라이트 강조 패널(다크 블록 아님). 필요 시 {colors.primary-soft} 옅은 라벤더 틴트 허용."
  badge:
    backgroundColor: "{colors.primary-soft}"
    textColor: "{colors.primary-pressed}"
    typography: "{typography.eyebrow}"
    rounded: "{rounded.pill}"
    padding: 4px 10px
  footer:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    note: "상단 1px {colors.hairline}. 사업자 정보 + 법적 링크."
---

## Overview

MediCount 마케팅 홈페이지는 **절제된 라이트 마케팅 캔버스**다. 배경은 순백 `{colors.canvas}` (#ffffff)이고, 그 위에 쿨 톤의 `{colors.surface-1}`~`{colors.surface-3}` (#f7f8fa→#e7eaef) 밴드와 1px 헤어라인(`{colors.hairline}` #e6e8ec)으로 위계를 만든다. 텍스트는 쿨 near-black `{colors.ink}` (#0d0e12).

유일한 색상 액센트는 **라벤더블루** `{colors.primary}` (#5e6ad2) — 브랜드 마크, 1차 CTA, 포커스 링, 핵심 링크 강조, 전파 다이어그램의 활성선에만 절제해서 쓴다. 라이트 배경이므로 호버는 한 단계 **어두운** `{colors.primary-hover}` (#4c57c0). 두 번째 채도 색은 도입하지 않는다.

타입은 **Pretendard 단일 가족**(한글·영문 모두 커버)으로, weight 500~600에 네거티브 트래킹(디스플레이 -2.4px ~ 본문 -0.05px). 700(bold)은 쓰지 않는다. 모노는 데이터 토큰(GTIN·ID)에만 시스템 모노로 드물게.

제품 스크린샷이 없으므로 **라이트 패널(`panel`)과 '1건의 사용보고 → 여러 공급사' 전파 다이어그램**이 페이지의 주인공이 된다(§Known Gaps).

### Key Characteristics

- **라이트 캔버스** — `{colors.canvas}` (#ffffff).
- **단일 라벤더블루 액센트** `{colors.primary}` (#5e6ad2) — 브랜드 마크·1차 CTA·포커스·링크·다이어그램 활성선에만.
- **surface 밴드 + 헤어라인**으로 깊이를 만든다(과한 드롭섀도·그래디언트 대신).
- 디스플레이 트래킹은 강하게 네거티브, 본문은 -0.05px.
- 카드 `{rounded.lg}` 12px, 패널 `{rounded.xl}` 16px, 버튼/인풋 `{rounded.md}` 8px. **CTA에 pill 금지.**
- 그래디언트·스포트라이트 카드·두 번째 액센트·700 weight 없음.

## Colors

### Brand & Accent
- **Lavender-Blue** (`{colors.primary}` #5e6ad2): 1차 CTA, 브랜드 마크, 링크 강조, 다이어그램 활성선.
- **Lavender Hover** (`{colors.primary-hover}` #4c57c0): 1차 CTA 호버(라이트 배경에서는 더 어둡게).
- **Lavender Pressed/Focus** (`{colors.primary-pressed}` #404aa8): 눌림·포커스 링 틴트, 배지 텍스트.
- **Lavender Soft** (`{colors.primary-soft}` #eceefb): eyebrow 배지·아이콘 칩의 옅은 라벤더 배경.

### Surface
- **Canvas** (`{colors.canvas}` #ffffff): 기본 페이지 배경, 기본 카드 배경.
- **Surface 1** (`{colors.surface-1}` #f7f8fa): 섹션 밴드·패널·CTA·푸터 배경.
- **Surface 2** (`{colors.surface-2}` #eef0f4): 호버·강조 표면·중첩 셀.
- **Surface 3** (`{colors.surface-3}` #e7eaef): 더 깊은 중첩·구분 셀.
- **Hairline** (`{colors.hairline}` #e6e8ec): 카드·구분선 1px.
- **Hairline Strong** (`{colors.hairline-strong}` #d3d6dd): 보조 버튼 보더·강한 구분.

### Text
- **Ink** (`{colors.ink}` #0d0e12): 헤드라인·강조 본문.
- **Ink Muted** (`{colors.ink-muted}` #3f434d): 기본 본문.
- **Ink Subtle** (`{colors.ink-subtle}` #6b7079): 보조 본문·캡션·라벨.
- **Ink Tertiary** (`{colors.ink-tertiary}` #9aa0aa): 비활성·각주(대형/장식 한정).

> 대비: 본문은 `{colors.ink-muted}`(약 10:1), 보조는 `{colors.ink-subtle}`(약 5.3:1)로 WCAG AA(4.5:1) 충족. `{colors.ink-tertiary}`는 대형 텍스트/장식에만.

## Typography

### Font Family
- **Pretendard** — 단일 기본 가족. 한글·영문·숫자를 모두 커버하는 지오메트릭 산세리프. (`Pretendard Variable`, jsDelivr CDN)
- **System Mono** — `ui-monospace, SFMono-Regular, Menlo` — GTIN·LOT·ID 같은 데이터 토큰에만 **드물게**. 별도 웹폰트를 로드하지 않는다(폰트 산만함 방지).

스택: `"Pretendard Variable", Pretendard, -apple-system, "SF Pro Display", system-ui, sans-serif`. 디스플레이→본문이 하나의 목소리로 이어진다.

### Hierarchy

| Token | Size | Weight | Tracking | Use |
|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 600 | -2.4px | Hero 헤드라인 (모바일 ~36px) |
| `{typography.display-lg}` | 48px | 600 | -1.6px | 섹션 오프너 헤드라인 |
| `{typography.display-md}` | 36px | 600 | -1.0px | 서브섹션 헤드라인 |
| `{typography.headline}` | 28px | 600 | -0.6px | CTA 배너 헤딩 |
| `{typography.card-title}` | 20px | 600 | -0.3px | 카드 제목 |
| `{typography.subhead}` | 20px | 400 | -0.2px | 리드 문단 |
| `{typography.body-lg}` | 18px | 400 | -0.1px | Hero 부제 |
| `{typography.body}` | 16px | 400 | -0.05px | 기본 본문 |
| `{typography.body-sm}` | 14px | 400 | 0 | 카드 본문·푸터 |
| `{typography.caption}` | 12px | 500 | 0 | 캡션·메타 |
| `{typography.button}` | 14px | 500 | 0 | 버튼 라벨 |
| `{typography.eyebrow}` | 12px | 500 | +0.6px | 섹션 eyebrow(양수 트래킹) |

### Principles
- 디스플레이에 네거티브 트래킹을 적극 적용, eyebrow만 양수 트래킹으로 분류표시.
- **weight는 400/500/600만.** 700 금지.
- 디스플레이는 600, 본문은 400 — 하나의 가족, 좁은 weight 범위.
- Mono는 데이터 토큰 전용 — 카피·라벨에 남발하지 않는다.

## Layout

- **Base unit** 4px. 토큰: §spacing.
- **Max content width** 1120px, 좌우 패딩 24px(모바일)/40px(데스크톱).
- 섹션 간격 `{spacing.section}` 96px(데스크톱) / `{spacing.section-mobile}` 64px(모바일).
- 카드 그리드: 데스크톱 2-up(기능·이용대상), 모바일 1-up.
- **Whitespace 철학**: 라이트에서는 여백 자체가 구분자다. 섹션은 넉넉한 간격 + 헤어라인 룰, 가끔 `{colors.surface-1}` 옅은 밴드로 리듬을 준다.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 | 보더만(또는 보더 없음) | 본문·헤드라인·기본 카드 |
| 1 | 카드 + 1px `{colors.hairline}` (+ 호버 시 미세 그림자 `0 1px 2px rgba(13,14,18,0.05)`) | 기본 카드 |
| 2 | `{colors.surface-2}` 배경 + 1px `{colors.hairline-strong}` | 호버·강조 표면 |
| focus | 2px `{colors.primary-pressed}` 아웃라인(~50%) | 포커스 인풋·버튼·링크 |

깊이는 헤어라인 + 미세 surface 단계로. **분위기 그래디언트·큰 드롭섀도는 쓰지 않는다.**

## Shapes

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | 작은 칩·배지 |
| `{rounded.sm}` | 6px | 인라인 태그 |
| `{rounded.md}` | 8px | 버튼·인풋 |
| `{rounded.lg}` | 12px | 기능·이용대상 카드 |
| `{rounded.xl}` | 16px | 다이어그램 패널·CTA 배너 |
| `{rounded.pill}` | 9999px | 배지·상태 pill (버튼 제외) |

## Components

### Navigation — `top-nav`
라이트 sticky 바(높이 60px, 반투명 흰 배경 + backdrop-blur, 하단 1px `{colors.hairline}`). 좌측 브랜드 마크 `Medi`+`Count`(Count는 `{colors.primary}`), 우측 텍스트 링크(`{colors.ink-subtle}` → hover `{colors.ink}`), 우측 끝 `button-primary`("도입 문의").

### Buttons
- **`button-primary`** — `{colors.primary}` 배경, 흰 텍스트, `{rounded.md}`, 패딩 10×16, hover `{colors.primary-hover}`(더 어둡게). 페이지의 주 행동.
- **`button-secondary`** — `{colors.canvas}` 배경, `{colors.ink}` 텍스트, 1px `{colors.hairline-strong}` 보더, hover 시 보더 `{colors.primary}`.
- **`button-ghost`** — 투명 배경, `{colors.ink-muted}` 텍스트.
- CTA는 항상 `{rounded.md}` 8px. **pill 금지.**

### Cards & Panels
- **`feature-card`** — `{colors.canvas}` 배경 + 1px `{colors.hairline}`, `{rounded.lg}` 12px, 패딩 24px. 호버 시 보더 `{colors.primary}` + 미세 그림자. 큰 lift·그래디언트 금지. 아이콘은 라인 아이콘(stroke=`{colors.primary}`), 이모지 금지.
- **`panel`** — `{colors.surface-1}` + 1px `{colors.hairline}`, `{rounded.xl}` 16px. 전파 다이어그램 등 주요 시각요소 컨테이너.
- **`cta-banner`** — `{colors.surface-1}`(또는 옅은 `{colors.primary-soft}` 틴트) + 헤어라인, `{rounded.xl}`, 패딩 48px, 헤딩 `{typography.headline}`. **다크 블록 아님.**

### Badge / Eyebrow
- 섹션 eyebrow: `{typography.eyebrow}`(양수 트래킹). 인덱스(01/02/03)는 `{colors.primary}`, 라벨은 `{colors.ink-subtle}`.
- 배지: `{colors.primary-soft}` 배경 + `{colors.primary-pressed}` 텍스트, `{rounded.pill}`.

### Footer
`{colors.surface-1}` 배경, 상단 1px `{colors.hairline}`. 브랜드 마크 + 법적 링크(이용약관·개인정보처리방침) + 사업자 정보(상호·대표·사업자등록번호·주소·연락처)는 `{colors.ink-subtle}` `{typography.caption}`, 대비 충족.

## Page Sections (MediCount 홈페이지)

1. **Nav** (`top-nav`)
2. **Hero** — `{typography.display-xl}` 헤드라인 + `{typography.body-lg}` 부제 + `button-primary`/`button-ghost`. 우측(데스크톱)에 `panel` 안의 **'1건의 사용보고 → 여러 공급사' 전파 다이어그램**(활성선 `{colors.primary}`). 배경은 화이트 캔버스(그래디언트 없음).
3. **서비스 소개** — eyebrow `01`, 디스플레이 헤드라인 + 리드 + `1× / N→ / 0·` 통계 행(surface-1 밴드, 헤어라인 구분).
4. **주요 기능** — eyebrow `02`, 2-up `feature-card` ×4(라인 아이콘). 사진 기반 사용보고 / 멀티 공급사 동시 전파 / 확인·반려 / 비동기 처리.
5. **이용대상** — eyebrow `03`, 2-up 패널: 간호사(Submitter) / 공급사(Vendor). 체크 글리프(`{colors.primary}`).
6. **도입 문의** — `cta-banner`(라이트 강조 패널). 헤딩 + `button-primary`(mailto: support@medicountapp.com).
7. **Footer** (`footer`)

> **용어**: 마케팅 카피는 "공급사"를 기본으로 쓴다(사용자 결정). 역할 라벨 병기 시 `공급사 (Vendor)`. 도메인 의미는 `~/Projects/medicount/CONTEXT.md` 글로서리의 Vendor와 동일.

## Motion

- 로드 시 Hero·섹션 요소의 **절제된 staggered 진입**(opacity + 12~16px translateY, 0.6s ease-out, 짧은 delay 계단).
- 전파 다이어그램: 활성선 1회 draw-in(stroke-dashoffset). 무한 반짝임은 지양.
- 포커스 링: 2px `{colors.primary-pressed}` ~50%.
- `prefers-reduced-motion` 존중: 모든 진입/드로우 애니메이션 비활성.
- **분위기 그래디언트·패럴랙스 금지.**

## Do's and Don'ts

### Do
- `{colors.canvas}` (#ffffff)를 기준 표면으로, surface-1~3 밴드와 헤어라인으로 위계를 만든다.
- `{colors.primary}` 라벤더블루는 브랜드 마크·1차 CTA·포커스·링크·다이어그램 활성선에만.
- 디스플레이 600 + 본문 400 페어링, 디스플레이에 네거티브 트래킹.
- Pretendard 단일 가족으로 한글·영문을 일관되게.
- CTA는 `{rounded.md}` 8px.

### Don't
- 다크 캔버스/다크 모드 페이지를 만들지 않는다.
- 라벤더를 섹션 배경·카드 채움색으로 쓰지 않는다.
- 두 번째 채도 색(주황·분홍·초록 등)을 도입하지 않는다.
- 분위기 그래디언트·스포트라이트 카드·큰 드롭섀도를 쓰지 않는다.
- CTA를 pill로 만들지 않는다.
- 700(bold) weight를 쓰지 않는다.
- 별도 모노 웹폰트를 로드하거나 Mono를 카피/라벨에 남발하지 않는다.

## Responsive

| Name | Width | Key Changes |
|---|---|---|
| Desktop | ≥1024px | Hero 2단, 카드 2-up, 섹션 간격 96px |
| Tablet | 768–1023px | Hero 2단 유지 또는 스택, 카드 2-up |
| Mobile | <768px | 단일 컬럼, 카드 1-up, display-xl 64→~36px, 섹션 간격 64px, nav 링크 숨김(현재 단일 스크롤 페이지) |

- CTA 탭 높이 ≥44px(터치).
- 전파 다이어그램은 비율 유지, 모바일에서 텍스트 아래로 스택.

## Known Gaps

- **제품 스크린샷 없음**: 현재 공개 가능한 제품 UI 캡처가 없다. 라이트 패널 + 전파 다이어그램을 주인공으로 둔다. 스크린샷 확보 시 `panel`(`{rounded.xl}`)에 담아 섹션 리듬을 강화한다.
- **폰트**: Pretendard는 jsDelivr CDN으로 로드한다.
- **테마**: 라이트 단일 테마. 다크 모드는 제공하지 않는다.

## Iteration Guide

1. 한 번에 하나의 컴포넌트를 `components:` 토큰 이름으로 참조해 작업한다.
2. 섹션을 추가할 때 먼저 어느 surface 단계에 올릴지 정한다.
3. 본문 기본값은 `{typography.body}` weight 400.
4. 라벤더블루는 희소하게: 브랜드 마크·1차 CTA·포커스·링크·다이어그램 활성선.
5. 새 변형은 별도 `components:` 항목으로 추가한다.
