# 로그인 페이지 템플릿 시안 77

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 미래적 클린
- **UI 구조:** 단계 분할형(Progressive Form)
- **인터랙션:** 입력 반응형 애니메이션

## 콘셉트 및 UI/UX 특징

- **미래적 클린:** 밝은 배경(#f0f4f8), 화이트 카드(#fff), 블루 악센트(#3b82f6), Inter 타이포로 미래적·클린 톤을 적용했습니다.
- **단계 분할형(Progressive Form):** Step 1(이메일 입력 + 다음 버튼) → Step 2(비밀번호 입력 + 이전/로그인 버튼)로 단계를 나누어, 한 번에 하나의 단계만 표시(is-active)하고 다음/이전으로 전환합니다.
- **입력 반응형 애니메이션:** has-focus/has-value 시 테두리·라벨 색·포커스 링이 전환되고, GSAP으로 래퍼·카드 진입 및 필드 포커스 시 scale(1.01) 애니메이션을 적용했습니다.

## 사용 의도 및 구조

- MVP 로그인(이메일·비밀번호) 전제의 시안으로, HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP 스택을 사용합니다.
- `index.html`: 단계별 래퍼(future-prog-step), is-active/has-focus/has-value/is-loading 클래스.
- `style.scss` / `style.css`: 해당 시안 전용 스타일(미래적 클린 톤, 단계 분할형, 입력 반응형).
- `js/login.ts` → `js/login.js`: Alpine 데이터(futureProgLogin, step·focusField), GSAP 래퍼·카드·필드 애니메이션.

PC~모바일 전 범위 반응형이며, 가로·세로 중앙 정렬을 기본 레이아웃 규칙으로 적용합니다.
