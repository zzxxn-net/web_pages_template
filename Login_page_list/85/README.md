# 로그인 페이지 템플릿 시안 85

## 적용된 디자인 콘셉트 키워드

- **세계관/무드:** 감성 테크
- **UI 구조:** 카드 분리형 레이아웃
- **인터랙션:** 스크롤 없는 고정 플로우

## 콘셉트 및 UI/UX 특징

- **감성 테크:** 따뜻한 그라데이션 배경(#f8f4f0 → #efe8f2 → #f2edf5), 파스텔 퍼플 악센트(#9b7bb5), Noto Sans KR 타이포, 글래스모피즘 카드(backdrop-filter)로 감성적이면서도 정돈된 톤을 적용했습니다.
- **카드 분리형 레이아웃:** 타이틀·부제는 상단 헤더 카드(emotech-header), 로그인 폼은 별도 폼 카드(emotech-card)에 분리해 카드 분리형 구조를 이룹니다.
- **스크롤 없는 고정 플로우:** body overflow hidden으로 한 뷰포트 내에서만 노출하고, 중앙에 헤더 카드·폼 카드만 배치해 스크롤 없이 로그인만 수행하도록 설계했습니다. 모바일에서는 overflow auto로 전환합니다.

## 사용 의도 및 구조

- MVP 로그인(이메일·비밀번호) 전제의 시안으로, HTMX + Alpine.js + TypeScript + SASS/SCSS + GSAP 스택을 사용합니다.
- `index.html`: 카드 분리형(헤더 카드 + 폼 카드), has-focus·has-value·is-loading 클래스.
- `style.scss` / `style.css`: 해당 시안 전용 스타일(감성 테크 톤, 카드 분리형, 스크롤 없는 플로우).
- `js/login.ts` → `js/login.js`: Alpine 데이터(emotechCardLogin), GSAP 래퍼·헤더·카드·필드 진입 및 포커스 시 스케일 애니메이션.

PC~모바일 전 범위 반응형이며, 가로·세로 중앙 정렬을 기본 레이아웃 규칙으로 적용합니다.
