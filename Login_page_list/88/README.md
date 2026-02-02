# 로그인 페이지 템플릿 시안 88

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 현대 판타지
- **UI 구조:** 마이크로 인터랙션 중심
- **인터랙션:** 입력 반응형 애니메이션

## 콘셉트 및 UI/UX 특징

- **현대 판타지:** 다크 배경(#1c1624), 골드/베이지 악센트(#c9a86c), Cormorant Garamond 세리프 타이포로 판타지·아카이브 무드를 적용했습니다.
- **마이크로 인터랙션 중심:** 카드 호버 시 shadow 강화·로딩 시 약화, 필드 호버 시 보더 강조·포커스 시 글로우·GSAP scale(1.02), 토글 호버 scale(1.03)·액티브 scale(0.98), 버튼 호버 translateY(-2px)·shadow·액티브 시 복귀 등 작은 피드백을 전반에 배치했습니다.
- **입력 반응형 애니메이션:** has-focus·has-value 시 테두리·라벨 색·포커스 링·글로우가 전환되고, GSAP으로 필드 포커스 시 scale(1.02)·블러 시 scale(1)로 입력에 반응하는 애니메이션을 적용했습니다.

## 사용 의도 및 구조

- MVP 로그인(이메일·비밀번호) 전제의 시안으로, HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP 스택을 사용합니다.
- `index.html`: 단일 카드(헤더+폼), has-focus·has-value·is-loading 클래스.
- `style.scss` / `style.css`: 해당 시안 전용 스타일(현대 판타지 톤, 마이크로 인터랙션·입력 반응).
- `js/login.ts` → `js/login.js`: Alpine 데이터(fantasyMicroLogin), GSAP 래퍼·카드·헤더·필드 진입 및 포커스 시 스케일 애니메이션.

PC~모바일 전 범위 반응형이며, 가로·세로 중앙 정렬을 기본 레이아웃 규칙으로 적용합니다.
