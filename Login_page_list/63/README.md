# 로그인 페이지 템플릿 시안 63

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 실험적 인터페이스
- **UI 구조:** 비대칭 레이아웃
- **인터랙션:** 포커스 이동 중심 UX

## 콘셉트 및 UI/UX 특징

- **실험적 인터페이스:** 다크 톤(#0f0f12), 모노스페이스(JetBrains Mono·Consolas), 틸/민트 포인트(#00d4aa), LAB 태그 등 실험실·개발자 톤을 적용했습니다.
- **비대칭 레이아웃:** PC에서 왼쪽(약 36%) LAB 브랜딩 영역과 오른쪽(약 64%) 로그인 폼 영역으로 나누고, 모바일에서는 상단 사이드·하단 폼으로 세로 배치했습니다.
- **포커스 이동 중심 UX:** 이메일 입력 후 Enter로 비밀번호 필드로 포커스 이동(`focusPassword`), 포커스/값 유무에 따른 라벨·테두리·포커스 링으로 입력 순서를 강조했습니다.

## 사용 의도 및 구조

- MVP 로그인(이메일·비밀번호) 전제의 시안으로, HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP 스택을 사용합니다.
- `index.html`: 비대칭 마크업(사이드 + 폼 영역), `x-on:keydown.enter.prevent="focusPassword()"` 적용.
- `style.scss` / `style.css`: 해당 시안 전용 스타일(실험적 톤, 반응형 비대칭).
- `js/login.ts` → `js/login.js`: Alpine 데이터(`expAsymFocusLogin`), `focusPassword`, 폼 제출, GSAP 사이드·폼 진입·필드 포커스 애니메이션.

PC~모바일 전 범위 반응형이며, 가로·세로 중앙 정렬을 기본 레이아웃 규칙으로 적용합니다.
