# model.py - EngiPath AI Expert System
# هذا الملف يحتوي على "المنطق البرمجي" (Logic) للنظام الخبير بلغة بايثون

def get_engineering_recommendation(age_group, interest, skill_level):
    """
    محرك الاستدلال (Inference Engine):
    يقوم بتحليل مدخلات المستخدم ومطابقتها مع قاعدة بيانات المشاريع.
    """
    
    # قاعدة البيانات (نسخة بايثون من مشاريعك)
    projects_db = {
        "health": {
            "title": "تطبيق تتبع العادات الصحية",
            "description": "موقع لمتابعة شرب الماء والنوم والرياضة.",
            "difficulty": "Beginner"
        },
        "education": {
            "title": "منصة تنظيم المذاكرة",
            "description": "جدول دراسي تفاعلي لتنظيم المهام.",
            "difficulty": "Beginner"
        },
        "environment": {
            "title": "حاسبة استهلاك الطاقة",
            "description": "أداة لحساب استهلاك الأجهزة المنزلية.",
            "difficulty": "Intermediate"
        },
        "business": {
            "title": "مولد أفكار مشاريع",
            "description": "يقترح أفكار تجارية حسب الاهتمام.",
            "difficulty": "Intermediate"
        }
    }

    # منطق المواءمة الذكية (Smart Alignment)
    if interest in projects_db:
        project = projects_db[interest]
        return {
            "status": "Success",
            "recommendation": project["title"],
            "details": project["description"]
        }
    else:
        return {"status": "Error", "message": "مجال غير معروف"}

# تجربة بسيطة للمحرك
if __name__ == "__main__":
    result = get_engineering_recommendation("youth", "environment", "intermediate")
    print(f"النظام الخبير يقترح: {result['recommendation']}")