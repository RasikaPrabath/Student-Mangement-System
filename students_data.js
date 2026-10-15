/**
 * Galle Elite Academy - Initial Student Dataset
 * Rich mock data representing students with full Sri Lankan details,
 * academic records, and extracurricular activities.
 */

const INITIAL_STUDENTS = [
  {
    admissionNo: "GA-4821",
    fullName: "Kavindu Prabath Mendis",
    sinhalaName: "කාවින්ද ප්‍රභාත් මෙන්ඩිස්",
    nameWithInitials: "K. P. Mendis",
    gender: "Male",
    dob: "2008-04-18",
    age: 18,
    grade: "Grade 13-A",
    stream: "Physical Science (Maths)",
    house: "Gemunu",
    houseColor: "#dc2626",
    photo: "assets/student_1.jpg",
    bloodGroup: "O+",
    religion: "Buddhist",
    nicNo: "200810902341",
    admissionDate: "2014-01-10",
    
    // Contact & Residence
    address: "No. 42/B, Light House Street, Fort, Galle",
    city: "Galle",
    district: "Galle",
    phone: "+94 77 123 4567",
    email: "kavindu.mendis@student.edu.lk",

    // Guardian Details
    guardian: {
      name: "Sunil Mendis",
      relationship: "Father",
      occupation: "Senior Marine Engineer (Galle Harbour)",
      phone: "+94 71 889 2314",
      motherName: "Damayanthi Perera",
      emergencyContact: "+94 71 889 2314 (Father)"
    },

    // Attendance & Conduct
    attendance: {
      totalDays: 180,
      presentDays: 174,
      percentage: 96.6,
      conduct: "Exemplary",
      housePoints: 45,
      teacherRemarks: "Outstanding leader, academically exceptional and consistently exemplifies the spirit of the Academy."
    },

    // Academics across terms
    academics: {
      currentTerm: "Term 2 - 2026",
      terms: [
        {
          termName: "Term 1 - 2026",
          average: 84.6,
          total: 423,
          rank: 2,
          classSize: 42,
          subjects: [
            { code: "MATH", name: "Combined Mathematics", marks: 92, grade: "A", teacher: "Mr. D. Senaratne" },
            { code: "PHYS", name: "Physics", marks: 85, grade: "A", teacher: "Mrs. N. Jayasinghe" },
            { code: "CHEM", name: "Chemistry", marks: 78, grade: "B", teacher: "Mr. K. Wickramasinghe" },
            { code: "ENG", name: "General English", marks: 88, grade: "A", teacher: "Ms. S. Fernando" },
            { code: "GIT", name: "General Info. Tech (GIT)", marks: 80, grade: "A", teacher: "Mr. P. Alwis" }
          ]
        },
        {
          termName: "Term 2 - 2026",
          average: 88.4,
          total: 442,
          rank: 1,
          classSize: 42,
          subjects: [
            { code: "MATH", name: "Combined Mathematics", marks: 96, grade: "A", teacher: "Mr. D. Senaratne" },
            { code: "PHYS", name: "Physics", marks: 89, grade: "A", teacher: "Mrs. N. Jayasinghe" },
            { code: "CHEM", name: "Chemistry", marks: 84, grade: "A", teacher: "Mr. K. Wickramasinghe" },
            { code: "ENG", name: "General English", marks: 91, grade: "A", teacher: "Ms. S. Fernando" },
            { code: "GIT", name: "General Info. Tech (GIT)", marks: 82, grade: "A", teacher: "Mr. P. Alwis" }
          ]
        }
      ]
    },

    // Extracurricular Activities
    extracurricular: {
      sports: [
        { name: "Cricket", role: "Captain - 1st XI Team", level: "All-Island Schools League", year: "2025 - 2026" },
        { name: "Athletics", role: "Team Member (400m, 4x400m)", level: "Southern Provincial Meet", year: "2024 - 2025" }
      ],
      clubs: [
        { name: "Prefects' Guild", position: "Senior Deputy Head Prefect", category: "Leadership", year: "2025 - 2026" },
        { name: "Science & ICT Society", position: "Vice President", category: "Academic & Tech", year: "2024 - 2026" },
        { name: "Western Brass Band", position: "Trumpet Section Leader", category: "Music & Performing", year: "2022 - 2025" }
      ],
      achievements: [
        { title: "Best Batsman - Southern Schools Trophy", year: "2025", issuer: "Southern Province Cricket Association" },
        { title: "All-Island Science Innovation Olympiad - Silver Medal", year: "2025", issuer: "National Science Foundation" },
        { title: "President's Scout Award Candidate", year: "2026", issuer: "Sri Lanka Scout Association" },
        { title: "College House Sports Star of the Year", year: "2025", issuer: "Galle Elite Academy" }
      ]
    }
  },

  {
    admissionNo: "GA-5104",
    fullName: "Chamodi Hansani Wickramasinghe",
    sinhalaName: "චමෝදි හංසනී වික්‍රමසිංහ",
    nameWithInitials: "C. H. Wickramasinghe",
    gender: "Female",
    dob: "2009-08-25",
    age: 17,
    grade: "Grade 12-B",
    stream: "Biological Science",
    house: "Parakrama",
    houseColor: "#2563eb",
    photo: "assets/student_2.jpg",
    bloodGroup: "B+",
    religion: "Buddhist",
    nicNo: "200973801923",
    admissionDate: "2015-01-12",

    // Contact & Residence
    address: "No. 158/3, Wakwella Road, Galle",
    city: "Galle",
    district: "Galle",
    phone: "+94 70 345 6789",
    email: "chamodi.h@student.edu.lk",

    // Guardian Details
    guardian: {
      name: "Dr. Nihal Wickramasinghe",
      relationship: "Father",
      occupation: "Consultant Physician (Karapitiya Teaching Hospital)",
      phone: "+94 77 992 4110",
      motherName: "Priyanthi Wickramasinghe (Attorney-at-Law)",
      emergencyContact: "+94 77 992 4110 (Father)"
    },

    // Attendance & Conduct
    attendance: {
      totalDays: 180,
      presentDays: 177,
      percentage: 98.3,
      conduct: "Exemplary",
      housePoints: 50,
      teacherRemarks: "Exceptional academic focus, brilliant orator, and deeply committed to community health initiatives."
    },

    // Academics across terms
    academics: {
      currentTerm: "Term 2 - 2026",
      terms: [
        {
          termName: "Term 1 - 2026",
          average: 91.2,
          total: 456,
          rank: 1,
          classSize: 38,
          subjects: [
            { code: "BIO", name: "Biology", marks: 95, grade: "A", teacher: "Dr. A. Pathirana" },
            { code: "CHEM", name: "Chemistry", marks: 91, grade: "A", teacher: "Mr. K. Wickramasinghe" },
            { code: "PHYS", name: "Physics", marks: 87, grade: "A", teacher: "Mrs. N. Jayasinghe" },
            { code: "ENG", name: "General English", marks: 94, grade: "A", teacher: "Ms. S. Fernando" },
            { code: "AGRI", name: "Agricultural Science", marks: 89, grade: "A", teacher: "Mrs. M. Abeywardena" }
          ]
        },
        {
          termName: "Term 2 - 2026",
          average: 93.6,
          total: 468,
          rank: 1,
          classSize: 38,
          subjects: [
            { code: "BIO", name: "Biology", marks: 97, grade: "A", teacher: "Dr. A. Pathirana" },
            { code: "CHEM", name: "Chemistry", marks: 94, grade: "A", teacher: "Mr. K. Wickramasinghe" },
            { code: "PHYS", name: "Physics", marks: 90, grade: "A", teacher: "Mrs. N. Jayasinghe" },
            { code: "ENG", name: "General English", marks: 96, grade: "A", teacher: "Ms. S. Fernando" },
            { code: "AGRI", name: "Agricultural Science", marks: 91, grade: "A", teacher: "Mrs. M. Abeywardena" }
          ]
        }
      ]
    },

    // Extracurricular Activities
    extracurricular: {
      sports: [
        { name: "Swimming", role: "Team Captain (Girls)", level: "National Junior Aquatic Championship", year: "2024 - 2026" },
        { name: "Table Tennis", role: "Singles Semi-Finalist", level: "Galle District Schools Meet", year: "2025" }
      ],
      clubs: [
        { name: "English Debating Union", position: "President", category: "Oratory & Debate", year: "2025 - 2026" },
        { name: "Senior Prefects' Guild", position: "Senior Prefect", category: "Leadership", year: "2025 - 2026" },
        { name: "Red Cross & First Aid Society", position: "Lead Youth Coordinator", category: "Social Service", year: "2024 - 2026" },
        { name: "Environmental Conservation Club", position: "Committee Member", category: "Nature & Green", year: "2023 - 2025" }
      ],
      achievements: [
        { title: "National All-Island English Debating Championship - Best Speaker", year: "2025", issuer: "Ministry of Education" },
        { title: "Karapitiya Medical Youth Volunteer Recognition", year: "2025", issuer: "Teaching Hospital Karapitiya" },
        { title: "Southern Province Schools Swimming 100m Freestyle - Gold Medal", year: "2025", issuer: "SLASU" },
        { title: "College Academic Excellence Award (Bio Stream)", year: "2025", issuer: "Galle Elite Academy" }
      ]
    }
  },

  {
    admissionNo: "GA-3982",
    fullName: "Tharindu Dilshan Karunaratne",
    sinhalaName: "තරිඳු දිල්ෂාන් කරුණාරත්න",
    nameWithInitials: "T. D. Karunaratne",
    gender: "Male",
    dob: "2007-11-04",
    age: 18,
    grade: "Grade 13-C",
    stream: "Commerce & Business Studies",
    house: "Vijaya",
    houseColor: "#16a34a",
    photo: "assets/student_1.jpg",
    bloodGroup: "A+",
    religion: "Buddhist",
    nicNo: "200730901249",
    admissionDate: "2013-01-08",

    address: "No. 74/1, Matara Road, Magalle, Galle",
    city: "Galle",
    district: "Galle",
    phone: "+94 78 512 9988",
    email: "tharindu.k@student.edu.lk",

    guardian: {
      name: "Bandula Karunaratne",
      relationship: "Father",
      occupation: "Managing Director (Southern Exporters Galle)",
      phone: "+94 77 220 5432",
      motherName: "Nilanthi Silva",
      emergencyContact: "+94 77 220 5432 (Father)"
    },

    attendance: {
      totalDays: 180,
      presentDays: 168,
      percentage: 93.3,
      conduct: "Very Good",
      housePoints: 38,
      teacherRemarks: "Very keen business aptitude, dynamic team worker, and excellent financial literacy."
    },

    academics: {
      currentTerm: "Term 2 - 2026",
      terms: [
        {
          termName: "Term 1 - 2026",
          average: 82.2,
          total: 411,
          rank: 4,
          classSize: 45,
          subjects: [
            { code: "ACC", name: "Accounting", marks: 90, grade: "A", teacher: "Mr. S. De Silva" },
            { code: "BUS", name: "Business Studies", marks: 84, grade: "A", teacher: "Mrs. K. Jayathilake" },
            { code: "ECON", name: "Economics", marks: 79, grade: "B", teacher: "Mr. L. Gamage" },
            { code: "ENG", name: "General English", marks: 82, grade: "A", teacher: "Ms. S. Fernando" },
            { code: "GIT", name: "Info. & Comm. Tech", marks: 76, grade: "B", teacher: "Mr. P. Alwis" }
          ]
        },
        {
          termName: "Term 2 - 2026",
          average: 85.0,
          total: 425,
          rank: 2,
          classSize: 45,
          subjects: [
            { code: "ACC", name: "Accounting", marks: 94, grade: "A", teacher: "Mr. S. De Silva" },
            { code: "BUS", name: "Business Studies", marks: 88, grade: "A", teacher: "Mrs. K. Jayathilake" },
            { code: "ECON", name: "Economics", marks: 83, grade: "A", teacher: "Mr. L. Gamage" },
            { code: "ENG", name: "General English", marks: 84, grade: "A", teacher: "Ms. S. Fernando" },
            { code: "GIT", name: "Info. & Comm. Tech", marks: 76, grade: "B", teacher: "Mr. P. Alwis" }
          ]
        }
      ]
    },

    extracurricular: {
      sports: [
        { name: "Basketball", role: "Point Guard / Vice Captain", level: "All-Island Schools Championship", year: "2024 - 2026" },
        { name: "Rowing", role: "Crew Member (Four)", level: "Galle Regatta", year: "2025" }
      ],
      clubs: [
        { name: "Commerce Society", position: "President", category: "Academic & Enterprise", year: "2025 - 2026" },
        { name: "Junior Chamber of Commerce", position: "Treasurer", category: "Leadership & Finance", year: "2024 - 2026" },
        { name: "Media Unit", position: "Senior Announcer", category: "Media & Broadcasting", year: "2023 - 2025" }
      ],
      achievements: [
        { title: "National Enterprise Challenge - Runners Up", year: "2025", issuer: "Chamber of Commerce Sri Lanka" },
        { title: "All-Island Schools Basketball Zonal Champions", year: "2025", issuer: "SLSBA" },
        { title: "Best Young Financial Analyst (College Level)", year: "2025", issuer: "Galle Elite Academy" }
      ]
    }
  },

  {
    admissionNo: "GA-6230",
    fullName: "Nadeesha Sewwandi Rajapaksha",
    sinhalaName: "නදීෂා සෙව්වන්දි රාජපක්ෂ",
    nameWithInitials: "N. S. Rajapaksha",
    gender: "Female",
    dob: "2010-02-14",
    age: 16,
    grade: "Grade 11-A (O/L)",
    stream: "General Secondary (O/L)",
    house: "Tissa",
    houseColor: "#eab308",
    photo: "assets/student_2.jpg",
    bloodGroup: "AB+",
    religion: "Buddhist",
    nicNo: "201054508912",
    admissionDate: "2016-01-15",

    address: "No. 12/4, Galle Road, Gintota, Galle",
    city: "Galle",
    district: "Galle",
    phone: "+94 76 654 3210",
    email: "nadeesha.r@student.edu.lk",

    guardian: {
      name: "S. K. Rajapaksha",
      relationship: "Father",
      occupation: "Principal, Southern Vocational Training Institute",
      phone: "+94 71 445 6789",
      motherName: "Samanthi Gunawardena",
      emergencyContact: "+94 71 445 6789 (Father)"
    },

    attendance: {
      totalDays: 180,
      presentDays: 172,
      percentage: 95.5,
      conduct: "Exemplary",
      housePoints: 42,
      teacherRemarks: "Brilliant student in Mathematics and Oriental Music. Highly disciplined and cooperative."
    },

    academics: {
      currentTerm: "Term 2 - 2026",
      terms: [
        {
          termName: "Term 2 - 2026",
          average: 90.4,
          total: 814,
          rank: 2,
          classSize: 44,
          subjects: [
            { code: "SIN", name: "Sinhala Language & Lit.", marks: 92, grade: "A", teacher: "Mrs. K. Jayasuriya" },
            { code: "ENG", name: "English Language", marks: 95, grade: "A", teacher: "Ms. S. Fernando" },
            { code: "MATH", name: "Mathematics", marks: 96, grade: "A", teacher: "Mr. D. Senaratne" },
            { code: "SCI", name: "Science", marks: 90, grade: "A", teacher: "Dr. A. Pathirana" },
            { code: "HIST", name: "History", marks: 88, grade: "A", teacher: "Mr. H. Perera" },
            { code: "REL", name: "Buddhism", marks: 94, grade: "A", teacher: "Ven. W. Rahula" },
            { code: "COMM", name: "Commerce Studies", marks: 86, grade: "A", teacher: "Mrs. K. Jayathilake" },
            { code: "MUSIC", name: "Eastern Music", marks: 93, grade: "A", teacher: "Mrs. R. Ranasinghe" },
            { code: "ICT", name: "Info. & Comm. Tech", marks: 80, grade: "A", teacher: "Mr. P. Alwis" }
          ]
        }
      ]
    },

    extracurricular: {
      sports: [
        { name: "Netball", role: "Center / Team Member", level: "Zonal Interschool Meet", year: "2024 - 2026" },
        { name: "Chess", role: "Team Player", level: "Galle District Interschool Chess", year: "2025" }
      ],
      clubs: [
        { name: "Oriental Music & Drama Society", position: "Secretary", category: "Performing Arts", year: "2025 - 2026" },
        { name: "Junior Prefects' Guild", position: "Junior Prefect", category: "Leadership", year: "2024 - 2026" },
        { name: "Buddhist Brotherhood", position: "Active Member", category: "Cultural & Religious", year: "2023 - 2026" }
      ],
      achievements: [
        { title: "All-Island School Music Competition (Violin Solo) - 1st Place", year: "2025", issuer: "Ministry of Education" },
        { title: "Southern Province Mathematics Olympiad - Merit Award", year: "2025", issuer: "Sri Lanka Olympiad Mathematics Foundation" }
      ]
    }
  }
];
