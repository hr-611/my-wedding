/**
 * Watercolor Soft Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 1. 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 2. 메인 (히어로) ──
  groom: {
    name: "반상준",
    nameEn: "Groom",
    father: "",
    mother: "지영애",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "이해림",
    nameEn: "Bride",
    father: "이만용",
    mother: "김옥희",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-09-12",
    time: "16:50",
    venue: "웨딩여율리",
    hall: "5층 라온제나홀",
    address: "서울특별시 영등포구 국제금융로6길 26 한국노총빌딩",
    tel: "02-6277-0777"
  },

  // ── 3. 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로의 하루가 되고\n서로의 계절이 되어\n평생을 함께 걸어가려 합니다.\n\n기쁜 날 귀한 걸음하시어\n따뜻한 축복으로 함께해주세요."
  },

  // ── 4. 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "함께한 1540일의 시간 속에서\n가장 가까운 친구이자 사랑이 되었습니다."
  },

  // ── 5. 오시는 길 ──
  mapLinks: {
    kakao: "https://kko.to/tbIeT313_n",
    naver: "https://naver.me/Ixsqywvh"
  },

  // ── 6. 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "반상준", bank: "국민은행", number: "247902-04-215001" },
      { role: "어머니", name: "지영애", bank: "국민은행", number: "595101-01-704572" }
    ],
    bride: [
      { role: "신부", name: "이해림", bank: "신한은행", number: "110-316-452978" },
      { role: "아버지 · 어머니", name: "김옥희", bank: "신한은행", number: "110-037-420619" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "상준 ♥ 해림 결혼합니다",
    description: "2026년 9월 12일, 소중한 분들을 초대합니다."
  }
};
