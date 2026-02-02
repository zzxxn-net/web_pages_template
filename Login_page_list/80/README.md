# 로그인 페이지 템플릿 시안 80

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 네오 브루탈리즘
- **UI 구조:** 비대칭 레이아웃
- **인터랙션:** 입력 반응형 애니메이션

## 콘셉트 및 UI/UX 특징

- **네오 브루탈리즘:** 베이지 배경(#f5f0e8), 굵은 검정 테두리(3px), 하드 섀도우(4px 4px 0), Space Mono 타이포로 로우·고대비 톤을 적용했습니다.
- **비대칭 레이아웃:** 타이틀·부제는 왼쪽 aside(brutal-aside), 로그인 폼 카드는 오른쪽(brutal-card)에 그리드로 배치해 좌우 비대칭 구조를 이룹니다. 모바일에서는 세로 스택으로 전환합니다.
- **입력 반응형 애니메이션:** has-focus 시 테두리·섀도우·translate·GSAP scale(1.02), has-value 시 테두리 색 전환으로 입력에 반응하는 애니메이션을 적용했습니다.

## 사용 의도 및 구조

- MVP 로그인(이메일·비밀번호) 전제의 시안으로, HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP 스택을 사용합니다.
- `index.html`: 비대칭 그리드(aside + card), has-focus/has-value/is-loading 클래스.
- `style.scss` / `style.css`: 해당 시안 전용 스타일(네오 브루탈리즘 톤, 비대칭 그리드, 하드 섀도우·입력 반응).
- `js/login.ts` → `js/login.js`: Alpine 데이터(brutalAsymLogin), GSAP 래퍼·aside·카드·필드 진입 및 포커스 시 scale 애니메이션.

PC~모바일 전 범위 반응형이며, 가로·세로 중앙 정렬을 기본 레이아웃 규칙으로 적용합니다.
