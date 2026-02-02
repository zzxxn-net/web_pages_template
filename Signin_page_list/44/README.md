# 회원가입 페이지 템플릿 시안 44

## 적용된 디자인 콘셉트 키워드

적용된 디자인 콘셉트 키워드:

세계관/무드: 감성 테크

UI 구조: 단계 분할형(Progressive Form)

인터랙션: GSAP 기반 부드러운 전환

---

## 콘셉트

**감성 테크 + 단계 분할형(Progressive Form) + GSAP 기반 부드러운 전환** — **감성 테크** 무드(따뜻한 그라데이션 #fef7ed→#fdf4ff→#f5f3ff·반투명 카드·Noto Sans KR·primary #7c3aed·완료 #059669)와 **단계 분할형** 구조(좌측 스텝 인디케이터 1~4 + 우측 단일 패널)를 결합한 시안. **GSAP 기반 부드러운 전환**으로 카드 등장(y 14, duration 0.5) 및 스텝 전환 시 해당 패널 fromTo(opacity 0, y 10 → opacity 1, y 0, duration 0.4, ease power2.out)을 적용한다.

- 시안 24(감성 테크+단계 분할형+스크롤 없는 고정), 시안 26(다크 아카이브+단계 분할형+GSAP), 시안 41(현대 판타지+단계 분할형+상태 변화)와 달리 **감성 테크 + 단계 분할형** 조합에 **GSAP 부드러운 전환**을 전면 적용: 카드 등장·스텝 패널 전환 모두 GSAP로 처리.
- **GSAP 기반 부드러운 전환**: DOMContentLoaded 시 .gtp-card from(opacity 0, y 14, duration 0.5). goNext/goPrev 시 runStepIn(.gtp-panel fromTo opacity 0, y 10 → 1, 0, duration 0.4).

## UI/UX 특징

- **레이아웃**: 뷰포트 가로·세로 중앙 정렬. .gtp-card 2열 그리드(120px 스텝 바 + 1fr 폼). 600px 이하에서 1열(스텝 바 상단·폼 하단).
- **감성 테크 톤**: 배경 그라데이션 #fef7ed→#fdf4ff→#f5f3ff, 카드 반투명·보더 rgba(167,139,250,0.2)·Noto Sans KR·primary #7c3aed, 완료 #059669, 에러 #dc2626.
- **단계 분할형**: 좌측 .gtp-steps(1~4 스텝 아이템·라벨), 우측 .gtp-form(단일 패널·스텝별 교체).
- **GSAP 부드러운 전환**: 카드 등장(y 14), 스텝 전환 시 패널(y 10 → 0, opacity).
- **반응형**: 600px 이하에서 스텝 바 가로·폼 하단, 중앙 정렬 유지.
- **접근성**: 프롬프트·라벨, aria-invalid, 에러 메시지, 비밀번호 보기/숨기기.
- **애니메이션**: GSAP .gtp-card(y 14), runStepIn(.gtp-panel y 10 → 0).

## 사용 의도

- **감성 테크** 톤과 **단계 분할형** 레이아웃, **GSAP 부드러운 전환**이 필요한 회원가입 폼에 활용.
- HTMX hx-post 연동 가능, Alpine.js로 step·goNext·goPrev·focusStepInput·검증·제출.

## 구조

```
44/
├── index.html      # 회원가입 페이지 마크업
├── style.scss      # 시안 전용 스타일 (소스)
├── style.css       # 컴파일 결과
├── js/
│   ├── main.ts     # TypeScript 소스
│   └── main.js     # 브라우저 로드 스크립트
└── README.md       # 본 설명
```
