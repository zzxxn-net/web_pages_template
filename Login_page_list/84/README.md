# 로그인 페이지 템플릿 시안 84

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 다크 아카이브
- **UI 구조:** 풀스크린 몰입형
- **인터랙션:** 상태 변화 강조

## 콘셉트 및 UI/UX 특징

- **다크 아카이브:** 다크 배경(#0f0e0c), 세피아·골드 악센트(#c4a35a), Crimson Pro 세리프 타이포, 아카이브/도서관 느낌의 고전적 톤을 적용했습니다.
- **풀스크린 몰입형:** body overflow hidden으로 한 뷰포트 내에서만 노출하고, 중앙에 로그인 카드만 떠 있는 형태로 몰입감을 줍니다. 모바일에서는 overflow auto로 전환합니다.
- **상태 변화 강조:** has-focus 시 테두리·포커스 링·배경·라벨 색을 뚜렷하게, has-value 시 테두리·배경·라벨 및 입력 완료 체크(✓) 아이콘을 노출해 포커스·입력·로딩 상태를 명확히 했습니다.

## 사용 의도 및 구조

- MVP 로그인(이메일·비밀번호) 전제의 시안으로, HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP 스택을 사용합니다.
- `index.html`: 풀스크린 래퍼·배경 레이어 + 중앙 카드, has-focus·has-value·is-loading·archive-field__state(✓) 클래스.
- `style.scss` / `style.css`: 해당 시안 전용 스타일(다크 아카이브 톤, 풀스크린 몰입형, 상태 변화 강조).
- `js/login.ts` → `js/login.js`: Alpine 데이터(archiveImmersiveLogin), GSAP 배경·래퍼·카드·헤더·필드 진입 및 포커스 시 스케일 애니메이션.

PC~모바일 전 범위 반응형이며, 가로·세로 중앙 정렬을 기본 레이아웃 규칙으로 적용합니다.
