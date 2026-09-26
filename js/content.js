/* 프로젝트 콘텐츠는 이 파일의 projects 배열에서만 수정합니다. 빈 상세 항목은 화면에서 숨깁니다. */
window.PORTFOLIO_CONTENT = {
  // 공개할 이메일. phone은 공개를 원할 때만 입력합니다(빈 값이면 숨김).
  email: 'jieun@example.com', phone: '010-0000-0000', contactDraft: true, github: '', resume: '',
  // 최신 경력부터 추가: { company: '회사명', period: '2023.03 – 현재', position: '웹 퍼블리셔', tasks: ['담당 업무', '대표 프로젝트'] }
  careers: [
    { company: '회사명 입력 (샘플)', period: 'YYYY.MM – 현재', position: '웹 퍼블리셔', tasks: ['기업·브랜드 웹사이트 구축 및 운영', '디자인 시안 기반 페이지 퍼블리싱과 공통 UI 관리', '반응형 화면 구현 및 브라우저별 검수'], draft: true },
    { company: '이전 회사명 입력 (샘플)', period: 'YYYY.MM – YYYY.MM', position: '웹 퍼블리셔', tasks: ['웹사이트 신규 페이지 제작 및 유지보수', '콘텐츠 수정과 UI 개선, 디자인·개발 담당자 협업'], draft: true }
  ],
  tabs: {
    experience: ['다양한 화면에서 일관된 경험\n반응형 웹사이트 구축', '웹 표준, 웹 접근성을 고려한 마크업\n반응형 웹, 인터랙션 구현', '사용자 경험을 고려한\n유지보수 및 코드 개선'],
    skills: ['HTML5 · 시맨틱 마크업\n읽기 쉬운 구조와 접근성', 'SCSS / CSS3 · Responsive\n다양한 화면에 유연한 레이아웃', 'JavaScript · GSAP\n목적이 분명한 인터랙션'],
    tools: ['Figma · Photoshop\n디자인 의도 이해와 에셋 작업', 'Git / SVN\n소스 관리와 협업', 'Browser DevTools\n반응형 확인과 디버깅']
  },
  // 배열 순서대로 표시됩니다. 미확인 정보는 빈 값 유지, highlights는 확인된 구현 포인트 2~3개 입력.
  projects: [
    {
      "id": "gshine",
      "title": "글로벌샤인 USA",
      "url": "https://gshineusa.com/",
      "image": "images/portfolio-thumbnails/11_글로벌샤인USA.png",
      "imageAlt": "글로벌샤인 USA 실제 사이트 캡처",
      "category": "기업 사이트",
      "group": "selected",
      "role": "전체 퍼블리싱 단독 구축",
      "contribution": "퍼블리싱 기여도 100%",
      "tech": [],
      "highlights": []
    },
    {
      "id": "rehome",
      "title": "디자인스튜디오 리홈",
      "url": "https://xn--oy2b663c.com/",
      "image": "images/portfolio-thumbnails/14_디자인스튜디오리홈.png",
      "imageAlt": "디자인스튜디오 리홈 실제 사이트 캡처",
      "category": "인테리어 스튜디오 사이트",
      "group": "selected",
      "role": "",
      "contribution": "",
      "tech": [],
      "highlights": []
    },
    {
      "id": "wildwest",
      "title": "와일드웨스트",
      "url": "https://wildwest.kr/main",
      "image": "images/portfolio-thumbnails/39_와일드웨스트.png",
      "imageAlt": "와일드웨스트 실제 사이트 캡처",
      "category": "기업 사이트",
      "group": "selected",
      "role": "",
      "contribution": "",
      "tech": [],
      "highlights": []
    },
    {
      "id": "metallix",
      "title": "신기미크론 메탈릭스",
      "url": "https://metallixkorea.com/",
      "image": "images/portfolio-thumbnails/41_신기미크론메탈릭스.png",
      "imageAlt": "신기미크론 메탈릭스 실제 사이트 캡처",
      "category": "제품 소개 사이트",
      "group": "selected",
      "role": "",
      "contribution": "",
      "tech": [],
      "highlights": []
    },
    {
      "id": "aandf",
      "title": "에이앤에프커뮤니케이션",
      "url": "https://aandf-ad.co.kr/",
      "image": "images/portfolio-thumbnails/42_에이앤에프커뮤니케이션.png",
      "imageAlt": "에이앤에프커뮤니케이션 실제 사이트 캡처",
      "category": "광고대행사 포트폴리오",
      "group": "selected",
      "role": "",
      "contribution": "",
      "tech": [],
      "highlights": []
    },
    {
      "id": "gwsad",
      "title": "관악구장애인체육회",
      "url": "https://gwsad.co.kr/",
      "image": "images/portfolio-thumbnails/34_관악구장애인체육회.png",
      "imageAlt": "관악구장애인체육회 실제 사이트 캡처",
      "category": "체육단체 사이트",
      "group": "selected",
      "role": "",
      "contribution": "",
      "tech": [],
      "highlights": []
    },
    {
      "id": "lughscape",
      "title": "루스케이프",
      "url": "https://lughscape.com/",
      "image": "images/portfolio-thumbnails/31_루스케이프.png",
      "imageAlt": "루스케이프 실제 사이트 캡처",
      "category": "스튜디오 포트폴리오",
      "group": "more",
      "role": "",
      "contribution": "",
      "tech": [],
      "highlights": []
    },
    {
      "id": "wavement",
      "title": "웨이브먼트",
      "url": "https://wavement.co.kr/",
      "image": "images/portfolio-thumbnails/45_웨이브먼트.png",
      "imageAlt": "웨이브먼트 실제 사이트 캡처",
      "category": "기업 사이트",
      "group": "more",
      "role": "",
      "contribution": "",
      "tech": [],
      "highlights": []
    },
    {
      "id": "kete",
      "title": "케이이티엔지니어링",
      "url": "https://kete.co.kr/main",
      "image": "images/portfolio-thumbnails/74_케이이티엔지니어링.png",
      "imageAlt": "케이이티엔지니어링 실제 사이트 캡처",
      "category": "기업 사이트",
      "group": "more",
      "role": "",
      "contribution": "",
      "tech": [],
      "highlights": []
    },
    {
      "id": "ips",
      "title": "아이피에스테크놀로지스",
      "url": "https://www.ips-korea.com/main",
      "image": "images/portfolio-thumbnails/59_아이피에스테크놀로지스.png",
      "imageAlt": "아이피에스테크놀로지스 실제 사이트 캡처",
      "category": "제품 소개 사이트",
      "group": "more",
      "role": "",
      "contribution": "",
      "tech": [],
      "highlights": []
    },
    {
      "id": "hanil",
      "title": "한일가람",
      "url": "https://hanillight.co.kr/",
      "image": "images/portfolio-thumbnails/29_한일가람.png",
      "imageAlt": "한일가람 실제 사이트 캡처",
      "category": "제품 소개 사이트",
      "group": "more",
      "role": "",
      "contribution": "",
      "tech": [],
      "highlights": []
    },
    {
      "id": "eueu",
      "title": "유유F&C 푸드트럭",
      "url": "https://eueu.co.kr/",
      "image": "images/portfolio-thumbnails/01_유유FNC.png",
      "imageAlt": "유유F&C 푸드트럭 실제 사이트 캡처",
      "category": "푸드트럭 서비스 사이트",
      "group": "more",
      "role": "",
      "contribution": "",
      "tech": [],
      "highlights": []
    },
    {
      "id": "theone",
      "title": "더원에프앤씨",
      "url": "https://www.theonefnc.com/main",
      "image": "images/portfolio-thumbnails/67_더원에프앤씨.png",
      "imageAlt": "더원에프앤씨 실제 사이트 캡처",
      "category": "케이터링 서비스 사이트",
      "group": "more",
      "role": "",
      "contribution": "",
      "tech": [],
      "highlights": []
    },
    {
      "id": "yh",
      "title": "와이에이치교역",
      "url": "https://yhlibrary.co.kr/",
      "image": "images/portfolio-thumbnails/13_와이에이치교역.png",
      "imageAlt": "와이에이치교역 실제 사이트 캡처",
      "category": "원단 카탈로그",
      "group": "more",
      "role": "",
      "contribution": "",
      "tech": [],
      "highlights": []
    },
    {
      "id": "aicf",
      "title": "AI-Cloud 포럼",
      "url": "https://aicf.kr/main",
      "image": "images/portfolio-thumbnails/71_AI-Cloud포럼.png",
      "imageAlt": "AI-Cloud 포럼 실제 사이트 캡처",
      "category": "포럼 사이트",
      "group": "more",
      "role": "",
      "contribution": "",
      "tech": [],
      "highlights": []
    },
    {
      "id": "juwon",
      "title": "주원엘앤씨",
      "url": "https://juwonlnc.com/main",
      "image": "images/portfolio-thumbnails/75_주원엘앤씨.png",
      "imageAlt": "주원엘앤씨 실제 사이트 캡처",
      "category": "물류기업 사이트",
      "group": "more",
      "role": "",
      "contribution": "",
      "tech": [],
      "highlights": []
    },
    {
      "id": "chunjae-english-aidt",
      "title": "천재교육 초등영어 5·6 AIDT",
      "category": "AI 디지털 교육자료",
      "group": "education",
      "image": "",
      "imageAlt": "",
      "description": "초등영어 5·6학년 AIDT 제작 참여",
      "linkNote": "아래 링크는 실제 학습 화면이 아닌 공식 서비스 소개 페이지입니다.",
      "role": "",
      "contribution": "",
      "tech": [],
      "highlights": [],
      "links": [
        { "label": "5학년 공식 소개", "url": "https://support.aitextbook.co.kr/gallery/book/41?author=3&year=2025&level=ele&grade=5" },
        { "label": "6학년 공식 소개", "url": "https://support.aitextbook.co.kr/gallery/book/42?author=3&year=2025&level=ele&grade=6" }
      ]
    }
    ,{
      id: 'chunjae-elementary-english5', title: '천재교육 초등영어5 전자저작물', category: '전자저작물', group: 'education', image: '', imageAlt: '', role: '', contribution: '', tech: [], highlights: [],
      links: [{ label: '전자저작물 보기', url: 'https://cdata2.tsherpa.co.kr/ebook/tsherpa/22/22ebook_E/TB2022TC1EE_50E/resource/include/main/index.html' }]
    },
    {
      id: 'chunjae-information', title: '천재교육 중등·고등 정보 전자저작물', category: '전자저작물 · 샘플 단원', group: 'education', image: '', imageAlt: '', role: '', contribution: '', tech: [], highlights: [],
      linkNote: '중등 정보는 3단원, 고등 정보는 2단원 샘플로 연결됩니다.',
      links: [
        { label: '중등 정보 · 3단원', url: 'https://cdata2.tsherpa.co.kr/ebook/tsherpa/22/22ebook_M/EB2022GC2Etc_06_70K_S/viewer/contents/index.html?contentInformationURL=../../resource/contents/lesson03&page=1' },
        { label: '고등 정보 · 2단원', url: 'https://cdata2.tsherpa.co.kr/ebook/tsherpa/22/22ebook_H/EB2022EC3Etc_10_10K_S/viewer/contents/index.html?contentInformationURL=../../resource/contents/lesson02&pageName=hi2_00_p038_01.html' }
      ]
    },
    {
      id: 'chunjae-middle-english2', title: '천재교육 중등영어2학년 전자저작물', category: '전자저작물', group: 'education', visibility: '비공개', image: '', imageAlt: '', role: '', contribution: '', tech: [], highlights: [], links: []
    },
    {
      id: 'chunjae-elementary-english6', title: '천재교육 초등영어6 전자저작물', category: '전자저작물', group: 'education', visibility: '비공개', image: '', imageAlt: '', role: '', contribution: '', tech: [], highlights: [], links: []
    },
    {
      id: 'keci', title: '한국환경보전원', category: '공공기관 사이트', group: 'more', url: 'https://www.keci.or.kr/web/main.do', image: '', imageAlt: '', role: '', contribution: '', tech: [], highlights: []
    },
    {
      id: 'mofa-story', title: '외교부 SNS 포털 모파스토리', category: 'SNS 콘텐츠 포털', group: 'more', url: 'https://story.mofa.go.kr/', image: '', imageAlt: '', role: '', contribution: '', tech: [], highlights: []
    },
    {
      id: 'ansan-ebook', title: '안산 ebook', category: '전자책 포털', group: 'more', url: 'https://www.ansan.go.kr/ebookPr/main/main.do', image: '', imageAlt: '', role: '', contribution: '', tech: [], highlights: []
    }
  ]
};
