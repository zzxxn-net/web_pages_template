# 회원가입 페이지 템플릿 시안 37

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 사이버 미니멀

UI 구조: 단일 포커스 입력 흐름

인터랙션: 입력 반응형 애니메이션

---

## 콘셉트

**사이버 미니멀 + 단일 포커스 입력 흐름 + 입력 반응형 애니메이션** — **사이버 미니멀** 무드(다크 배경 #0a0a0c·카드 #111113·IBM Plex Mono·시안 primary #22d3ee·미니멀 보더)와 **단일 포커스 입력 흐름** 구조(한 화면에 한 필드만 노출, 스텝 1~4·다음/이전·Enter로 전환)를 결합한 시안. **입력 반응형 애니메이션**으로 포커스 시 입력란 left border·glow·translateX(2px) 전환을 적용한다.

- 시안 15(사이버 미니멀+단계 분할형+GSAP), 시안 23(사이버 미니멀+풀스크린+입력 반응형), 시안 29(사이버 미니멀+카드 분리형)와 달리 **사이버 미니멀 + 단일 포커스 입력 흐름** 조합으로, **한 번에 한 필드만** 보여주는 스텝 폼에 **입력 반응형 애니메이션**(focus 시 border-left primary·box-shadow ring·transform translateX(2px))을 적용한다.
- **입력 반응형 애니메이션**: .cybs-input:focus / .cybs-pw-wrap:focus-within 시 border-left-color primary, box-shadow 0 0 0 2px primary-soft, transform translateX(2px). invalid 스텝 시 border-left·box-shadow 에러 색.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. .cybs-wrap(max-width 360px) 내 .cybs-card(진행 점 1-2-3-4 + 스텝별 단일 필드).
- **사이버 미니멀 톤**: 배경 #0a0a0c, 카드 #111113·얇은 보더, IBM Plex Mono 라벨·입력·버튼, primary #22d3ee(시안), 완료 #4ade80, 에러 #f87171.
- **단일 포커스 입력 흐름**: 스텝 1(이메일) → 2(이름) → 3(비밀번호) → 4(비밀번호 확인). 다음/이전 버튼·Enter로 전환, 전환 시 해당 input에 포커스 이동.
- **입력 반응형 애니메이션**: 포커스 시 3px left border primary·2px ring·translateX(2px). invalid 시 left border·ring 에러.
- **반응형**: 480px 이하에서 카드 패딩 축소, 중앙 정렬 유지.
- **접근성**: 라벨–입력 연결(프롬프트), aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .cybs-card 등장(y 8), 스텝 전환 시 .cybs-step(x 6 → 0).

## 사용 의도

- **사이버 미니멀** 톤과 **단일 포커스 입력 흐름**, **입력 반응형 애니메이션**이 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 step·goNext·goPrev·focusStepInput·검증·제출.

## 구조

```
37/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 단일 포커스 스텝)
├── style.scss      # 시안 전용 SCSS (사이버 미니멀·입력 반응형)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (step, goNext, goPrev, focusStepInput, 검증), GSAP 카드·스텝
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-cyber-single > .cybs-wrap > .cybs-card(진행 1-2-3-4 + form .cybs-step × 4).
- **style.scss / style.css**: 사이버 미니멀 다크·시안·모노, .cybs-input:focus·.cybs-pw-wrap:focus-within left border·ring·translateX.
- **js/main.ts**: step, goNext, goPrev, focusStepInput, validate*, handleSubmit, GSAP .cybs-card·runStepIn.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
