# 회원가입 페이지 템플릿 시안 43

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 미래적 클린

UI 구조: 단일 포커스 입력 흐름

인터랙션: 포커스 이동 중심 UX

---

## 콘셉트

**미래적 클린 + 단일 포커스 입력 흐름 + 포커스 이동 중심 UX** — **미래적 클린** 무드(밝은 그라데이션 배경·화이트 카드·DM Sans·primary #0284c7)와 **단일 포커스 입력 흐름** 구조(한 화면에 한 필드만 노출, 스텝 1~4)를 결합한 시안. **포커스 이동 중심 UX**로 다음/이전 시 해당 input으로 자동 포커스, 진행 인디케이터(1~4) 클릭 시 해당 스텝으로 이동·포커스, Enter로 다음 단계, focus-visible 링으로 키보드 포커스 강조.

- 시안 28(미래적 클린+단일 포커스+GSAP), 시안 39(다크 아카이브+단일 포커스+GSAP)와 달리 **미래적 클린 + 단일 포커스**에 **포커스 이동 중심 UX**를 전면 적용: 진행 버튼 클릭으로 스텝 이동·포커스, goToStep(n)·focusStepInput(n)으로 일관된 포커스 이동.
- **포커스 이동 중심 UX**: goNext/goPrev 시 $nextTick으로 해당 input focus. 진행 아이템 클릭 시 goToStep(n) → step=n, focusStepInput(n). :focus-visible으로 포커스 링 표시.

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. .fcf-wrap(max-width 400px) 내 .fcf-card(헤더 + 진행 인디케이터 + 스텝 폼).
- **미래적 클린 톤**: 배경 그라데이션 #f8fafc→#f1f5f9, 카드 #fff·보더 #e2e8f0·DM Sans·primary #0284c7, 완료 #059669, 에러 #dc2626.
- **단일 포커스 입력 흐름**: 스텝 1(이메일) → 2(이름) → 3(비밀번호) → 4(비밀번호 확인). 한 번에 한 패널만 표시.
- **포커스 이동 중심**: 다음/이전 클릭·Enter 시 해당 input 자동 focus. 진행 인디케이터(1~4) 클릭 시 해당 스텝으로 이동 후 input focus. focus-visible 링 적용.
- **반응형**: 480px·360px 브레이크포인트에서 패딩·진행 라벨 숨김, 중앙 정렬 유지.
- **접근성**: 라벨·aria-current="step"·aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .fcf-card 등장(y 12), runStepIn(.fcf-step y 10 → 0).

## 사용 의도

- **미래적 클린** 톤과 **단일 포커스** 레이아웃, **포커스 이동 중심 UX**가 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 step·goNext·goPrev·goToStep·focusStepInput·검증·제출.

## 구조

```
43/
├── index.html      # 회원가입 페이지 마크업
├── style.scss      # 시안 전용 스타일 (소스)
├── style.css       # 컴파일 결과
├── js/
│   ├── main.ts     # TypeScript 소스
│   └── main.js     # 브라우저 로드 스크립트
└── README.md       # 본 설명
```
