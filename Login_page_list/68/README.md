# 로그인 페이지 템플릿 시안 68

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 다크 아카이브
- **UI 구조:** 마이크로 인터랙션 중심
- **인터랙션:** 입력 반응형 애니메이션

## 콘셉트 및 UI/UX 특징

- **다크 아카이브:** 어두운 배경(#0a0908)과 세피아·앰버 포인트(#c4a574)로 아카이브·기록 보관소 분위기를 적용했습니다.
- **마이크로 인터랙션 중심:** 필드 hover 시 보더 강조, focus 시 링(box-shadow)·GSAP scale(1.02), 토글 hover/active 시 scale(1.02/0.98), 버튼 hover 시 translateY(-1px)·그림자·active scale(0.99) 등 작은 동작을 일관되게 넣었습니다.
- **입력 반응형 애니메이션:** 포커스/값 유무(has-focus, has-value)에 따라 테두리·라벨 색·포커스 링이 전환되고, GSAP으로 필드 포커스 시 스케일 애니메이션이 적용됩니다.

## 사용 의도 및 구조

- MVP 로그인(이메일·비밀번호) 전제의 시안으로, HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP 스택을 사용합니다.
- `index.html`: 단일 카드·폼 마크업, `has-focus`/`has-value`/`is-loading` 클래스.
- `style.scss` / `style.css`: 해당 시안 전용 스타일(다크 아카이브 톤, 마이크로 인터랙션·입력 반응 스타일).
- `js/login.ts` → `js/login.js`: Alpine 데이터(`darkMicroInputLogin`), 폼 제출, GSAP 카드 진입·필드 포커스 스케일.

PC~모바일 전 범위 반응형이며, 가로·세로 중앙 정렬을 기본 레이아웃 규칙으로 적용합니다.
