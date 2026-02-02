# 시안 122 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 네오 브루탈리즘  
- **UI 구조:** 마이크로 인터랙션 중심  
- **인터랙션:** 상태 변화 강조  

---

## 콘셉트

고대비(#1a1a1a on #f5f5f0)·Space Mono·2px 테두리·border-radius 0 기반의 **네오 브루탈리즘** 무드에, **마이크로 인터랙션 중심**(hover 시 테두리 두께·포커스 시 box-shadow·valid 시 pulse 애니메이션·버튼 hover 시 오프셋 그림자)과 **상태 변화 강조**(포커스·유효·오류 시 테두리 두께·색·그림자로 뚜렷한 시각 전환)를 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **네오 브루탈리즘:** 배경 #f5f5f0, 입력 #fff, 테두리 #1a1a1a, Space Mono(제목·라벨·입력), 2px 테두리·border-radius 0.
- **마이크로 인터랙션:** hover 시 input border-width 2px; focus 시 3px·box-shadow 4px 4px 0; valid 시 ✓ s122-pulse 애니메이션; 버튼 hover 시 translate(3px,3px)·음각 그림자.
- **상태 변화 강조:** focused = 3px border·검정 그림자; valid = 녹색 테두리·라벨; invalid = 3px 빨간 테두리·빨간 그림자·에러 문구.
- **중앙 정렬:** 뷰포트 가로·세로 중앙, max-width 400px.
- **반응형:** clamp·100dvh로 PC~모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 400px로 PC·모바일 전 범위 대응.
