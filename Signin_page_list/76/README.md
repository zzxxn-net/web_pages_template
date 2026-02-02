# 시안 76 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 감성 테크  
- **UI 구조:** 단일 포커스 입력 흐름  
- **인터랙션:** 상태 변화 강조  

---

## 콘셉트

따뜻하고 부드러운 톤의 **감성 테크** 무드에, **한 번에 하나의 필드만 강조**하는 단일 포커스 입력 흐름과, **포커스 / 유효 / 무효** 상태를 명확히 보여주는 **상태 변화 강조**를 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **감성 테크:** 연한 라벤더·퍼플 그라데이션 배경(#faf8fc → #f0ebf5), 보라 계열 액센트(#8b7aa8), Noto Sans KR·Outfit 타이포, 부드러운 그림자·라운드로 포근한 인상.
- **단일 포커스 입력 흐름:** 포커스된 필드만 `s76-field--active`(풀 opacity·스케일), 나머지는 `s76-field--dim`(opacity 0.45·약간 축소)으로 시선이 한 곳에 모이도록 구성.
- **상태 변화 강조:**  
  - **active:** 포커스 시 라벨·테두리 액센트 색, 3px 글로우.  
  - **valid:** blur 후 유효 시 녹색 테두리·라벨·체크 아이콘(✓).  
  - **invalid:** 에러 시 빨간 테두리·라벨·에러 문구.  
- **중앙 정렬:** `.signup-fixed` + `.s76`로 뷰포트 기준 가로·세로 중앙, PC~모바일 반응형 유지.
- **GSAP:** 로드 시 `.s76-viewport` 페이드인 + 약간의 위로 이동.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 클라이언트 유효성 검사 + 유효 시 ✓ 표시 + 제출 버튼.
- **기술 스택:** HTMX + Alpine.js + TypeScript(js/main.ts → main.js) + SASS(style.scss → style.css) + GSAP.
- **파일 구조:**
  - `index.html`: 마크업, Alpine `x-data="signupForm76()"`, HTMX 폼, `valid` 객체로 필드별 유효 상태 반영.
  - `style.scss` / `style.css`: 시안 76 전용 스타일(감성 테크 톤, 단일 포커스 dim/active, valid/invalid 강조).
  - `js/main.ts`: Alpine 컴포넌트 `signupForm76`, 유효성 검사 시 `valid.*` 설정, 제출 처리, GSAP 초기 등장.
  - `js/main.js`: main.ts의 브라우저 실행용.

## 반응형

- `clamp(1rem, 3vw, 2rem)` 패딩, `max-width: 400px` 뷰포트로 PC·모바일에서 중앙 정렬 플로우 유지.
- `100dvh`로 모바일 주소창 높이 변화 대응.
