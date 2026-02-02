# 회원가입 페이지 템플릿 시안 41

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 현대 판타지

UI 구조: 단계 분할형(Progressive Form)

인터랙션: 상태 변화 강조

---

## 콘셉트

**현대 판타지 + 단계 분할형(Progressive Form) + 상태 변화 강조** — **현대 판타지** 무드(딥 퍼플 그라데이션 배경·골드 primary #d4af37·Cormorant Garamond·Outfit·글래스 카드)와 **단계 분할형** 구조(좌측 스텝 인디케이터 1~4 + 우측 단일 패널)를 결합한 시안. **상태 변화 강조**로 유효 시 ✓·녹색 스텝, 무효 시 !·에러 링·빨간 스텝, 포커스 시 primary 링을 적용한다.

- 시안 19·25·36(현대 판타지+단일 포커스/풀스크린/마이크로), 시안 26(다크 아카이브+단계 분할형+GSAP), 시안 24(감성 테크+단계 분할형)와 달리 **현대 판타지 + 단계 분할형** 조합으로, **좌측 세로 스텝**(1 이메일 ~ 4 확인) + **우측 패널**에 **상태 변화 강조**(--on/--done 스텝·✓/! 아이콘·--valid/--invalid 필드)를 적용한다.
- **상태 변화 강조**: .fstep-step-item--on(골드)·--done(녹색). .fstep-field--valid 시 .fstep-state--ok(✓) opacity 1. .fstep-panel--invalid 시 .fstep-state--err(!)·에러 링 opacity 1.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. .fstep-card 2열 그리드(140px 스텝 바 + 1fr 폼). 600px 이하에서 1열(스텝 바 상단·폼 하단).
- **현대 판타지 톤**: 배경 그라데이션(#2d1b4e → #1a0f2e → #0f0818), 카드 반투명·골드 보더·Cormorant Garamond 프롬프트·Outfit 본문·primary #d4af37(골드), valid #6bcf7f, error #e07a7a.
- **단계 분할형**: 좌측 .fstep-steps(1~4 스텝 아이템·라벨), 우측 .fstep-form(단일 패널·스텝별 교체).
- **상태 변화 강조**: 스텝 --on(골드)·--done(녹색), 필드 --valid 시 ✓, --invalid 시 !·에러 링.
- **반응형**: 600px 이하에서 스텝 바 가로·폼 하단, 중앙 정렬 유지.
- **접근성**: 프롬프트·라벨, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .fstep-card(y 12), runStepIn(.fstep-panel y 8 → 0).

## 사용 의도

- **현대 판타지** 톤과 **단계 분할형** 레이아웃, **상태 변화 강조**가 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 step·goNext·goPrev·focusStepInput·검증·제출.

## 구조

```
41/
├── index.html      # 회원가입 마크업 (HTMX + Alpine.js, 단계 분할 + 상태 강조)
├── style.scss      # 시안 전용 SCSS (현대 판타지·단계 분할·상태 변화)
├── style.css       # style.scss 컴파일 결과
├── js/
│   ├── main.ts     # Alpine signupForm (step, goNext, goPrev, focusStepInput, 검증), GSAP 카드·스텝
│   └── main.js     # main.ts 컴파일 결과
└── README.md       # 본 설명
```

- **index.html**: .signup-fantasy-step > .fstep-wrap > .fstep-card(.fstep-steps + form .fstep-panel × 4, --invalid, --valid 필드, ✓/!) + .fstep-nav.
- **style.scss / style.css**: 현대 판타지 그라데이션·카드 2열·스텝 --on/--done·fstep-field--valid·fstep-state--ok/--err.
- **js/main.ts**: step, goNext, goPrev, focusStepInput, validate*, handleSubmit, GSAP .fstep-card·runStepIn.

## 기술 스택

- HTMX 1.9.x, Alpine.js 3.x, TypeScript, SASS/SCSS, GSAP 3.12
