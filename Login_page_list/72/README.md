# 로그인 페이지 템플릿 시안 72

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 실험적 인터페이스
- **UI 구조:** 단일 포커스 입력 흐름
- **인터랙션:** 입력 반응형 애니메이션

## 콘셉트 및 UI/UX 특징

- **실험적 인터페이스:** 다크 배경(#0f0e12), 바이올렛 악센트(#a78bfa), 모노스페이스 타이포(JetBrains Mono)로 실험실·랩 톤을 적용했습니다.
- **단일 포커스 입력 흐름:** 포커스된 필드만 강조(is-active)하고 나머지는 dimmed(opacity 0.45)로 표시해 한 번에 하나의 필드에만 집중하도록 했습니다. blur 시 activeField를 비워 두 필드 모두 동일한 비중으로 보이게 합니다.
- **입력 반응형 애니메이션:** has-focus/has-value에 따라 테두리·라벨 색·포커스 링이 전환되고, GSAP으로 래퍼 진입·카드 스케일·필드 포커스 스케일 애니메이션이 적용됩니다.

## 사용 의도 및 구조

- MVP 로그인(이메일·비밀번호) 전제의 시안으로, HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP 스택을 사용합니다.
- `index.html`: 단일 포커스 래퍼·카드·폼, `is-active`/`is-dimmed`/`has-focus`/`has-value`/`is-loading` 클래스.
- `style.scss` / `style.css`: 해당 시안 전용 스타일(실험적 톤, 단일 포커스·입력 반응 스타일).
- `js/login.ts` → `js/login.js`: Alpine 데이터(`expSingleFocusInputLogin`, activeField·focusField), 폼 제출, GSAP 래퍼·카드·필드 애니메이션.

PC~모바일 전 범위 반응형이며, 가로·세로 중앙 정렬을 기본 레이아웃 규칙으로 적용합니다.
