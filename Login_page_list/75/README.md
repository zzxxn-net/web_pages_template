# 로그인 페이지 템플릿 시안 75

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 감성 테크
- **UI 구조:** 단일 포커스 입력 흐름
- **인터랙션:** GSAP 기반 부드러운 전환

## 콘셉트 및 UI/UX 특징

- **감성 테크:** 따뜻한 배경(#fef7f2)·카드(#fffbf8), 코랄/테라코타 악센트(#c97b5a), Noto Sans KR 타이포로 감성적이면서도 기술적인 톤을 적용했습니다.
- **단일 포커스 입력 흐름:** 포커스된 필드만 is-active로 강조하고 나머지는 is-dimmed(opacity 0.5)로 표시해 한 번에 하나의 필드에만 집중하도록 했습니다. blur 시 focusField를 비우고, activeField는 비밀번호 blur 시 비웁니다.
- **GSAP 기반 부드러운 전환:** 래퍼·카드 진입 시 opacity·y·scale 애니메이션, 포커스 시 필드 scale(1.02) 전환으로 부드러운 전환을 적용했습니다.

## 사용 의도 및 구조

- MVP 로그인(이메일·비밀번호) 전제의 시안으로, HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP 스택을 사용합니다.
- `index.html`: 래퍼·카드·폼, is-active/is-dimmed/has-focus/has-value/is-loading 클래스.
- `style.scss` / `style.css`: 해당 시안 전용 스타일(감성 테크 톤, 단일 포커스 스타일).
- `js/login.ts` → `js/login.js`: Alpine 데이터(emotionSingleFocusLogin, activeField·focusField), GSAP 래퍼·카드·필드 애니메이션.

PC~모바일 전 범위 반응형이며, 가로·세로 중앙 정렬을 기본 레이아웃 규칙으로 적용합니다.
