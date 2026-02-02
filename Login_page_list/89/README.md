# 로그인 페이지 템플릿 시안 89

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 네오 브루탈리즘
- **UI 구조:** 풀스크린 몰입형
- **인터랙션:** GSAP 기반 부드러운 전환

## 콘셉트 및 UI/UX 특징

- **네오 브루탈리즘:** 베이지 배경(#f5f0e8), 굵은 검정 테두리(3px), 하드 섀도우(4px 4px 0), Space Mono 타이포로 로우·고대비 톤을 적용했습니다.
- **풀스크린 몰입형:** body overflow hidden으로 한 뷰포트 내에서만 노출하고, 중앙에 로그인 카드만 떠 있는 형태로 몰입감을 줍니다. 모바일에서는 overflow auto로 전환합니다.
- **GSAP 기반 부드러운 전환:** 래퍼·카드·헤더·필드가 opacity·y·scale 진입 애니메이션으로 순차 등장하고, 포커스 시 필드마다 scale(1.01)로 부드럽게 강조해 전환을 자연스럽게 했습니다.

## 사용 의도 및 구조

- MVP 로그인(이메일·비밀번호) 전제의 시안으로, HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP 스택을 사용합니다.
- `index.html`: 풀스크린 래퍼 + 중앙 카드(헤더+폼), has-focus·has-value·is-loading 클래스.
- `style.scss` / `style.css`: 해당 시안 전용 스타일(네오 브루탈리즘 톤, 풀스크린 몰입형, GSAP 전환).
- `js/login.ts` → `js/login.js`: Alpine 데이터(brutalFullLogin), GSAP 래퍼·카드·헤더·필드 진입 및 포커스 시 스케일 애니메이션.

PC~모바일 전 범위 반응형이며, 가로·세로 중앙 정렬을 기본 레이아웃 규칙으로 적용합니다.
