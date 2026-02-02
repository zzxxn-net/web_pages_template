# 로그인 페이지 템플릿 시안 86

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 미래적 클린
- **UI 구조:** 비대칭 레이아웃
- **인터랙션:** GSAP 기반 부드러운 전환

## 콘셉트 및 UI/UX 특징

- **미래적 클린:** 밝은 배경(#f0f4f6), 청록 악센트(#0d9488), DM Sans 타이포, 얇은 보더·미니멀 여백으로 클린하고 미래적인 톤을 적용했습니다.
- **비대칭 레이아웃:** 타이틀·부제는 왼쪽 aside(clean-aside), 로그인 폼 카드는 오른쪽(clean-card)에 그리드로 배치해 좌우 비대칭 구조를 이룹니다. 모바일에서는 세로 스택으로 전환합니다.
- **GSAP 기반 부드러운 전환:** 래퍼·aside·카드·필드가 opacity·y·x 진입 애니메이션으로 순차 등장하고, 포커스 시 필드마다 scale(1.01)로 부드럽게 강조해 전환을 자연스럽게 했습니다.

## 사용 의도 및 구조

- MVP 로그인(이메일·비밀번호) 전제의 시안으로, HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP 스택을 사용합니다.
- `index.html`: 비대칭 그리드(aside + card), has-focus·has-value·is-loading 클래스.
- `style.scss` / `style.css`: 해당 시안 전용 스타일(미래적 클린 톤, 비대칭 그리드, GSAP 전환).
- `js/login.ts` → `js/login.js`: Alpine 데이터(cleanAsymLogin), GSAP 래퍼·aside·카드·필드 진입 및 포커스 시 스케일 애니메이션.

PC~모바일 전 범위 반응형이며, 가로·세로 중앙 정렬을 기본 레이아웃 규칙으로 적용합니다.
