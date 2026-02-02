# 시안 128 · 회원가입 페이지 템플릿

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 감성 테크  
- **UI 구조:** 단계 분할형(Progressive Form)  
- **인터랙션:** 상태 변화 강조  

---

## 콘셉트

웜 톤(#fff8f5)·피치 악센트(#c97b63)·Noto Sans KR 기반의 **감성 테크** 무드에, **단계 분할형(Progressive Form)**(1단계: 이메일·이름 / 2단계: 비밀번호·비밀번호 확인, 단계 인디케이터·다음/이전 버튼)과 **상태 변화 강조**(포커스 시 border·box-shadow·라벨 색, 유효 시 border·배경·라벨 녹색, 오류 시 border·box-shadow·배경·라벨 빨강, transition으로 부드럽게 전환)를 결합한 회원가입 MVP 시안입니다.

## UI/UX 특징

- **감성 테크:** 배경 #fff8f5, 입력 #fff, Noto Sans KR, 피치 #c97b63·녹색 #7a9b76·에러 #c75c5c, 12px 라운드.
- **단계 분할형:** step 1(이메일·이름)·step 2(비밀번호·비밀번호 확인), step-dot·step-line 인디케이터, 다음/이전·가입하기 버튼, GSAP 단계 전환.
- **상태 변화 강조:** focused = accent border·ring·라벨; valid = 녹색 border·배경·라벨; invalid = 빨강 border·ring·배경·라벨. transition 0.3s.
- **중앙 정렬:** 뷰포트 가로·세로 중앙, max-width 380px.
- **반응형:** clamp·100dvh로 PC~모바일 전 범위 대응.

## 사용 의도 및 구조

- **MVP 회원가입:** 이메일, 이름, 비밀번호, 비밀번호 확인 + 유효성 검사 + 제출. HTMX + Alpine.js + TypeScript + SASS + GSAP.
- **파일:** index.html, style.scss → style.css, js/main.ts → main.js, README.md.

## 반응형

- clamp·100dvh·max-width 380px로 PC·모바일 전 범위 대응.
