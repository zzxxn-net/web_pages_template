# 시안 81 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

- 세계관/무드: 네오 브루탈리즘
- UI 구조: 카드 분리형 레이아웃
- 인터랙션: 입력 반응형 애니메이션

---

## 콘셉트

거친 선과 강한 대비의 **네오 브루탈리즘** 무드에, **계정 정보**와 **비밀번호**를 각각 독립 카드로 나누는 **카드 분리형 레이아웃**과, 포커스 시 필드·카드가 반응하는 **입력 반응형 애니메이션**(GSAP)을 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **네오 브루탈리즘:** 크림 배경(#f5f0e8), 흰 카드, 두꺼운 검정 테두리(3px), 각진 형태(border-radius 0), 오프셋 박스 섀도우(6px 6px 0 0 #1a1a1a)로 스탬프 같은 인상. Space Grotesk·IBM Plex Mono 타이포.
- **카드 분리형 레이아웃:** `.s81-card--account`(이메일·이름), `.s81-card--password`(비밀번호·비밀번호 확인) 두 개의 독립 카드로 섹션 분리. 카드 간 gap 1.25rem.
- **입력 반응형 애니메이션:**  
  - 포커스 시 해당 필드에 `.s81-field--focused`, 해당 카드에 `.s81-card--focused` 적용.  
  - GSAP: 포커스 시 입력창 짧은 scale 펄스(1 → 1.01 → 1), 라벨 opacity 강조, 카드 약간 위로 이동(y: -2). 블러 시 카드 원위치.
- **중앙 정렬:** `.signup-fixed` + `.s81`로 뷰포트 기준 가로·세로 중앙, `.s81-viewport` max-width 420px로 PC·모바일 반응형.
- **Enter:** 이메일·이름 필드에서 Enter 시 `focusNext()`로 다음 필드 포커스 이동.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 클라이언트 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일 구조:**
  - `index.html`: 마크업, Alpine `x-data="signupForm81()"`, 카드별 `x-ref`, `onFocus`/`onBlur`로 포커스 시 클래스·GSAP 연동.
  - `style.scss` → `style.css`: 시안 81 전용 스타일(네오 브루탈리즘 톤, 카드 분리형, 포커스/에러 상태).
  - `js/main.ts` → `js/main.js`: Alpine 컴포넌트 `signupForm81`, 유효성 검사, `animateFieldFocus81`/`animateCardFocus81` 입력 반응형 GSAP, 로드 시 뷰포트·카드 스태거 등장.

## 반응형

- `clamp(1rem, 4vw, 2rem)` 패딩, `100dvh`로 모바일 주소창 대응. max-width 420px 중앙 정렬 유지.
