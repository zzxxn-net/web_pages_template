# 로그인 페이지 템플릿 시안 82

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 현대 판타지
- **UI 구조:** 카드 분리형 레이아웃
- **인터랙션:** 포커스 이동 중심 UX

## 콘셉트 및 UI/UX 특징

- **현대 판타지:** 다크 배경(#1c1624), 골드/베이지 악센트(#c9a86c), Cormorant Garamond 세리프 타이포로 판타지·아카이브 무드를 적용했습니다.
- **카드 분리형 레이아웃:** 타이틀·부제는 상단 헤더 카드(fantasy-header), 로그인 폼은 별도 폼 카드(fantasy-form-card)에 분리해 카드 분리형 구조를 이룹니다.
- **포커스 이동 중심 UX:** has-focus·focus-within 시 테두리·outline·포커스 링·라벨 색으로 포커스 위치를 강조하고, focus-visible으로 키보드 포커스 링을 적용해 포커스 이동 흐름을 명확히 했습니다. tabindex로 포커스 순서를 보장합니다.

## 사용 의도 및 구조

- MVP 로그인(이메일·비밀번호) 전제의 시안으로, HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP 스택을 사용합니다.
- `index.html`: 헤더 카드 + 폼 카드 분리, has-focus/has-value/is-loading 클래스.
- `style.scss` / `style.css`: 해당 시안 전용 스타일(현대 판타지 톤, 카드 분리형, 포커스 강조).
- `js/login.ts` → `js/login.js`: Alpine 데이터(fantasyCardLogin), GSAP 래퍼·헤더·카드·필드 진입 애니메이션.

PC~모바일 전 범위 반응형이며, 가로·세로 중앙 정렬을 기본 레이아웃 규칙으로 적용합니다.
