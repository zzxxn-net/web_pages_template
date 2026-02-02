# 회원가입 페이지 템플릿 시안 36

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 현대 판타지

UI 구조: 마이크로 인터랙션 중심

인터랙션: 스크롤 없는 고정 플로우

---

## 콘셉트

**현대 판타지 + 마이크로 인터랙션 중심 + 스크롤 없는 고정 플로우** — **현대 판타지** 무드(딥 퍼플·앰버 골드 그라데이션·Cormorant Garamond 제목·글래스 카드·따뜻한 글로우)와 **마이크로 인터랙션 중심** 구조(필드별 포커스 scale·glow·유효 시 ✓·무효 시 에러 강조·버튼 호버 lift)를 결합한 시안. **스크롤 없는 고정 플로우**로 뷰포트 전체를 고정하고, 한 화면에 모든 필드가 들어가도록 컴팩트하게 배치한다.

- 시안 19·25(현대 판타지+단일 포커스/풀스크린), 시안 20(네오 브루탈리즘+마이크로 인터랙션)과 달리 **현대 판타지 + 마이크로 인터랙션 중심** 조합으로, **스크롤 없는 고정 플로우**(main overflow hidden·fmic-scroll-lock max-height 100%·gap·padding 최소화)에 **마이크로 인터랙션**(--focused scale(1.01)·ring, --valid ✓·녹색 틴트, --invalid 에러·빨간 틴트, 버튼 hover translateY(-1px))을 적용한다.
- **스크롤 없는 고정 플로우**: .signup-fantasy-micro height 100dvh·overflow hidden. .fmic-scroll-lock이 max-height 100%로 내부 스크롤만 허용. .fmic-wrap gap·padding을 줄여 한 화면에 헤더+4필드+제출이 들어가도록 구성.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. main overflow hidden·height 100dvh. .fmic-scroll-lock(max-width 380px·max-height 100%) 내 .fmic-wrap(글래스 카드·gap 0.85rem).
- **현대 판타지 톤**: 배경 그라데이션(#1a1625 → #2d2438 → #1f1b2e), 앰버/퍼플 글로우, 카드 반투명·gold 보더·Cormorant Garamond 제목·Outfit 본문·primary #d4af37(골드).
- **마이크로 인터랙션**: .fmic-field--focused(scale 1.01·border primary·ring), .fmic-field--valid(녹색 테두리·배경·✓ 표시), .fmic-field--invalid(빨간 테두리·ring·에러 문구). .fmic-btn hover translateY(-1px)·shadow. .fmic-pw-btn hover scale(1.05)·색상.
- **스크롤 없는 고정 플로우**: 컴팩트한 gap·padding으로 스크롤 없이 한 화면 유지. 작은 뷰포트에서만 .fmic-scroll-lock overflow auto로 최소 스크롤 허용.
- **반응형**: 480px 이하에서 gap·padding 추가 축소.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .fmic-wrap(opacity + y 8) 부드러운 등장.

## 사용 의도

- **현대 판타지** 톤과 **마이크로 인터랙션** 중심 UX, **스크롤 없는 고정 플로우**가 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 focusedField·검증·제출.

## 구조

```
36/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 고정 플로우 + 마이크로 인터랙션)
├── style.scss      # 시안 전용 SCSS (현대 판타지·마이크로 인터랙션·스크롤 없음)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (focusedField, 검증), GSAP 등장
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-fantasy-micro > .fmic-bg(글로우) + .fmic-scroll-lock > .fmic-wrap(헤더 + form .fmic-field × 4, --focused/--valid/--invalid, ✓) + .fmic-submit.
- **style.scss / style.css**: 현대 판타지 그라데이션·글로우·글래스 카드·마이크로 인터랙션 scale·ring·체크.
- **js/main.ts**: focusedField, validate*, handleSubmit, GSAP .fmic-wrap.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
