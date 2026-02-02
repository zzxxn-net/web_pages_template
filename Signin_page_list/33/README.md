# 회원가입 페이지 템플릿 시안 33

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 실험적 인터페이스

UI 구조: 단계 분할형(Progressive Form)

인터랙션: 포커스 이동 중심 UX

---

## 콘셉트

**실험적 인터페이스 + 단계 분할형 + 포커스 이동 중심 UX** — **실험적 인터페이스** 무드(기하학적 그리드 배경·각진 형태·네온 그린·강한 대비)와 **단계 분할형** 구조(좌측 세로 스텝 바 01~04 + 우측 단일 패널)를 결합한 시안. **포커스 이동 중심 UX**로 Enter·다음 버튼 시 다음 단계로 전환되며 해당 입력 필드로 포커스가 자동 이동하고, 포커스 시 입력란에 글로우 링이 적용된다.

- 시안 21(실험적+풀스크린+GSAP), 시안 30(실험적+단일 포커스+상태 변화)과 달리 **실험적 인터페이스 + 단계 분할형(Progressive Form) + 포커스 이동 중심 UX** 조합으로, 좌측 세로 스텝 인디케이터(클릭 가능)와 우측 단일 패널에 **포커스 이동**(goNext/goPrev 시 다음·이전 input으로 focus, Enter로 다음 단계)을 적용한다.
- **포커스 이동**: 다음/이전 버튼·Enter 시 단계 전환 후 `$nextTick`으로 해당 단계 input에 `.focus()` 호출. 입력 필드 focus 시 `box-shadow: 0 0 20px primary-glow`로 시각적 강조.

## UI/UX 특징

- **레이아웃**: 뷰포트 중앙 정렬. 배경: 기하학 그리드(24px) + 각진 그라데이션 도형 2개. 카드 2열 그리드(180px 스텝 바 + 1fr 폼 영역). 768px 이하에서 스텝 바 가로 배치·폼 하단.
- **실험적 인터페이스 톤**: Space Grotesk·JetBrains Mono. 텍스트 #f4f4f5, 보조 #71717a, primary #00ff9d(네온 그린), 완료 #22c55e, 에러 #f43f5e. 카드 반투명 배경·각진 border-radius 4px.
- **단계 분할형**: 좌측 .expp-steps에 01~04 스텝 트리거(라벨: 이메일·이름·비밀번호·확인). 스텝 간 연결선(.expp-step-line)이 진행에 따라 primary 색으로 채워짐. 클릭 시 해당 단계로 이동·포커스 이동.
- **포커스 이동**: goNext/goPrev/goToStep 시 해당 단계 input에 focus. Enter로 다음 단계. .expp-input:focus 시 border primary + 2px ring + 20px glow.
- **반응형**: 768px 이하에서 스텝 바 가로·폼 영역 하단, 중앙 정렬 유지.
- **접근성**: 라벨–입력 연결, aria-invalid, aria-current="step", 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .expp-card(y 10 → 0), .expp-shape(opacity·scale), 패널 전환 시 .expp-panel(x 8 → 0).

## 사용 의도

- **실험적 인터페이스** 톤과 **단계 분할형** 레이아웃, **포커스 이동 중심 UX**가 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 step·goToStep·검증·제출·포커스 이동.

## 구조

```
33/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 단계 분할 + 포커스 이동)
├── style.scss      # 시안 전용 SCSS (실험적·단계 분할·포커스 링)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (step, goToStep, focusStepInput, 검증), GSAP 등장·패널
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-exp-prog > .expp-bg(그리드·도형) + .expp-wrap > .expp-card(.expp-steps + .expp-form-area > form .expp-panel × 4).
- **style.scss / style.css**: 실험적 그리드·각진 도형·카드 2열·스텝 트리거·포커스 글로우.
- **js/main.ts**: step, goToStep, focusStepInput, goNext, goPrev, validate*, handleSubmit, GSAP .expp-card·.expp-shape·runPanelIn.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
