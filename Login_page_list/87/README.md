# 로그인 페이지 템플릿 시안 87

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 실험적 인터페이스
- **UI 구조:** 단계 분할형(Progressive Form)
- **인터랙션:** 상태 변화 강조

## 콘셉트 및 UI/UX 특징

- **실험적 인터페이스:** 다크 그라데이션 배경(#1a0a2e → #16213e), 글래스모피즘 카드(backdrop-filter), 보라 악센트(#a78bfa), Outfit 타이포로 실험적·글래스 톤을 적용했습니다.
- **단계 분할형(Progressive Form):** 1단계에서 이메일만 노출하고, 탭 또는 다음 시 2단계로 비밀번호 필드가 부드럽게 등장하도록 설계했습니다. 헤더에 단계 인디케이터(1·2)로 현재 단계를 시각화합니다.
- **상태 변화 강조:** 단계 인디케이터 is-active 시 색·배경·테두리·글로우를 뚜렷하게, has-focus·has-value 시 필드 테두리·라벨·포커스 링을 강조하고, is-loading 시 카드·버튼 opacity로 상태를 명확히 했습니다.

## 사용 의도 및 구조

- MVP 로그인(이메일·비밀번호) 전제의 시안으로, HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP 스택을 사용합니다.
- `index.html`: 단계 분할형 헤더(인디케이터 1/2) + 폼 카드, step·is-visible·has-focus·has-value·is-loading 클래스.
- `style.scss` / `style.css`: 해당 시안 전용 스타일(실험적 글래스 톤, 단계 분할형, 상태 변화 강조).
- `js/login.ts` → `js/login.js`: Alpine 데이터(expStepLogin), goStep2, GSAP 배경·래퍼·헤더·카드·필드 진입 및 포커스 시 스케일 애니메이션.

PC~모바일 전 범위 반응형이며, 가로·세로 중앙 정렬을 기본 레이아웃 규칙으로 적용합니다.
