# 로그인 페이지 템플릿 시안 79

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 감성 테크
- **UI 구조:** 풀스크린 몰입형
- **인터랙션:** 상태 변화 강조

## 콘셉트 및 UI/UX 특징

- **감성 테크:** 따뜻한 그라데이션 배경(#fef3e2 → #f8e4d4), 반투명 카드, 테라코타 악센트(#c97b63), Pretendard 타이포로 감성적이면서도 테크한 톤을 적용했습니다.
- **풀스크린 몰입형:** 전체 뷰포트를 그라데이션 배경(emo-login__bg)으로 채우고, 중앙에 단일 카드(emo-card)만 배치해 스크롤 없이 한 화면에 몰입되도록 설계했습니다.
- **상태 변화 강조:** has-focus 시 테두리·포커스 링·라벨 색, has-value 시 테두리·배경, is-loading 시 카드·버튼의 opacity·shadow 변화로 상태 전환을 시각적으로 명확히 강조했습니다.

## 사용 의도 및 구조

- MVP 로그인(이메일·비밀번호) 전제의 시안으로, HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP 스택을 사용합니다.
- `index.html`: 풀스크린 래퍼·배경 레이어 + 중앙 카드, has-focus/has-value/is-loading 클래스.
- `style.scss` / `style.css`: 해당 시안 전용 스타일(감성 테크 톤, 풀스크린 몰입, 상태별 시각 강조).
- `js/login.ts` → `js/login.js`: Alpine 데이터(emoFullscreenLogin), GSAP 배경·래퍼·카드·필드 진입 및 상태 전환 애니메이션.

PC~모바일 전 범위 반응형이며, 가로·세로 중앙 정렬을 기본 레이아웃 규칙으로 적용합니다.
