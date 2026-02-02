# 시안 115 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 실험적 인터페이스  
- **UI 구조:** 단계 분할형(Progressive Form)  
- **인터랙션:** 입력 반응형 애니메이션  

---

## 콘셉트

다크 그리드 배경(#0f0e12·퍼플 그리드 패턴)·JetBrains Mono·Outfit·퍼플 액센트(#a78bfa)의 **실험적 인터페이스** 무드에, **단계 분할형(Progressive Form)**(1단계: 이메일·이름 / 2단계: 비밀번호·비밀번호 확인, 진행 바 50%·100%, 다음/이전/가입하기)과 **입력 반응형 애니메이션**(포커스 시 입력 scale(1.008)·border·box-shadow 글로우, valid 시 녹색·invalid 시 s115-shake)을 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **실험적 인터페이스:** 고정 그리드 배경(.s115-bg), 다크 서페이스·퍼플 액센트, JetBrains Mono 라벨·버튼·진행 라벨, Outfit 본문.
- **단계 분할형:** step 1(기본 정보) → step 2(비밀번호), .s115-progress-bar width 50%/100%, 다음/이전/가입하기 버튼, x-show로 패널 전환.
- **입력 반응형 애니메이션:** .s115-field:focus-within 시 입력 scale(1.008)·border·box-shadow; valid 시 녹색 테두리·배경; invalid 시 빨간 테두리·배경·s115-shake.
- **중앙 정렬:** 뷰포트 가로·세로 중앙, max-width 400px 반응형.
- **반응형:** clamp·100dvh로 PC·모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 단계별 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 400px로 PC·모바일 전 범위 대응.
