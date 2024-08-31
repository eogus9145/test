const langPack = {

    ko : {
        "menu" : {
            "menu_loop01" : [
                {name : "첫화면", href : "#intro"},
                {name : "Telesoft", href : "#about"},
                {name : "회사연혁", href : "#history"},
                {name : "서비스", href : "#service"},
                {name : "솔루션", href : "#solution"},
                {name : "기술개발인증", href : "#certification"},
                {name : "협력사", href : "#partner"},
                {name : "오시는 길", href : "#contact"},
            ]
        },
        "intro" : {
            "intro_text01" : {index : 0, value : "앞서가는 자에게는<br>앞서가는 이유가 있습니다"},
            "intro_text02" : {index : 1, value : "LEADING TELECOMMUNICATION"},
        },
        "about" : {
            "about_text01" : {index : 0, value : "About"},
            "about_text02" : {index : 1, value : "Telesoft"},
            "about_loop01" : [
                {name : "설립일", rows : ["2000-11-17"]},
                {name : "대표이사", rows : ["김기범"]},
                {name : "주요사업영역", rows : ["MVNO 선불폰 솔루션", "선불폰 충전 서비스", "010PAY, thePAY", "앱 개발(Android, iOS)", "별정통신사업"]},
            ],
        },
        "history" : {
            "history_text01" : {index : 0, value : "회사 연혁"},
            "history_text02" : {index : 1, value : "꾸준한 매출 성장<br>멈추지 않는 연구투자"},
            "history_text03" : {index : 2, value : "경험과 노하우, 끊임없는 연구활동으로<br>MVNO 솔루션 내 입지를 강화하고 있습니다."},
            "history_loop01" : [
                {name : "2000~2006", rows : ["VOIP SOLUTION 입지 구축"]},
                {name : "2006~2011", rows : ["후후(App) 개발", "10,000,000 다운로드 달성", "010PAY 릴리즈"]},
                {name : "2011~2016", rows : ["선불폰 충전 서비스 thePAY 릴리즈"]},
                {name : "2016~현재", rows : ["50만 가입자 유치", "25개국 해외 모바일 충전서비스 제공"]}
            ],
            "history_loop01_arr01" : ["PPS 솔루션","인터넷전화국","벤처기업인증","연구소설립","VoIP 솔루션","선불카드서비스","국제전화서비스","IVVR솔루션","선불카드ASP","국제전화ASP","CM300 솔루션","Programable ARS","3G영상콜센타"],
            "history_loop01_arr02" : ["알뜰폰 솔루션 개발","KT 계열사 (3개 업체)","SKT 계열사 (1개 업체)","LG U + 계열사 (1개 업체)","후후(whowho?) 서비스 개발","후후(whowho?) 2, 3차 build","누적 다운로드 1천만 달성","국제전화 서비스 (앱, 웹) 개발","선불폰 충전 서비스 010pay 릴리즈"],
            "history_loop01_arr03" : ["모바일 솔루션 개발 및 운영","선불, 후불폰 충전 솔루션","통합 MVNO 솔루션","KT 계열사 (1개 업체)","SKT 계열사 (2개 업체)","LGT 계열사 (2개 업체)","‘thePAY’ 릴리즈","E-load 국제 충전 서비스 개시","Global 콜센터 설립 및 운영",],
            "history_loop01_arr04" : ["1. 국내 외국인 대상 서비스 1위","2. 50만 가입자 유치","3. 25개국 해외 모바일 충전 서비스"],
        },
        "service" : {
            "service_text01" : {index : 0, value : "Telesoft 서비스"},
            "service_text02" : {index : 1, value : "솔루션의 모든 것"},
            "service_text03" : {index : 2, value : "MVNO, 선불충전서비스, FileMaker 솔루션, Android, iOS, Web<br>모든 서비스의 중심에 Telesoft가 있습니다"},
            "service_loop01" : [
                {
                    name : "thePAY", 
                    desc : "No. 1. Korean Prepaid Phone Recharging Service", 
                    rows : [
                        "가장 많은 언어지원 (17개 언어)",
                        "가장 쉬운 가입 절차",
                        "선불폰, 데이터, 국제전화 충전",
                        "해외 요금 납부 서비스",
                        "해외 송금 서비스",
                        "ARS 충전 지원",
                        "SK, KT 국제전화(연락처, 최근통화)",
                        "가장 많은 서비스 사업자 제공",
                        "자동 사용자 요금 조회서비스",
                        "실시간 충전, 충전결과 알림 서비스"
                    ], 
                    android : "https://play.google.com/store/apps/details?id=com.tmvno.thepay", 
                    ios : "https://apps.apple.com/us/app/thepay-mobile-recharge/id1088189940", 
                    img : "/resources/images/service/service-image-01.jpg",
                    etc : ""
                },
                {
                    name : "010PAY", 
                    desc : "Prepaid Phone Recharging Service", 
                    rows : [
                        "개인정보 위 변조 방지",
                        "한국 내 가장 많은 언어지원 (17개 언어)",
                        "가장 쉬운 가입 절차",
                        "선불폰, 데이터, 국제전화 충전",
                        "ARS 충전 지원",
                        "가장 많은 서비스 사업자 제공",
                        "자동 사용자 요금 조회서비스",
                        "실시간 충전, 충전결과 알림 서비스"
                    ], 
                    android : "https://play.google.com/store/apps/details?id=com.tmvno.pay010", 
                    ios : "https://apps.apple.com/us/app/%ED%8C%90%EB%A7%A4%EC%A0%90-%EC%B6%A9%EC%A0%84-%EC%95%B1/id1102373038", 
                    img : "/resources/images/service/service-image-02.jpg",
                    etc : ""
                },
                {
                    name : "Claris FileMaker", 
                    desc : "Claris (Apple 자회사) 비즈니스 플랫폼 공식 개발사", 
                    rows : [
                        {name : "Platforms", rows : ["ERP, VM, MES etc"]},
                        {name : "Advantage", rows : ["다양한 비즈니스 프로세스에 대한 유연한 적용", "타 플랫폼 대비 최고 70% 예산 절약", "파일 및 문서공유"]},
                        {name : "적용분야", rows : ["공정관리, 키오스크 솔루션 개발", "학생정보관리","생산관리 프로젝트 관리 회계(인보이스, 세무)"]}
                    ], 
                    android : "", 
                    ios : "", 
                    img : "/resources/images/service/service-image-03.jpg",
                    etc : "개발상담 및 구입문의 : filemaker@telecentro.co.kr"
                },
                {
                    name : "Smart MVNO",
                    desc : "for Prepaid Mobie Retailer",
                    rows : [
                        "가장 많은 서비스 사업자 제공",
                        "안전한 정보 관리",
                        "선불폰, 데이터, 국제전화 충전",
                        "고객관리 서비스",
                        "선불폰 개통 서비스",
                        "ARS 충전 지원",
                        "자동 사용자 요금 조회서비스",
                        "실시간 충전, 충전결과 알림 서비스"
                    ],
                    android : "",
                    ios : "",
                    img : "/resources/images/service/service-image-04.jpg",
                    etc : ""
                }
            ]
        },
        "solution" : {
            "solution_text01" : {index : 0, value : "솔루션"},
            "solution_text02" : {index : 1, value : "Telesoft 솔루션"},
        },
        "certification" : {
            "certification_text01" : {index : 0, value : "끊임없는 연구활동"},
            "certification_text02" : {index : 1, value : "기술개발 인증등록 현황"},
            "certification_text03" : {index : 2, value : "자동 슬라이드"},
            "certification_loop01" : [
                {path:"resources/images/cert/cta-image-01.jpeg",title:"",desc:""},
                {path:"resources/images/cert/cta-image-02.jpeg",title:"",desc:""},
                {path:"resources/images/cert/cta-image-03.jpeg",title:"",desc:""},
                {path:"resources/images/cert/cta-image-04.jpeg",title:"",desc:""},
                {path:"resources/images/cert/cta-image-05.jpeg",title:"",desc:""},
                {path:"resources/images/cert/cta-image-06.jpeg",title:"",desc:""}
            ]
        },
        "partner" : {
            "partner_text01" : {index : 0, value : "협력사"},
            "partner_text02" : {index : 1, value : "비전을 이루어드릴 최적의 솔루션"},
            "partner_text03" : {index : 2, value : "100개 이상의 회사가 Telesoft의 솔루션, 호스팅서비스와 이미 함께하고 있습니다."},
            "partner_loop01" : [
                {path:"resources/images/partner/partner-image-01.svg",title:"",desc:""},
                {path:"resources/images/partner/partner-image-02.svg",title:"",desc:""},
                {path:"resources/images/partner/partner-image-03.svg",title:"",desc:""},
                {path:"resources/images/partner/partner-image-04.svg",title:"",desc:""},
                {path:"resources/images/partner/partner-image-05.svg",title:"",desc:""},
                {path:"resources/images/partner/partner-image-06.svg",title:"",desc:""},
                {path:"resources/images/partner/partner-image-07.svg",title:"",desc:""},
                {path:"resources/images/partner/partner-image-08.svg",title:"",desc:""},
                {path:"resources/images/partner/partner-image-09.svg",title:"",desc:""}
            ]
        },
        "contact" : {
            "contact_text01" : {index : 0, value : "오시는 길"},
            "contact_text02" : {index : 1, value : "최고를 위해서는<br>최고의 파트너가 필요합니다."},
            "contact_text03" : {index : 2, value : "주소"},
            "contact_text04" : {index : 3, value : "서울시 금천구 가산디지털 1로 196<br>에이스테크노타워 10차 910호"},
            "contact_text05" : {index : 4, value : "문의하기"},
            "contact_text06" : {index : 5, value : "+82-02-544-0594<br>+82-070-7945-0200<br>support@telesoft.co.kr<br>카카오채널로 문의하기"}
        }
    },
    en : {
        "menu" : {
            "menu_loop01" : [
                {name : "Intro", href : "#intro"},
                {name : "Telesoft", href : "#about"},
                {name : "History", href : "#history"},
                {name : "Services", href : "#service"},
                {name : "Solutions", href : "#solution"},
                {name : "Certification", href : "#certification"},
                {name : "Partners", href : "#partner"},
                {name : "Contact", href : "#contact"},
            ]
        },
        "intro" : {
            "intro_text01" : {index : 0, value : "For those who go ahead<br>There's a reason why I'm ahead"},
            "intro_text02" : {index : 1, value : "LEADING TELECOMMUNICATION"},
        },
        "about" : {
            "about_text01" : {index : 0, value : "About"},
            "about_text02" : {index : 1, value : "Telesoft"},
            "about_loop01" : [
                {name : "Establishment date", rows : ["2000-11-17"]},
                {name : "CEO", rows : ["Kim Ki-beom"]},
                {name : "business areas", rows : ["MVNO Prepaid Phone Solution", "prepaid phone charging service", "010PAY, thePAY", "App Development (Android, iOS)", "a specially designated telecommunications business"]},
            ]
        },
        "history" : {
            "history_text01" : {index : 0, value : "company history"},
            "history_text02" : {index : 1, value : "Steady sales growth, <br>unstoppable research investment"},
            "history_text03" : {index : 2, value : "We are strengthening our position in MVNO solutions with experience,<br>know-how, and constant research activities."},
            "history_loop01" : [
                {name : "2000~2006", rows : ["establish VOIP SOLUTION's position"]},
                {name : "2006~2011", rows : ["Developing an WhoWho(App)", "10,000,000 downloads achieved", "010PAY Release"]},
                {name : "2011~2016", rows : ["prepaid phone charging service thePAY release"]},
                {name : "2016~present", rows : ["Attracting 500,000 subscribers", "25 countries provide overseas mobile charging services"]}
            ],
            "history_loop01_arr01" : ["PPS 솔루션","인터넷전화국","벤처기업인증","연구소설립","VoIP 솔루션","선불카드서비스","국제전화서비스","IVVR솔루션","선불카드ASP","국제전화ASP","CM300 솔루션","Programable ARS","3G영상콜센타"],
            "history_loop01_arr02" : ["알뜰폰 솔루션 개발","KT 계열사 (3개 업체)","SKT 계열사 (1개 업체)","LG U + 계열사 (1개 업체)","후후(whowho?) 서비스 개발","후후(whowho?) 2, 3차 build","누적 다운로드 1천만 달성","국제전화 서비스 (앱, 웹) 개발","선불폰 충전 서비스 010pay 릴리즈"],
            "history_loop01_arr03" : ["모바일 솔루션 개발 및 운영","선불, 후불폰 충전 솔루션","통합 MVNO 솔루션","KT 계열사 (1개 업체)","SKT 계열사 (2개 업체)","LGT 계열사 (2개 업체)","‘thePAY’ 릴리즈","E-load 국제 충전 서비스 개시","Global 콜센터 설립 및 운영",],
            "history_loop01_arr04" : ["1. 국내 외국인 대상 서비스 1위","2. 50만 가입자 유치","3. 25개국 해외 모바일 충전 서비스"],
        },
        "service" : {
            "service_text01" : {index : 0, value : "Telesoft Services"},
            "service_text02" : {index : 1, value : "Everything about the solution"},
            "service_text03" : {index : 2, value : "MVNO, prepaid recharge service, FileMaker solution, Android, iOS, Web<br>Telesoft is at the center of all services"},
            "service_loop01" : [
                {
                    name : "thePAY", 
                    desc : "No. 1. Korean Prepaid Phone Recharging Service", 
                    rows : [
                        "Most Language Support (17 Languages)",
                        "easiest sign-up process",
                        "Charging prepaid phones, data, international calls",
                        "an overseas payment service",
                        "an overseas remittance service",
                        "ARS charging support",
                        "SK, KT international calls (Contact information, latest call)",
                        "Most service providers",
                        "Automatic User Fee Inquiry Service",
                        "Real-time charging, charging result notification service"
                    ], 
                    android : "https://play.google.com/store/apps/details?id=com.tmvno.thepay", 
                    ios : "https://apps.apple.com/us/app/thepay-mobile-recharge/id1088189940", 
                    img : "/resources/images/service/service-image-01.jpg",
                    etc : ""
                },
                {
                    name : "010PAY", 
                    desc : "Prepaid Phone Recharging Service", 
                    rows : [
                        "Prevention of tampering with personal information",
                        "Most Language Support (17 Languages)",
                        "easiest sign-up process",
                        "Charging prepaid phones, data, international calls",
                        "ARS charging support",
                        "Most service providers",
                        "Automatic User Fee Inquiry Service",
                        "Real-time charging, charging result notification service"
                    ], 
                    android : "https://play.google.com/store/apps/details?id=com.tmvno.pay010", 
                    ios : "https://apps.apple.com/us/app/%ED%8C%90%EB%A7%A4%EC%A0%90-%EC%B6%A9%EC%A0%84-%EC%95%B1/id1102373038", 
                    img : "/resources/images/service/service-image-02.jpg",
                    etc : ""
                },
                {
                    name : "Claris FileMaker", 
                    desc : "Claris (Apple subsidiary) business platform official developer", 
                    rows : [
                        {name : "Platforms", rows : ["ERP, VM, MES etc"]},
                        {name : "Advantage", rows : ["Flexible application to a variety of business processes", "Save up to 70% on other platforms", "Sharing files and documents"]},
                        {name : "Applicable field", rows : ["Process control, development of kiosk solution", "Student Information Management","Production Management Project Management Accounting (Invoice, Tax)"]}
                    ], 
                    android : "", 
                    ios : "", 
                    img : "/resources/images/service/service-image-03.jpg",
                    etc : "Development consultation and purchase inquiries : filemaker@telecentro.co.kr"
                },
                {
                    name : "Smart MVNO",
                    desc : "for Prepaid Mobie Retailer",
                    rows : [
                        "Most service providers",
                        "Secure information management",
                        "Charging prepaid phones, data, international calls",
                        "Customer Care Services",
                        "prepaid phone service",
                        "ARS charging support",
                        "Automatic User Fee Inquiry Service",
                        "Real-time charging, charging result notification service"
                    ],
                    android : "",
                    ios : "",
                    img : "/resources/images/service/service-image-04.jpg",
                    etc : ""
                }
            ]
        },
        "solution" : {
            "solution_text01" : {index : 0, value : "Solutions"},
            "solution_text02" : {index : 1, value : "Telesoft solutions"},
        },
        "certification" : {
            "certification_text01" : {index : 0, value : "constant research activities"},
            "certification_text02" : {index : 1, value : "Certification Registration Status"},
            "certification_text03" : {index : 2, value : "Auto slide"},
            "certification_loop01" : [
                {path:"resources/images/cert/cta-image-01.jpeg",title:"",desc:""},
                {path:"resources/images/cert/cta-image-02.jpeg",title:"",desc:""},
                {path:"resources/images/cert/cta-image-03.jpeg",title:"",desc:""},
                {path:"resources/images/cert/cta-image-04.jpeg",title:"",desc:""},
                {path:"resources/images/cert/cta-image-05.jpeg",title:"",desc:""},
                {path:"resources/images/cert/cta-image-06.jpeg",title:"",desc:""}
            ]
        },
        "partner" : {
            "partner_text01" : {index : 0, value : "Partner"},
            "partner_text02" : {index : 1, value : "The best solution for your vision"},
            "partner_text03" : {index : 2, value : "More than 100 companies are already with Telesoft's solutions and hosting services."},
            "partner_loop01" : [
                {path:"resources/images/partner/partner-image-01.svg",title:"",desc:""},
                {path:"resources/images/partner/partner-image-02.svg",title:"",desc:""},
                {path:"resources/images/partner/partner-image-03.svg",title:"",desc:""},
                {path:"resources/images/partner/partner-image-04.svg",title:"",desc:""},
                {path:"resources/images/partner/partner-image-05.svg",title:"",desc:""},
                {path:"resources/images/partner/partner-image-06.svg",title:"",desc:""},
                {path:"resources/images/partner/partner-image-07.svg",title:"",desc:""},
                {path:"resources/images/partner/partner-image-08.svg",title:"",desc:""},
                {path:"resources/images/partner/partner-image-09.svg",title:"",desc:""}
            ]
        },
        "contact" : {
            "contact_text01" : {index : 0, value : "Contact"},
            "contact_text02" : {index : 1, value : "For the best<br>we need the best partners."},
            "contact_text03" : {index : 2, value : "Address"},
            "contact_text04" : {index : 3, value : "196, Gasan digital 1-ro, Geumcheon-gu, Seoul, Republic of Korea"},
            "contact_text05" : {index : 4, value : "Contact"},
            "contact_text06" : {index : 5, value : "+82-02-544-0594<br>+82-070-7945-0200<br>support@telesoft.co.kr<br>Inquire through Kakao Channel"}
        }
    }

}