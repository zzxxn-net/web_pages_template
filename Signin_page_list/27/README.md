# 회원가입 페이지 템플릿 시안 27

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 네오 브루탈리즘

UI 구조: 단계 분할형(Progressive Form)

인터랙션: GSAP 기반 부드러운 전환

---

## 콘셉트

**단계 분할형(Progressive Form) + 네오 브루탈리즘** — **네오 브루탈리즘** 무드(굵은 타이포·강한 테두리·라운드 없음·흑백 대비·박스 섀도우)와 **단계 분할형** 구조(기본 정보 → 비밀번호 2단계)를 결합한 시안. **GSAP 기반 부드러운 전환**으로 카드 등장·단계 전환 시 패널 전환 애니메이션을 적용한다.

- 시안 20(네오 브루탈리즘+마이크로 인터랙션+상태 변화), 시안 26(다크 아카이브+단계 분할형+GSAP)과 달리 **네오 브루탈리즘 + 단계 분할형** 조합으로, 단일 카드(.brustep-card) 내 2단계 인디케이터·패널 전환에 **GSAP 부드러운 전환**을 적용한다.
- **GSAP 전환**: 초기 .brustep-card 등장(opacity + y 16, 0.5s), 단계 전환 시 해당 패널 fromTo(opacity 0, y 12 → 1, 0, 0.38s).

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. 배경 #f2f2ed, .brustep-card(흰 배경, 3px 테두리, 8px 8px 0 박스 섀도우) 내 단계 인디케이터(1–2 점·선) + 2개 패널.
- **네오 브루탈리즘 톤**: Inter 굵은 폰트(800), border-radius 0, 2~3px 테두리, 포커스 시 box-shadow 4px 4px 0, uppercase 제목·라벨·버튼. 텍스트 #0a0a0a, 보조 #555, primary #0a0a0a.
- **단계 분할형**: 1단계(이메일·이름) → 다음 → 2단계(비밀번호·비밀번호 확인) → 이전/가입하기. 인디케이터 점·선으로 진행 상태 표시.
- **반응형**: 480px 이하에서 카드 패딩·섀도우·제목 크기 조정.
- **접근성**: 라벨–입력 연결, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기, 단계 role="tablist".
- **애니메이션**: GSAP .brustep-card 등장(0.5s), 패널 전환 runPanelIn(0.38s).

## 사용 의도

- **네오 브루탈리즘** 톤과 **단계 분할형** 회원가입, **GSAP 부드러운 전환**이 필요한 페이지에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 step·검증·제출.

## 구조

```
27/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 단계 분할형)
├── style.scss      # 시안 전용 SCSS (네오 브루탈리즘·단계·GSAP 전환)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (step, goNext/goPrev, 검증), GSAP 카드·패널
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-brutal-step.signup-fixed > .brustep-wrap > .brustep-card > 헤더(인디케이터) + form(.brustep-panel × 2) + 푸터.
- **style.scss / style.css**: 네오 브루탈리즘 색·테두리·섀도우·인디케이터·필드·버튼.
- **js/main.ts**: step, goNext, goPrev, validate*, handleSubmit, runPanelIn, GSAP .brustep-card.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
