function translateAgeGroup(value){
  const map = {
    kids: "أطفال",
    teens: "مراهقون",
    youth: "شباب",
    adults: "بالغون"
  };
  return map[value];
}

function translateInterest(value){
  const map = {
    health: "الصحة والرفاهية",
    education: "التعليم الذكي",
    environment: "البيئة والاستدامة",
    business: "ريادة الأعمال"
  };
  return map[value];
}

function translateThinking(value){
  const map = {
    creative: "إبداعي",
    analytical: "تحليلي",
    balanced: "متوازن"
  };
  return map[value];
}

function translateWorkstyle(value){
  const map = {
    solo: "فردي",
    team: "ضمن فريق",
    both: "الاثنان"
  };
  return map[value];
}

function translateLevel(value){
  const map = {
    beginner: "مبتدئ",
    intermediate: "متوسط",
    advanced: "متقدم"
  };
  return map[value];
}

function buildProjectCard(project){
  return `
    <div class="project-card">
      <h3>${project.title}</h3>
      <p><span class="label">فكرة المشروع:</span> ${project.description}</p>
      <p><span class="label">التقنيات المستخدمة:</span> ${project.tools}</p>
      <p><span class="label">المهارات المكتسبة:</span> ${project.skills}</p>
      <p><span class="label">مستوى الصعوبة:</span> ${project.difficulty}</p>
      <p><span class="label">مدة التنفيذ:</span> ${project.duration}</p>
      <p><span class="label">أول خطوة للتنفيذ:</span> ${project.firstStep}</p>
      <p><span class="label">القيمة من المشروع:</span> ${project.benefit}</p>

      <div class="links-box">
        <h4>روابط تعليمية</h4>
        <ul>
          ${project.learningLinks.map(link => `<li><a href="${link.url}" target="_blank">${link.name}</a></li>`).join("")}
        </ul>

        <h4>روابط ومشاريع مشابهة</h4>
        <ul>
          ${project.similarProjects.map(link => `<li><a href="${link.url}" target="_blank">${link.name}</a></li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

function suggestProjects(){
  const ageGroup = document.getElementById("ageGroup").value;
  const interest = document.getElementById("interest").value;
  const thinking = document.getElementById("thinking").value;
  const workstyle = document.getElementById("workstyle").value;
  const level = document.getElementById("level").value;

  const result = document.getElementById("result");
  const summaryBox = document.getElementById("summaryBox");

  summaryBox.style.display = "block";
  summaryBox.innerHTML = `
    <h3>الملف المناسب لك</h3>
    <p>
      تم تحليل اختياراتك بناءً على:
      <strong>الفئة العمرية:</strong> ${translateAgeGroup(ageGroup)}،
      <strong>المجال:</strong> ${translateInterest(interest)}،
      <strong>نوع التفكير:</strong> ${translateThinking(thinking)}،
      <strong>طريقة العمل:</strong> ${translateWorkstyle(workstyle)}،
      <strong>المستوى:</strong> ${translateLevel(level)}.
    </p>
    <p>
      هذه مجموعة مشاريع مناسبة لك مع تفاصيل تساعدك على الفهم والبدء.
    </p>
  `;

  const projects = getProjects(interest);
  result.innerHTML = projects.map(project => buildProjectCard(project)).join("");
}

function getProjects(interest){
  const data = {
    health: [
      {
        title: "تطبيق تتبع العادات الصحية",
        description: "موقع يساعد المستخدم على متابعة العادات الصحية اليومية مثل شرب الماء والنوم والرياضة.",
        tools: "HTML - CSS - JavaScript",
        skills: "تصميم واجهات المستخدم - تنظيم البيانات - التفكير المنطقي",
        difficulty: "مبتدئ",
        duration: "أسبوع",
        firstStep: "إنشاء نموذج يسمح للمستخدم بإضافة عاداته اليومية.",
        benefit: "يساعد المستخدمين على تحسين نمط حياتهم الصحية.",
        learningLinks: [
          { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
          { name: "freeCodeCamp", url: "https://www.freecodecamp.org" }
        ],
        similarProjects: [
          { name: "Habit Tracker Projects", url: "https://github.com/topics/habit-tracker" },
          { name: "Health App Ideas", url: "https://github.com/topics/health-app" }
        ]
      },
      {
        title: "حاسبة السعرات اليومية",
        description: "موقع يساعد المستخدم على حساب احتياجه اليومي من السعرات الحرارية.",
        tools: "HTML - CSS - JavaScript",
        skills: "البرمجة المنطقية - بناء الأدوات التفاعلية",
        difficulty: "مبتدئ",
        duration: "أسبوع",
        firstStep: "إنشاء نموذج لإدخال الوزن والطول والعمر.",
        benefit: "يساعد المستخدم على تنظيم نظامه الغذائي.",
        learningLinks: [
          { name: "W3Schools JavaScript", url: "https://www.w3schools.com/js" },
          { name: "MDN Web Docs", url: "https://developer.mozilla.org" }
        ],
        similarProjects: [
          { name: "Calorie Calculator", url: "https://github.com/topics/calculator" },
          { name: "BMI Projects", url: "https://github.com/topics/fitness-app" }
        ]
      },
      {
        title: "نظام تذكير بالعادات الصحية",
        description: "نظام يرسل تذكيرات للمستخدم لممارسة الرياضة أو شرب الماء أو النوم.",
        tools: "HTML - CSS - JavaScript",
        skills: "إدارة الوقت - التعامل مع الأحداث في JavaScript",
        difficulty: "متوسط",
        duration: "أسبوعين",
        firstStep: "إنشاء نظام تذكير باستخدام التوقيت والتنبيهات.",
        benefit: "يساعد المستخدم على الالتزام بالعادات الصحية.",
        learningLinks: [
          { name: "Notifications API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API" },
          { name: "JS Timing", url: "https://www.w3schools.com/js/js_timing.asp" }
        ],
        similarProjects: [
          { name: "Reminder Apps", url: "https://github.com/topics/reminder-app" },
          { name: "Habit Reminder", url: "https://github.com/topics/productivity" }
        ]
      }
    ],

    education: [
      {
        title: "منصة تنظيم المذاكرة",
        description: "موقع يساعد الطلاب على تنظيم جدول المذاكرة والمهام الدراسية اليومية.",
        tools: "HTML - CSS - JavaScript",
        skills: "تنظيم البيانات - تصميم واجهات",
        difficulty: "مبتدئ",
        duration: "أسبوع",
        firstStep: "إنشاء جدول دراسي تفاعلي مع قائمة مهام.",
        benefit: "يساعد الطلاب على إدارة وقتهم بشكل أفضل.",
        learningLinks: [
          { name: "W3Schools HTML", url: "https://www.w3schools.com/html/" },
          { name: "W3Schools CSS", url: "https://www.w3schools.com/css/" }
        ],
        similarProjects: [
          { name: "Planner Projects", url: "https://github.com/topics/planner" },
          { name: "Student Tools", url: "https://github.com/topics/student-project" }
        ]
      },
      {
        title: "منصة اختبارات تدريبية",
        description: "موقع يقدم اختبارات قصيرة للطلاب لمراجعة الدروس بطريقة تفاعلية.",
        tools: "HTML - CSS - JavaScript",
        skills: "المنطق البرمجي - بناء الاختبارات",
        difficulty: "متوسط",
        duration: "أسبوعين",
        firstStep: "إنشاء بنك أسئلة بسيط وربطه بنظام درجات.",
        benefit: "يساعد الطلاب على مراجعة المعلومات وتثبيتها.",
        learningLinks: [
          { name: "JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
          { name: "freeCodeCamp", url: "https://www.freecodecamp.org" }
        ],
        similarProjects: [
          { name: "Quiz Systems", url: "https://github.com/topics/quiz" },
          { name: "Quiz Apps", url: "https://github.com/topics/quiz-app" }
        ]
      },
      {
        title: "منصة تلخيص الدروس",
        description: "موقع يسمح للطلاب بمشاركة ملخصات الدروس وتنظيمها بطريقة سهلة.",
        tools: "HTML - CSS - JavaScript",
        skills: "إدارة المحتوى - تنظيم المعلومات",
        difficulty: "متوسط",
        duration: "أسبوعين",
        firstStep: "إنشاء صفحة لإضافة الملخصات وصفحة لعرضها.",
        benefit: "يساعد الطلاب على فهم الدروس بشكل أسرع.",
        learningLinks: [
          { name: "MDN HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
          { name: "W3Schools", url: "https://www.w3schools.com/" }
        ],
        similarProjects: [
          { name: "Education Projects", url: "https://github.com/topics/education" },
          { name: "Study Tools", url: "https://github.com/topics/student-project" }
        ]
      }
    ],

    environment: [
      {
        title: "منصة إعادة التدوير",
        description: "موقع يوضح كيفية إعادة تدوير المواد المختلفة ويقدم معلومات توعوية.",
        tools: "HTML - CSS",
        skills: "تصميم مواقع توعوية - تنظيم المحتوى",
        difficulty: "مبتدئ",
        duration: "أسبوع",
        firstStep: "جمع معلومات واضحة عن المواد القابلة لإعادة التدوير.",
        benefit: "يرفع الوعي البيئي لدى المستخدمين.",
        learningLinks: [
          { name: "W3Schools HTML", url: "https://www.w3schools.com/html/" },
          { name: "Responsive Design", url: "https://www.w3schools.com/css/css_rwd_intro.asp" }
        ],
        similarProjects: [
          { name: "Sustainability Projects", url: "https://github.com/topics/sustainability" },
          { name: "Awareness Websites", url: "https://github.com/topics/education" }
        ]
      },
      {
        title: "حاسبة استهلاك الطاقة",
        description: "موقع يساعد المستخدم على حساب استهلاك الكهرباء للأجهزة المنزلية.",
        tools: "HTML - CSS - JavaScript",
        skills: "تحليل البيانات - الحسابات البرمجية",
        difficulty: "متوسط",
        duration: "أسبوعين",
        firstStep: "إنشاء نموذج لإدخال الأجهزة وعدد ساعات الاستخدام.",
        benefit: "يساعد على تقليل استهلاك الطاقة.",
        learningLinks: [
          { name: "JavaScript Math", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" },
          { name: "HTML Forms", url: "https://www.w3schools.com/html/html_forms.asp" }
        ],
        similarProjects: [
          { name: "Energy Projects", url: "https://github.com/topics/energy" },
          { name: "Environmental Apps", url: "https://github.com/topics/sustainability" }
        ]
      },
      {
        title: "منصة أفكار للحفاظ على البيئة",
        description: "موقع يعرض أفكارًا يومية بسيطة للحفاظ على البيئة والاستدامة.",
        tools: "HTML - CSS",
        skills: "عرض المحتوى - التصميم البسيط",
        difficulty: "مبتدئ",
        duration: "أسبوع",
        firstStep: "جمع أفكار بيئية وعرضها في بطاقات منظمة.",
        benefit: "يزيد الوعي البيئي بطريقة سهلة وجذابة.",
        learningLinks: [
          { name: "CSS Cards", url: "https://www.w3schools.com/howto/howto_css_cards.asp" },
          { name: "freeCodeCamp", url: "https://www.freecodecamp.org/learn/" }
        ],
        similarProjects: [
          { name: "Green Apps", url: "https://github.com/topics/sustainability" },
          { name: "Awareness Projects", url: "https://github.com/topics/education" }
        ]
      }
    ],

    business: [
      {
        title: "مولد أفكار مشاريع",
        description: "موقع يقترح أفكار مشاريع تجارية للمستخدم حسب اهتماماته.",
        tools: "HTML - CSS - JavaScript",
        skills: "التفكير الإبداعي - البرمجة التفاعلية",
        difficulty: "متوسط",
        duration: "أسبوع",
        firstStep: "إنشاء قاعدة أفكار مشاريع وربطها بالاختيارات.",
        benefit: "يساعد الأشخاص على بدء مشاريع مناسبة لهم.",
        learningLinks: [
          { name: "W3Schools JavaScript", url: "https://www.w3schools.com/js/" },
          { name: "MDN Web Docs", url: "https://developer.mozilla.org" }
        ],
        similarProjects: [
          { name: "Idea Generators", url: "https://github.com/topics/generator" },
          { name: "Business Tools", url: "https://github.com/topics/business" }
        ]
      },
      {
        title: "حاسبة أرباح المشاريع",
        description: "أداة تساعد أصحاب المشاريع الصغيرة على حساب الأرباح والتكاليف.",
        tools: "HTML - CSS - JavaScript",
        skills: "الحسابات البرمجية - بناء الأدوات",
        difficulty: "مبتدئ",
        duration: "أسبوع",
        firstStep: "برمجة معادلة لحساب الربح بناءً على التكلفة والسعر.",
        benefit: "يساعد أصحاب المشاريع على اتخاذ قرارات مالية أفضل.",
        learningLinks: [
          { name: "HTML Forms", url: "https://www.w3schools.com/html/html_forms.asp" },
          { name: "JS Math", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math" }
        ],
        similarProjects: [
          { name: "Calculator Projects", url: "https://github.com/topics/calculator" },
          { name: "Business Apps", url: "https://github.com/topics/business" }
        ]
      },
      {
        title: "نظام إدارة المصروفات",
        description: "موقع يسمح للمستخدم بتسجيل مصروفاته الشهرية وتنظيمها.",
        tools: "HTML - CSS - JavaScript",
        skills: "تنظيم البيانات - تحليل المصروفات",
        difficulty: "مبتدئ",
        duration: "أسبوع",
        firstStep: "إنشاء نموذج لإضافة المصروفات وتصنيفها.",
        benefit: "يساعد المستخدم على إدارة المال بشكل منظم.",
        learningLinks: [
          { name: "Local Storage", url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" },
          { name: "W3Schools JavaScript", url: "https://www.w3schools.com/js/" }
        ],
        similarProjects: [
          { name: "Expense Tracker", url: "https://github.com/topics/expense-tracker" },
          { name: "Budget Apps", url: "https://github.com/topics/budget-app" }
        ]
      }
    ]
  };

  return data[interest] || [];
}