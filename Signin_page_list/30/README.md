# 회원가입 페이지 템플릿 시안 30

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 실험적 인터페이스

UI 구조: 단일 포커스 입력 흐름

인터랙션: 상태 변화 강조

---

## 콘셉트

**단일 포커스 입력 흐름 + 실험적 인터페이스** — **실험적 인터페이스** 무드(다크 톤·보라 primary·비정형적 톤)와 **단일 포커스** 구조(한 번에 한 필드만 노출: 이메일 → 이름 → 비밀번호 → 비밀번호 확인 4스텝)를 결합한 시안. **상태 변화 강조**로 진행 스텝(active/done)·유효/무효(✓·에러 border)·버튼 active 등 시각적 상태 전환을 명확히 한다.

- 시안 19(현대 판타지+단일 포커스+포커스 이동), 시안 21(실험적+풀스크린+GSAP), 시안 28(미래적 클린+단일 포커스+GSAP)과 달리 **실험적 인터페이스 + 단일 포커스 입력 흐름** 조합으로, **상태 변화 강조**(.expsf-prog-dot--active/--done, .expsf-state--valid, .expsf-step--invalid)를 적용한다.
- **상태 변화 강조**: 4점 진행 인디케이터(active 시 scale·primary, done 시 valid 색), 필드 유효 시 ✓ 표시, invalid 시 border·ring 에러 색, 버튼 active scale.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 배경 #0f0f12, .expsf-card(#18181c, 12px radius) 내 4점 진행 인디케이터 + 4개 스텝.
- **실험적 인터페이스 톤**: 다크 배경·보라 primary(#a78bfa)·valid(#34d399)·error(#f87171). 진행 점 active 시 scale(1.08)·primary, done 시 valid 색.
- **단일 포커스**: 스텝 1(이메일) → 다음 → 스텝 2(이름) → 이전/다음 → 스텝 3(비밀번호) → 이전/다음 → 스텝 4(비밀번호 확인) → 이전/가입하기. 한 화면에 한 프롬프트·한 입력만 노출.
- **상태 변화 강조**: .expsf-prog-dot--active(현재 스텝), --done(완료 스텝). .expsf-state--valid(유효 시 ✓). .expsf-step--invalid(에러 시 border·ring). 버튼 :active scale(0.98).
- **반응형**: 480px 이하에서 카드 패딩·radius 조정.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기, 진행 role="tablist".
- **애니메이션**: GSAP .expsf-card 등장(0.48s), 스텝 전환 runStepIn(x 12 → 0, 0.32s).

## 사용 의도

- **실험적 인터페이스** 톤과 **단일 포커스** 회원가입, **상태 변화 강조**가 필요한 페이지에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 step(1~4)·검증·제출.

## 구조

```
30/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 단일 포커스 4스텝 + 상태 강조)
├── style.scss      # 시안 전용 SCSS (실험적·단일 포커스·상태 변화)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (step 1~4, goNext/goPrev, 검증), GSAP 카드·스텝
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-exp-single.signup-fixed > .expsf-wrap > .expsf-card > 진행(4점) + form(.expsf-step × 4, --invalid, .expsf-state--valid) + 푸터.
- **style.scss / style.css**: 실험적 톤 색·진행 점 active/done·유효 ✓·invalid ring·버튼 active.
- **js/main.ts**: step, goNext, goPrev, validate*, handleSubmit, runStepIn, GSAP .expsf-card.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
