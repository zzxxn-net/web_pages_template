# 로그인 페이지 템플릿 시안 51

## 개요

**다크 아카이브** 무드와 **단계 분할형(Progressive Form)** 구조를 결합한 로그인 MVP 시안입니다. 이메일 → 비밀번호 순의 2단계 입력 플로우를 유지하며, **GSAP 기반 부드러운 전환**으로 카드 등장·단계 전환 시 패널 opacity·x 애니메이션을 적용했습니다.

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 다크 아카이브
- **UI 구조:** 단계 분할형(Progressive Form)
- **인터랙션:** GSAP 기반 부드러운 전환

## UI/UX 특징

- **다크 아카이브:** 다크 배경(#0d0b0a), 웜 그라데이션(#161210), 카드·보더·포인트(#b49a6c)로 아카이브/도서관 느낌 유지.
- **단계 분할형:** Step 1(이메일 입력 + 다음) → Step 2(비밀번호 입력 + 이전/접속). 상단 인디케이터(1–2)와 패널 전환으로 진행 상태 표시.
- **GSAP 기반 부드러운 전환:** 카드·헤더·폼 입장(opacity, y), 단계 전환 시 패널 opacity·x 전환. MutationObserver로 step 변경 감지 후 panel2 등장·panel1 퇴장 애니메이션 실행.
- **반응형:** PC~모바일 중앙 정렬, 480px 이하에서 패딩 축소.

## 파일 구조

- `index.html` — 로그인 마크업(Alpine.js `darkArchProgLogin`, HTMX 폼, step·패널·인디케이터)
- `style.scss` / `style.css` — 시안 전용 스타일
- `js/login.ts` / `js/login.js` — 로그인·GSAP 입장·패널 전환·MutationObserver
- `README.md` — 본 문서

## 사용 기술

- HTMX, Alpine.js, TypeScript(컴파일 → JS), SASS/SCSS, GSAP
