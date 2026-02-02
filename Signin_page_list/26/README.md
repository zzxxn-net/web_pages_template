# 회원가입 페이지 템플릿 시안 26

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 다크 아카이브

UI 구조: 단계 분할형(Progressive Form)

인터랙션: GSAP 기반 부드러운 전환

---

## 콘셉트

**단계 분할형(Progressive Form) + 다크 아카이브** — **다크 아카이브** 무드(다크 배경·모노스페이스·아카이브적 톤)와 **단계 분할형** 구조(기본 정보 → 비밀번호 2단계)를 결합한 시안. **GSAP 기반 부드러운 전환**으로 카드 등장·단계 전환 시 패널 전환 애니메이션을 적용한다.

- 시안 16(다크 아카이브+풀스크린), 시안 22(다크 아카이브+카드 분리형), 시안 24(감성 테크+단계 분할형)와 달리 **다크 아카이브 + 단계 분할형** 조합으로, 단일 카드(.archstep-card) 내 2단계 인디케이터·패널 전환에 **GSAP 부드러운 전환**을 적용한다.
- **GSAP 전환**: 초기 .archstep-card 등장(opacity + y 14, 0.55s), 단계 전환 시 해당 패널 fromTo(opacity 0, y 10 → 1, 0, 0.4s).

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 배경 #0c0a09, .archstep-card(#141210, 테두리·그림자) 내 단계 인디케이터(1–2 점·선) + 2개 패널.
- **다크 아카이브 톤**: IBM Plex Mono 제목·라벨·인디케이터·버튼, Inter 입력. 텍스트 #e6e2dc, 보조 #8a847c, primary #7d6b5a, 보더 #2c2824.
- **단계 분할형**: 1단계(이메일·이름) → 다음 → 2단계(비밀번호·비밀번호 확인) → 이전/가입하기. 인디케이터 점·선으로 진행 상태 표시.
- **반응형**: 480px 이하에서 카드 패딩·제목 크기 조정.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기, 단계 role="tablist".
- **애니메이션**: GSAP .archstep-card 등장(0.55s), 패널 전환 runPanelIn(0.4s).

## 사용 의도

- **다크 아카이브** 톤과 **단계 분할형** 회원가입, **GSAP 부드러운 전환**이 필요한 페이지에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 step·검증·제출.

## 구조

```
26/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 단계 분할형)
├── style.scss      # 시안 전용 SCSS (다크 아카이브·단계·GSAP 전환)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (step, goNext/goPrev, 검증), GSAP 카드·패널
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-arch-step.signup-fixed > .archstep-wrap > .archstep-card > 헤더(인디케이터) + form(.archstep-panel × 2) + 푸터.
- **style.scss / style.css**: 다크 아카이브 색·모노스페이스·인디케이터·필드·버튼.
- **js/main.ts**: step, goNext, goPrev, validate*, handleSubmit, runPanelIn, GSAP .archstep-card.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
