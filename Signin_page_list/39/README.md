# 회원가입 페이지 템플릿 시안 39

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 다크 아카이브

UI 구조: 단일 포커스 입력 흐름

인터랙션: GSAP 기반 부드러운 전환

---

## 콘셉트

**다크 아카이브 + 단일 포커스 입력 흐름 + GSAP 기반 부드러운 전환** — **다크 아카이브** 무드(다크 배경 #0c0a09·카드 #141210·브라운 primary #8b7355·IBM Plex Mono·아카이브 톤)와 **단일 포커스 입력 흐름** 구조(한 화면에 한 필드만 노출, 스텝 1~4·다음/이전·Enter로 전환)를 결합한 시안. **GSAP 기반 부드러운 전환**으로 카드 등장(y 14 → 0) 및 스텝 전환 시 해당 패널(y 10 → 0, opacity) 전환을 적용한다.

- 시안 16(다크 아카이브+풀스크린), 시안 26(다크 아카이브+단계 분할형+GSAP), 시안 37(사이버 미니멀+단일 포커스)와 달리 **다크 아카이브 + 단일 포커스 입력 흐름** 조합으로, **한 번에 한 필드만** 보여주는 스텝 폼에 **GSAP 부드러운 전환**(카드 등장·스텝 패널 fromTo)을 적용한다.
- **GSAP 기반 부드러운 전환**: 초기 .arcs-card 등장(opacity 0, y 14, duration 0.5). 단계 전환 시 .arcs-step fromTo(opacity 0, y 10 → opacity 1, y 0, duration 0.4, ease power2.out).

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. .arcs-wrap(max-width 380px) 내 .arcs-card(진행 점 1-2-3-4 + 스텝별 단일 필드).
- **다크 아카이브 톤**: 배경 #0c0a09, 카드 #141210·브라운 보더·IBM Plex Mono·IBM Plex Sans KR, primary #8b7355(브라운), 완료 #7a9b76, 에러 #b85450.
- **단일 포커스 입력 흐름**: 스텝 1(이메일) → 2(이름) → 3(비밀번호) → 4(비밀번호 확인). 다음/이전 버튼·Enter로 전환, 전환 시 해당 input에 포커스 이동.
- **GSAP 부드러운 전환**: 카드 등장(y 14), 스텝 전환 시 패널(y 10 → 0, opacity).
- **반응형**: 480px 이하에서 카드 패딩 축소, 중앙 정렬 유지.
- **접근성**: 프롬프트·라벨, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .arcs-card(y 14), runStepIn(.arcs-step y 10 → 0).

## 사용 의도

- **다크 아카이브** 톤과 **단일 포커스 입력 흐름**, **GSAP 부드러운 전환**이 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 step·goNext·goPrev·focusStepInput·검증·제출.

## 구조

```
39/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 단일 포커스 스텝)
├── style.scss      # 시안 전용 SCSS (다크 아카이브·단일 포커스)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (step, goNext, goPrev, focusStepInput, 검증), GSAP 카드·스텝
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-archive-single > .arcs-wrap > .arcs-card(진행 1-2-3-4 + form .arcs-step × 4).
- **style.scss / style.css**: 다크 아카이브 배경·카드·브라운 primary·.arcs-step--invalid.
- **js/main.ts**: step, goNext, goPrev, focusStepInput, validate*, handleSubmit, GSAP .arcs-card·runStepIn.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
