/**
 * Galle Academy - Seamless Modern Student Information OS
 * Clean, lightweight, distraction-free logic
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'galle_academy_seamless_v3';
  const THEME_KEY = 'galle_academy_theme_pref';

  let students = [];
  let currentStudent = null;
  let activeTermIndex = 1;


  // 1. Data Store



  function initData() {
    const saved = localStorage.getItem(STORAGE_KEY);

[]


    if (saved) {

      try {

        students = JSON.parse(saved);
      } catch (e) {
        students = [...INITIAL_STUDENTS];
      }
    } else {
      students = [...INITIAL_STUDENTS];

      
      saveData();
    }
  }

  function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(students));
  }

  // 2. Toast Notification
  function showToast(message, icon = '✓') {
    const shelf = document.getElementById('toast-container');
    if (!shelf) return;
    const toast = document.createElement('div');
    toast.className = 'seamless-toast';
    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;
    shelf.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(8px)';
      toast.style.transition = 'all 0.2s ease';
      setTimeout(() => toast.remove(), 200);
    }, 2600);
  }

  // 3. Render Profile
  function renderStudentProfile(student) {
    if (!student) return;
    currentStudent = student;

    // Header Details
    const photo = document.getElementById('profile-photo');
    if (photo) photo.src = student.photo || 'assets/student_1.jpg';

    setText('profile-fullname', student.fullName);
    setText('profile-sinhala-name', student.sinhalaName || '');
    setText('profile-adm-no', student.admissionNo);
    setText('profile-grade', student.grade);
    setText('profile-stream', student.stream || 'Secondary');

    const houseEl = document.getElementById('profile-house');
    if (houseEl) {
      houseEl.textContent = `${student.house} House`;
      houseEl.style.backgroundColor = student.houseColor || '#1e3a8a';
    }

    // 4 Key Stats
    const terms = student.academics?.terms || [];
    const latestTerm = terms[terms.length - 1];

    setText('kpi-average', `${latestTerm ? latestTerm.average : '--'}%`);
    setText('kpi-term-name', latestTerm ? latestTerm.termName : 'Current');
    setText('kpi-rank', latestTerm ? `${latestTerm.rank}${getOrdinal(latestTerm.rank)}` : '--');
    setText('kpi-class-size', latestTerm ? `out of ${latestTerm.classSize} students` : '');
    setText('kpi-attendance', `${student.attendance ? student.attendance.percentage : 95}%`);
    setText('kpi-present-days', student.attendance ? `${student.attendance.presentDays} / ${student.attendance.totalDays} Days` : '');
    setText('kpi-conduct', `${student.attendance ? student.attendance.housePoints : 0} pts`);
    setText('kpi-house-points', `${student.attendance ? student.attendance.conduct : 'Good'} Conduct`);

    // Tab 1: Overview
    setText('info-fullname', student.fullName);
    setText('info-initials', student.nameWithInitials || student.fullName);
    setText('info-sinhala', student.sinhalaName || '-');
    setText('info-dob', student.dob || '-');
    setText('info-nic', student.nicNo || 'Pending');
    setText('info-gender-blood', `${student.gender} | ${student.bloodGroup || 'O+'}`);
    setText('info-adm-date', student.admissionDate || '2015-01-10');
    setText('info-address', student.address || 'Galle, Sri Lanka');

    if (student.guardian) {
      setText('info-guardian-name', student.guardian.name || '-');
      setText('info-guardian-occ', student.guardian.occupation || '-');
      setText('info-mother-name', student.guardian.motherName || '-');
      setText('info-guardian-phone', student.guardian.phone || '-');
      setText('info-emergency', student.guardian.emergencyContact || student.guardian.phone || '-');
    }
    setText('info-teacher-remarks', student.attendance?.teacherRemarks 
      ? `"${student.attendance.teacherRemarks}"`
      : '"Consistent, polite and attentive in all class sessions."');

    // Tab 2: Academics
    renderAcademics(student);

    // Tab 3: Activities
    renderActivities(student);

    // Tab 4: ID Card
    renderIdCard(student);
  }

  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"],
          v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
  }

  // 4. Render Academics
  function renderAcademics(student) {
    const terms = student.academics?.terms || [];
    const termBtnsWrap = document.getElementById('term-selector-buttons');
    if (termBtnsWrap) {
      termBtnsWrap.innerHTML = '';
      if (activeTermIndex >= terms.length) activeTermIndex = terms.length - 1;

      terms.forEach((term, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `term-tag-btn ${idx === activeTermIndex ? 'active' : ''}`;
        btn.textContent = term.termName;
        btn.addEventListener('click', () => {
          activeTermIndex = idx;
          renderAcademics(student);
        });
        termBtnsWrap.appendChild(btn);
      });
    }

    const selectedTerm = terms[activeTermIndex] || terms[0];
    if (!selectedTerm) return;

    const tbody = document.getElementById('academic-marks-tbody');
    const progressList = document.getElementById('subject-performance-bars');
    if (tbody) tbody.innerHTML = '';
    if (progressList) progressList.innerHTML = '';

    selectedTerm.subjects.forEach(sub => {
      if (tbody) {
        const tr = document.createElement('tr');
        const statusHtml = sub.marks >= 35 
          ? '<span style="color:var(--accent-emerald); font-weight:700; font-family:var(--font-mono); font-size:0.75rem;">PASS</span>' 
          : '<span style="color:var(--accent-rose); font-weight:700; font-family:var(--font-mono); font-size:0.75rem;">FAIL</span>';

        tr.innerHTML = `
          <td><span style="font-family:var(--font-mono); font-weight:600;">${sub.code}</span></td>
          <td style="font-weight:600;">${sub.name}</td>
          <td style="text-align:center; font-family:var(--font-mono); font-weight:700;">${sub.marks}</td>
          <td style="text-align:center;"><span class="clean-grade-pill grade-${sub.grade}">${sub.grade}</span></td>
          <td>${statusHtml}</td>
          <td style="color:var(--text-muted); font-size:0.8rem;">${sub.teacher || 'Faculty'}</td>
        `;
        tbody.appendChild(tr);
      }

      if (progressList) {
        const row = document.createElement('div');
        row.className = 'progress-row-item';
        row.innerHTML = `
          <div style="font-weight:600; color:var(--text-secondary);">${sub.name}</div>
          <div class="clean-bar-bg">
            <div class="clean-bar-fill" style="width:0%;" data-val="${sub.marks}"></div>
          </div>
          <div style="font-family:var(--font-mono); font-size:0.8rem; font-weight:700; text-align:right;">${sub.marks}%</div>
        `;
        progressList.appendChild(row);
      }
    });

    setTimeout(() => {
      document.querySelectorAll('.clean-bar-fill').forEach(bar => {
        bar.style.width = `${bar.getAttribute('data-val')}%`;
      });
    }, 40);
  }

  // 5. Render Activities
  function renderActivities(student) {
    const sportsBox = document.getElementById('sports-list-container');
    const clubsBox = document.getElementById('clubs-list-container');
    const honorsBox = document.getElementById('achievements-list-container');

    if (sportsBox) {
      sportsBox.innerHTML = '';
      (student.extracurricular?.sports || []).forEach(sport => {
        const item = document.createElement('div');
        item.className = 'activity-seamless-card';
        item.innerHTML = `
          <div class="activity-badge-circle">🏃</div>
          <div>
            <div style="font-weight:700; font-size:0.9rem;">${sport.name}</div>
            <div style="font-size:0.8rem; color:var(--accent-blue); font-weight:600;">${sport.role}</div>
            <div style="font-size:0.75rem; color:var(--text-subtle);">${sport.level} • ${sport.year}</div>
          </div>
        `;
        sportsBox.appendChild(item);
      });
    }

    if (clubsBox) {
      clubsBox.innerHTML = '';
      (student.extracurricular?.clubs || []).forEach(club => {
        const item = document.createElement('div');
        item.className = 'activity-seamless-card';
        item.innerHTML = `
          <div class="activity-badge-circle">🏛️</div>
          <div>
            <div style="font-weight:700; font-size:0.9rem;">${club.name}</div>
            <div style="font-size:0.8rem; color:var(--accent-emerald); font-weight:600;">${club.position}</div>
            <div style="font-size:0.75rem; color:var(--text-subtle);">${club.category} • ${club.year}</div>
          </div>
        `;
        clubsBox.appendChild(item);
      });
    }

    if (honorsBox) {
      honorsBox.innerHTML = '';
      (student.extracurricular?.achievements || []).forEach(ach => {
        const item = document.createElement('div');
        item.className = 'clean-key-val-row';
        item.style.padding = '0.75rem 0';
        item.innerHTML = `
          <div>
            <div style="font-weight:700; font-size:0.85rem;">${ach.title}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">${ach.issuer}</div>
          </div>
          <span style="font-family:var(--font-mono); font-size:0.75rem; font-weight:700; color:var(--accent-amber);">${ach.year}</span>
        `;
        honorsBox.appendChild(item);
      });
    }
  }

  // 6. Render ID Card
  function renderIdCard(student) {
    const photo = document.getElementById('id-card-photo');
    if (photo) photo.src = student.photo || 'assets/student_1.jpg';
    setText('id-card-name', student.fullName);
    setText('id-card-sinhala', student.sinhalaName || '');
    setText('id-card-grade', `${student.grade} • ${student.stream || 'Secondary'}`);
    setText('id-card-adm', student.admissionNo);
    setText('id-card-emergency', student.guardian?.emergencyContact || '+94 77 123 4567');
    setText('id-card-address', student.address || 'Fort, Galle');
    setText('id-card-house', student.house);
    setText('id-card-blood', student.bloodGroup || 'O+');
    setText('id-card-barcode', `*${student.admissionNo}*`);
  }

  // 7. Search Logic
  function searchStudents(query) {
    if (!query) return [];
    const q = query.trim().toLowerCase();
    return students.filter(s => {
      const matchAdm = s.admissionNo.toLowerCase().includes(q);
      const matchName = s.fullName.toLowerCase().includes(q);
      const matchSinhala = (s.sinhalaName || '').toLowerCase().includes(q);
      return matchAdm || matchName || matchSinhala;
    });
  }

  function handleSearchInput() {
    const input = document.getElementById('student-search-input');
    const popover = document.getElementById('search-autocomplete-box');
    if (!input || !popover) return;

    const query = input.value.trim();
    if (!query) {
      popover.classList.remove('active');
      return;
    }

    const matches = searchStudents(query);
    if (matches.length === 0) {
      popover.innerHTML = `<div style="padding:1rem; font-size:0.85rem; color:var(--text-muted); text-align:center;">No student found for "${query}"</div>`;
      popover.classList.add('active');
      return;
    }

    popover.innerHTML = '';
    matches.slice(0, 5).forEach(s => {
      const row = document.createElement('div');
      row.className = 'popover-row';
      row.innerHTML = `
        <img src="${s.photo || 'assets/student_1.jpg'}" style="width:32px; height:32px; border-radius:50%; object-fit:cover;" alt="Avatar">
        <div style="flex:1;">
          <div style="font-weight:700; font-size:0.875rem;">${s.fullName}</div>
          <div style="font-size:0.75rem; color:var(--text-muted);">${s.grade} • ${s.house} House</div>
        </div>
        <span style="font-family:var(--font-mono); font-size:0.8rem; font-weight:700; color:var(--accent-blue);">${s.admissionNo}</span>
      `;
      row.addEventListener('click', () => {
        selectStudent(s);
        popover.classList.remove('active');
        input.value = '';
      });
      popover.appendChild(row);
    });

    popover.classList.add('active');
  }

  function selectStudent(student) {
    renderStudentProfile(student);
    showToast(`Viewing ${student.fullName} (${student.admissionNo})`, '✦');
    document.getElementById('profile-sheet')?.scrollIntoView({ behavior: 'smooth' });
  }

  // 8. Add / Edit Modal
  function openAddStudentModal(studentToEdit = null) {
    const modal = document.getElementById('student-modal');
    if (!modal) return;
    const isEdit = !!studentToEdit;
    document.getElementById('form-is-edit').value = isEdit ? 'true' : 'false';
    document.getElementById('modal-title').textContent = isEdit ? `Edit: ${studentToEdit.admissionNo}` : 'Register Student';

    if (isEdit) {
      document.getElementById('form-adm-no').value = studentToEdit.admissionNo;
      document.getElementById('form-adm-no').disabled = true;
      document.getElementById('form-fullname').value = studentToEdit.fullName;
      document.getElementById('form-sinhala-name').value = studentToEdit.sinhalaName || '';
      document.getElementById('form-grade').value = studentToEdit.grade;
      document.getElementById('form-stream').value = studentToEdit.stream || '';
      document.getElementById('form-house').value = studentToEdit.house;
      document.getElementById('form-dob').value = studentToEdit.dob || '';
      document.getElementById('form-gender').value = studentToEdit.gender || 'Male';
      document.getElementById('form-address').value = studentToEdit.address || '';
      document.getElementById('form-guardian-name').value = studentToEdit.guardian?.name || '';
      document.getElementById('form-guardian-phone').value = studentToEdit.guardian?.phone || '';
    } else {
      document.getElementById('form-adm-no').value = `GA-${Math.floor(1000 + Math.random() * 9000)}`;
      document.getElementById('form-adm-no').disabled = false;
      document.getElementById('form-fullname').value = '';
      document.getElementById('form-sinhala-name').value = '';
      document.getElementById('form-grade').value = 'Grade 12-A';
      document.getElementById('form-stream').value = 'Physical Science';
      document.getElementById('form-house').value = 'Gemunu';
      document.getElementById('form-dob').value = '2008-05-15';
      document.getElementById('form-gender').value = 'Male';
      document.getElementById('form-address').value = 'Fort, Galle';
      document.getElementById('form-guardian-name').value = '';
      document.getElementById('form-guardian-phone').value = '';
    }

    modal.classList.add('active');
  }

  function closeStudentModal() {
    document.getElementById('student-modal')?.classList.remove('active');
  }

  function handleSaveStudent() {
    const admNo = document.getElementById('form-adm-no').value.trim();
    const fullName = document.getElementById('form-fullname').value.trim();
    const sinhalaName = document.getElementById('form-sinhala-name').value.trim();
    const grade = document.getElementById('form-grade').value.trim();
    const stream = document.getElementById('form-stream').value.trim();
    const house = document.getElementById('form-house').value;
    const dob = document.getElementById('form-dob').value;
    const gender = document.getElementById('form-gender').value;
    const address = document.getElementById('form-address').value.trim();
    const guardianName = document.getElementById('form-guardian-name').value.trim();
    const guardianPhone = document.getElementById('form-guardian-phone').value.trim();

    if (!admNo || !fullName || !grade) {
      alert('Please fill in required fields (Admission No, Full Name, Grade).');
      return;
    }

    const houseColors = { Gemunu: '#dc2626', Parakrama: '#2563eb', Vijaya: '#16a34a', Tissa: '#eab308' };
    const isEdit = document.getElementById('form-is-edit').value === 'true';

    if (isEdit) {
      const idx = students.findIndex(s => s.admissionNo === admNo);
      if (idx !== -1) {
        students[idx] = {
          ...students[idx],
          fullName,
          sinhalaName,
          grade,
          stream,
          house,
          houseColor: houseColors[house] || '#1e3a8a',
          dob,
          gender,
          address,
          guardian: {
            ...students[idx].guardian,
            name: guardianName,
            phone: guardianPhone
          }
        };
        saveData();
        closeStudentModal();
        renderStudentProfile(students[idx]);
        showToast(`Saved changes for ${admNo}`, '✓');
      }
    } else {
      if (students.some(s => s.admissionNo.toLowerCase() === admNo.toLowerCase())) {
        alert(`Admission number ${admNo} already exists!`);
        return;
      }

      const newStudent = {
        admissionNo: admNo,
        fullName: fullName,
        sinhalaName: sinhalaName,
        nameWithInitials: fullName.split(' ').map((p, i, arr) => i === arr.length - 1 ? p : p[0] + '.').join(' '),
        gender: gender,
        dob: dob || '2008-01-01',
        age: 17,
        grade: grade,
        stream: stream || 'Secondary',
        house: house,
        houseColor: houseColors[house] || '#1e3a8a',
        photo: gender === 'Female' ? 'assets/student_2.jpg' : 'assets/student_1.jpg',
        bloodGroup: 'O+',
        city: 'Galle',
        address: address || 'Galle, Sri Lanka',
        phone: '+94 77 123 4567',
        guardian: {
          name: guardianName || 'Guardian',
          relationship: 'Parent',
          occupation: 'Professional',
          phone: guardianPhone || '+94 71 000 0000',
          emergencyContact: guardianPhone || '+94 71 000 0000'
        },
        attendance: {
          totalDays: 180,
          presentDays: 174,
          percentage: 96.6,
          conduct: 'Exemplary',
          housePoints: 40,
          teacherRemarks: 'Diligent and enthusiastic student.'
        },
        academics: {
          currentTerm: 'Term 2 - 2026',
          terms: [
            {
              termName: 'Term 2 - 2026',
              average: 88.0,
              total: 440,
              rank: 2,
              classSize: 42,
              subjects: [
                { code: 'MATH', name: 'Mathematics', marks: 90, grade: 'A', teacher: 'Faculty' },
                { code: 'SCI', name: 'Science', marks: 86, grade: 'A', teacher: 'Faculty' },
                { code: 'ENG', name: 'English', marks: 92, grade: 'A', teacher: 'Faculty' }
              ]
            }
          ]
        },
        extracurricular: { sports: [], clubs: [], achievements: [] }
      };

      students.unshift(newStudent);
      saveData();
      closeStudentModal();
      selectStudent(newStudent);
      showToast(`Registered ${newStudent.fullName}`, '✓');
    }
  }

  // 9. Theme
  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    showToast(`Switched to ${isDark ? 'Dark' : 'Light'} Mode`, isDark ? '🌙' : '☀️');
  }

  // 10. CSV Operations
  function exportToCsv() {
    let csv = "AdmissionNo,FullName,SinhalaName,Grade,Stream,House,Gender,DOB,Address,GuardianName,GuardianPhone\n";
    students.forEach(s => {
      const row = [
        `"${s.admissionNo}"`,
        `"${s.fullName}"`,
        `"${s.sinhalaName || ''}"`,
        `"${s.grade}"`,
        `"${s.stream || ''}"`,
        `"${s.house}"`,
        `"${s.gender}"`,
        `"${s.dob || ''}"`,
        `"${s.address ? s.address.replace(/"/g, '""') : ''}"`,
        `"${s.guardian?.name || ''}"`,
        `"${s.guardian?.phone || ''}"`
      ];
      csv += row.join(",") + "\n";
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `galle_academy_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Exported CSV file', '📥');
  }

  function handleCsvUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
      const text = evt.target.result;
      const lines = text.split(/\r?\n/).filter(line => line.trim().length > 0);
      let count = 0;
      for (let i = 1; i < lines.length; i++) {
        const parts = lines[i].split(',').map(item => item.replace(/^"|"$/g, '').trim());
        if (parts[0] && !students.some(s => s.admissionNo.toLowerCase() === parts[0].toLowerCase())) {
          students.push({
            admissionNo: parts[0],
            fullName: parts[1] || 'Imported Student',
            sinhalaName: parts[2] || '',
            nameWithInitials: parts[1] || '',
            grade: parts[3] || 'Grade 12',
            stream: parts[4] || 'Science',
            house: parts[5] || 'Gemunu',
            houseColor: '#dc2626',
            photo: 'assets/student_1.jpg',
            gender: parts[6] || 'Male',
            dob: parts[7] || '2008-01-01',
            age: 17,
            address: parts[8] || 'Galle',
            guardian: { name: parts[9] || 'Guardian', phone: parts[10] || '' },
            attendance: { totalDays: 180, presentDays: 170, percentage: 94.4, conduct: 'Good', housePoints: 30 },
            academics: {
              currentTerm: 'Term 2 - 2026',
              terms: [{ termName: 'Term 2 - 2026', average: 80, total: 400, rank: 5, classSize: 40, subjects: [] }]
            },
            extracurricular: { sports: [], clubs: [], achievements: [] }
          });
          count++;
        }
      }
      saveData();
      document.getElementById('csv-modal')?.classList.remove('active');
      showToast(`Imported ${count} student records`, '📂');
      renderStudentProfile(students[0]);
    };
    reader.readAsText(file);
    e.target.value = '';
  }

  // 11. Event Listeners
  function setupEventListeners() {
    const searchInput = document.getElementById('student-search-input');
    const popover = document.getElementById('search-autocomplete-box');

    if (searchInput) {
      searchInput.addEventListener('input', handleSearchInput);
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const matches = searchStudents(searchInput.value);
          if (matches.length > 0) {
            selectStudent(matches[0]);
            popover?.classList.remove('active');
          }
        }
      });
    }

    document.addEventListener('click', (e) => {
      if (popover && !popover.contains(e.target) && e.target !== searchInput) {
        popover.classList.remove('active');
      }
    });

    // Quick Chips
    document.querySelectorAll('.quick-chip').forEach(el => {
      el.addEventListener('click', () => {
        const adm = el.getAttribute('data-adm');
        const st = students.find(s => s.admissionNo === adm);
        if (st) selectStudent(st);
      });
    });

    // Tabs
    document.querySelectorAll('.tab-nav-link').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-nav-link').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane-seamless').forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        const targetId = btn.getAttribute('data-tab');
        const pane = document.getElementById(targetId);
        if (pane) pane.classList.add('active');
      });
    });

    // ID Card Flip
    const idCard = document.getElementById('interactive-id-card');
    idCard?.addEventListener('click', () => idCard.classList.toggle('flipped'));

    // Print
    document.getElementById('btn-print-profile')?.addEventListener('click', () => window.print());

    // Copy Admission
    document.getElementById('btn-copy-adm')?.addEventListener('click', () => {
      if (currentStudent) {
        navigator.clipboard.writeText(currentStudent.admissionNo).then(() => {
          showToast(`Copied ${currentStudent.admissionNo}`, '📋');
        });
      }
    });

    // Modals
    document.getElementById('btn-open-add-student')?.addEventListener('click', () => openAddStudentModal(null));
    document.getElementById('btn-edit-student')?.addEventListener('click', () => openAddStudentModal(currentStudent));
    document.getElementById('btn-close-modal')?.addEventListener('click', closeStudentModal);
    document.getElementById('btn-cancel-modal')?.addEventListener('click', closeStudentModal);
    document.getElementById('btn-save-student')?.addEventListener('click', handleSaveStudent);

    // CSV modal
    const csvModal = document.getElementById('csv-modal');
    document.getElementById('btn-open-csv-modal')?.addEventListener('click', () => csvModal?.classList.add('active'));
    document.getElementById('btn-close-csv-modal')?.addEventListener('click', () => csvModal?.classList.remove('active'));
    document.getElementById('btn-export-csv')?.addEventListener('click', exportToCsv);
    document.getElementById('csv-file-input')?.addEventListener('change', handleCsvUpload);
    document.getElementById('btn-reset-data')?.addEventListener('click', () => {
      if (confirm('Reset to default Galle Academy dataset?')) {
        students = [...INITIAL_STUDENTS];
        saveData();
        csvModal?.classList.remove('active');
        selectStudent(students[0]);
        showToast('Restored default students', '🔄');
      }
    });

    // Theme
    document.getElementById('theme-toggle-btn')?.addEventListener('click', toggleTheme);

    // Shortcut '/'
    document.addEventListener('keydown', (e) => {
      if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput?.focus();
      }
    });
  }

  // Bootstrap
  document.addEventListener('DOMContentLoaded', () => {
    initData();
    initTheme();
    setupEventListeners();

    if (students.length > 0) {
      renderStudentProfile(students[0]);
    }
  });

})();
