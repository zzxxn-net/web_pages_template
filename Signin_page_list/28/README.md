# 회원가입 페이지 템플릿 시안 28

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 미래적 클린

UI 구조: 단일 포커스 입력 흐름

인터랙션: GSAP 기반 부드러운 전환

---

## 콘셉트

**단일 포커스 입력 흐름 + 미래적 클린** — **미래적 클린** 무드(밝은 배경·넓은 여백·산세리프·미니멀·부드러운 radius)와 **단일 포커스** 구조(한 번에 한 필드만 노출: 이메일 → 이름 → 비밀번호 → 비밀번호 확인 4스텝)를 결합한 시안. **GSAP 기반 부드러운 전환**으로 카드 등장·스텝 전환 시 패널 전환 애니메이션을 적용한다.

- 시안 17(미래적 클린+비대칭 레이아웃), 시안 19(현대 판타지+단일 포커스+포커스 이동)와 달리 **미래적 클린 + 단일 포커스 입력 흐름** 조합으로, 단일 카드(.fclean-card) 내 4스텝(한 필드씩)에 **GSAP 부드러운 전환**을 적용한다.
- **GSAP 전환**: 초기 .fclean-card 등장(opacity + y 14, 0.5s), 스텝 전환 시 해당 .fclean-step fromTo(opacity 0, y 10 → 1, 0, 0.35s).

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 배경 #f8fafc, .fclean-card(흰 배경, 1px 보더, 12px radius, 은은한 그림자) 내 4개 스텝.
- **미래적 클린 톤**: Inter 산세리프, primary #0ea5e9, 텍스트 #0f172a, 보조 #64748b, 보더 #e2e8f0. 포커스 시 ring(primary-soft).
- **단일 포커스**: 스텝 1(이메일) → 다음 → 스텝 2(이름) → 이전/다음 → 스텝 3(비밀번호) → 이전/다음 → 스텝 4(비밀번호 확인) → 이전/가입하기. 한 화면에 한 프롬프트·한 입력만 노출.
- **반응형**: 480px 이하에서 카드 패딩·radius 조정.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .fclean-card 등장(0.5s), 스텝 전환 runStepIn(0.35s).

## 사용 의도

- **미래적 클린** 톤과 **단일 포커스** 회원가입, **GSAP 부드러운 전환**이 필요한 페이지에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 step(1~4)·검증·제출.

## 구조

```
28/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 단일 포커스 4스텝)
├── style.scss      # 시안 전용 SCSS (미래적 클린·단일 포커스·GSAP 전환)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (step 1~4, goNext/goPrev, 검증), GSAP 카드·스텝
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-future-clean.signup-single-focus > .fclean-wrap > .fclean-card > form(.fclean-step × 4) + 푸터.
- **style.scss / style.css**: 미래적 클린 색·여백·radius·필드·버튼.
- **js/main.ts**: step, goNext, goPrev, validate*, handleSubmit, runStepIn, GSAP .fclean-card.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
