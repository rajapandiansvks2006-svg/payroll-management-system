// --- Sidebar Toggle Logic ---
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.getElementById("sidebar");
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.toggle("active");
            } else {
                sidebar.classList.toggle("collapsed");
                document.querySelector(".main-content").classList.toggle("expanded");
            }
        });
    }

    // Login logic dummy
    const loginForm = document.getElementById("loginForm");
    if(loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            // Just redirect to dashboard anywhere
            window.location.href = "dashboard.html";
        });
    }
    
    // Print logic
    const btnPrint = document.getElementById("btnPrint");
    if (btnPrint) {
        btnPrint.addEventListener("click", () => {
            window.print();
        });
    }
});

// --- Mock Data ---
const employees = [
    { id: 'EMP001', name: 'John Doe', department: 'Engineering', role: 'Senior Developer', status: 'Active', salary: 85000 },
    { id: 'EMP002', name: 'Jane Smith', department: 'Human Resources', role: 'HR Manager', status: 'Active', salary: 70000 },
    { id: 'EMP003', name: 'Michael Johnson', department: 'Finance', role: 'Accountant', status: 'Inactive', salary: 60000 },
    { id: 'EMP004', name: 'Emily Davis', department: 'Design', role: 'UI/UX Designer', status: 'Active', salary: 75000 },
    { id: 'EMP005', name: 'David Wilson', department: 'Engineering', role: 'Frontend Developer', status: 'Active', salary: 65000 }
];

// Load Employee list into table on employees.html
function loadEmployees() {
    const tbody = document.getElementById("employeeTableBody");
    if (!tbody) return;

    tbody.innerHTML = '';
    employees.forEach(emp => {
        const tr = document.createElement("tr");
        const statusClass = emp.status === 'Active' ? 'badge-success' : 'badge-danger';
        tr.innerHTML = `
            <td>${emp.id}</td>
            <td><strong>${emp.name}</strong></td>
            <td>${emp.department}</td>
            <td>${emp.role}</td>
            <td><span class="badge ${statusClass}">${emp.status}</span></td>
            <td>
                <button class="btn btn-secondary" style="padding: 6px 12px; font-size: 12px;"><i class="fas fa-edit"></i> Edit</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Load Payroll list into table on payroll.html
function loadPayroll() {
    const tbody = document.getElementById("payrollTableBody");
    if (!tbody) return;

    tbody.innerHTML = '';
    employees.forEach(emp => {
        if(emp.status !== 'Active') return;
        const monthlyBase = emp.salary / 12;
        const deductions = monthlyBase * 0.1; // 10% tax/deductions dummy
        const netPay = monthlyBase - deductions;

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${emp.name} <br><small style="color:var(--text-light)">${emp.id}</small></td>
            <td>${emp.department}</td>
            <td>$${monthlyBase.toFixed(2)}</td>
            <td><span style="color:var(--danger)">-$${deductions.toFixed(2)}</span></td>
            <td><strong>$${netPay.toFixed(2)}</strong></td>
            <td>
                <a href="payslip.html" class="btn btn-primary" style="padding: 6px 12px; font-size: 12px;"><i class="fas fa-file-invoice-dollar"></i> Generate</a>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

// Initialize components based on page
document.addEventListener("DOMContentLoaded", () => {
    loadEmployees();
    loadPayroll();
});
