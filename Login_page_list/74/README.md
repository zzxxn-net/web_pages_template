# 로그인 페이지 템플릿 시안 74

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 네오 브루탈리즘
- **UI 구조:** 풀스크린 몰입형
- **인터랙션:** 스크롤 없는 고정 플로우

## 콘셉트 및 UI/UX 특징

- **네오 브루탈리즘:** 흰 배경(#fff), 검정 텍스트·테두리(#0a0a0a), 굵은 테두리(3px), 라운드 제거(0), Space Mono 모노스페이스로 거친·직설적인 브루탈 톤을 적용했습니다.
- **풀스크린 몰입형:** main을 position: fixed; inset: 0;로 채우고, 내부 콘텐츠를 flex로 가로·세로 중앙에 배치하여 한 화면에 몰입되도록 했습니다.
- **스크롤 없는 고정 플로우:** body·main에 overflow: hidden을 적용하고, 폼·타이틀·입력 필드를 한 뷰포트 안에만 배치하여 스크롤 없이 로그인 플로우가 완결되도록 했습니다. GSAP으로 inner·title·sub·필드 진입 애니메이션을 적용했습니다.

## 사용 의도 및 구조

- MVP 로그인(이메일·비밀번호) 전제의 시안으로, HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP 스택을 사용합니다.
- `index.html`: 풀스크린 main, inner 래퍼, 타이틀·부제·폼, has-focus/has-value/is-loading 클래스.
- `style.scss` / `style.css`: 해당 시안 전용 스타일(네오 브루탈리즘 톤, 풀스크린·고정 플로우).
- `js/login.ts` → `js/login.js`: Alpine 데이터(brutalFullFixedLogin), GSAP inner·title·sub·필드 애니메이션.

PC~모바일 전 범위 반응형이며, 가로·세로 중앙 정렬을 기본 레이아웃 규칙으로 적용합니다.
