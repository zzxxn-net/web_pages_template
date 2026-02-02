# 회원가입 페이지 템플릿 시안 24

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 감성 테크

UI 구조: 단계 분할형(Progressive Form)

인터랙션: 스크롤 없는 고정 플로우

---

## 콘셉트

**단계 분할형(Progressive Form) + 감성 테크** — **감성 테크** 무드(따뜻한 베이지·브라운 톤, 부드러운 그라데이션, 둥근 카드)와 **단계 분할형** 구조(기본 정보 → 비밀번호 2단계)를 결합한 시안. **스크롤 없는 고정 플로우**로 뷰포트 내에서만 전환되며, GSAP으로 카드 등장·패널 전환을 적용한다.

- 시안 15(사이버 미니멀+단계 분할형), 시안 18(감성 테크+카드 분리형)과 달리 **감성 테크 + 단계 분할형** 조합으로, **스크롤 없는 고정 플로우**(min-height 100dvh, 단계 전환 시 같은 카드 내 패널만 교체)를 적용한다.
- **인터랙션**: GSAP 카드 등장(opacity + y), 단계 전환 시 해당 패널 fromTo(opacity 0, y 8 → 1, 0).

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 배경 그라데이션(#f8f4f0 → #e8dfd5), .emostep-card(glass·둥근 모서리·그림자) 내 단계 인디케이터(1–2 점·선) + 2개 패널.
- **감성 테크 톤**: Pretendard/Noto Sans KR, primary #c17f59, 텍스트 #2c2419, 보조 #6b5d52, 부드러운 border·shadow.
- **스크롤 없는 고정 플로우**: .emostep-form min-height 220px, x-show로 step 1/2만 전환, 스크롤 없이 다음/이전 버튼으로만 이동.
- **반응형**: 480px 이하에서 카드 패딩·제목 크기 조정.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기, 단계 role="tablist".
- **애니메이션**: GSAP .emostep-card 등장(0.5s), 패널 전환 runPanelIn(0.35s).

## 사용 의도

- **감성 테크** 톤과 **단계 분할형** 회원가입, **스크롤 없는 고정 플로우**가 필요한 페이지에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 step·검증·제출.

## 구조

```
24/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 단계 분할형)
├── style.scss      # 시안 전용 SCSS (감성 테크·단계·고정 플로우)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (step, goNext/goPrev, 검증), GSAP 카드·패널
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-emotion-step.signup-fixed > .emostep-wrap > .emostep-card > 헤더(인디케이터) + form(.emostep-panel × 2) + 푸터.
- **style.scss / style.css**: 감성 테크 색·그라데이션·카드·인디케이터·필드·버튼.
- **js/main.ts**: step, goNext, goPrev, validate*, handleSubmit, runPanelIn, GSAP .emostep-card.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
