# 로그인 페이지 템플릿 시안 81

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 실험적 인터페이스
- **UI 구조:** 마이크로 인터랙션 중심
- **인터랙션:** 스크롤 없는 고정 플로우

## 콘셉트 및 UI/UX 특징

- **실험적 인터페이스:** 다크 그라데이션 배경(#1a0a2e → #16213e), 글래스모피즘 카드(backdrop-filter), 보라 악센트(#7c3aed), DM Sans 타이포로 실험적·글래스 톤을 적용했습니다.
- **마이크로 인터랙션 중심:** 카드 호버 시 shadow, 필드 호버·포커스 시 background·scale·glow, 버튼 호버·액티브 시 scale·shadow, 토글 버튼 호버 시 scale(1.05) 등 작은 피드백을 전반에 배치했습니다.
- **스크롤 없는 고정 플로우:** body overflow hidden, 한 뷰포트 내 중앙 카드만 노출해 스크롤 없이 고정 플로우로 로그인만 수행하도록 설계했습니다. 모바일에서는 overflow auto로 전환합니다.

## 사용 의도 및 구조

- MVP 로그인(이메일·비밀번호) 전제의 시안으로, HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP 스택을 사용합니다.
- `index.html`: 풀스크린 래퍼·배경 + 중앙 글래스 카드, has-focus/has-value/is-loading 클래스.
- `style.scss` / `style.css`: 해당 시안 전용 스타일(실험적 글래스 톤, 마이크로 인터랙션, 스크롤 없는 플로우).
- `js/login.ts` → `js/login.js`: Alpine 데이터(expMicroLogin), GSAP 배경·래퍼·카드·필드 진입 애니메이션.

PC~모바일 전 범위 반응형이며, 가로·세로 중앙 정렬을 기본 레이아웃 규칙으로 적용합니다.
