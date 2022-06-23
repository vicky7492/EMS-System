import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar" id="sidebar">
    <div className="sidebar-inner slimscroll">
      <div id="sidebar-menu" className="sidebar-menu">
        <ul>
          <li className="menu-title">
            <span>Main</span>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-dashboard" /> <span> Dashboard</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a
                  className="active"
                  href="https://smarthr.dreamguystech.com/orange/admin-dashboard.html"
                >
                  Admin Dashboard
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/employee-dashboard.html">
                  Employee Dashboard
                </a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-cube" /> <span> Apps</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/chat.html">
                  Chat
                </a>
              </li>
              <li className="submenu">
                <a href="#">
                  <span> Calls</span> <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="https://smarthr.dreamguystech.com/orange/voice-call.html">
                      Voice Call
                    </a>
                  </li>
                  <li>
                    <a href="https://smarthr.dreamguystech.com/orange/video-call.html">
                      Video Call
                    </a>
                  </li>
                  <li>
                    <a href="https://smarthr.dreamguystech.com/orange/outgoing-call.html">
                      Outgoing Call
                    </a>
                  </li>
                  <li>
                    <a href="https://smarthr.dreamguystech.com/orange/incoming-call.html">
                      Incoming Call
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/events.html">
                  Calendar
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/contacts.html">
                  Contacts
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/inbox.html">
                  Email
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/file-manager.html">
                  File Manager
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-title">
            <span>Employees</span>
          </li>
          <li className="submenu">
            <a href="#" className="noti-dot">
              <i className="la la-user" /> <span> Employees</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/employees.html">
                  All Employees
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/holidays.html">
                  Holidays
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/leaves.html">
                  Leaves (Admin){" "}
                  <span className="badge rounded-pill bg-primary float-end">
                    1
                  </span>
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/leaves-employee.html">
                  Leaves (Employee)
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/leave-settings.html">
                  Leave Settings
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/attendance.html">
                  Attendance (Admin)
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/attendance-employee.html">
                  Attendance (Employee)
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/departments.html">
                  Departments
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/designations.html">
                  Designations
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/timesheet.html">
                  Timesheet
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/shift-scheduling.html">
                  Shift &amp; Schedule
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/overtime.html">
                  Overtime
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://smarthr.dreamguystech.com/orange/clients.html">
              <i className="la la-users" />
              <span>Clients</span>
            </a>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-rocket" /> <span> Projects</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/projects.html">
                  Projects
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/tasks.html">
                  Tasks
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/task-board.html">
                  Task Board
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://smarthr.dreamguystech.com/orange/leads.html">
              <i className="la la-user-secret" /> <span>Leads</span>
            </a>
          </li>
          <li>
            <a href="https://smarthr.dreamguystech.com/orange/tickets.html">
              <i className="la la-ticket" />
              <span>Tickets</span>
            </a>
          </li>
          <li className="menu-title">
            <span>HR</span>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-files-o" /> <span> Sales </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/estimates.html">
                  Estimates
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/invoices.html">
                  Invoices
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/payments.html">
                  Payments
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/expenses.html">
                  Expenses
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/provident-fund.html">
                  Provident Fund
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/taxes.html">
                  Taxes
                </a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-files-o" /> <span> Accounting </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/categories.html">
                  Categories
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/budgets.html">
                  Budgets
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/budget-expenses.html">
                  Budget Expenses
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/budget-revenues.html">
                  Budget Revenues
                </a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-money" /> <span> Payroll </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/salary.html">
                  {" "}
                  Employee Salary{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/salary-view.html">
                  {" "}
                  Payslip{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/payroll-items.html">
                  {" "}
                  Payroll Items
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://smarthr.dreamguystech.com/orange/policies.html">
              <i className="la la-file-pdf-o" /> <span>Policies</span>
            </a>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-pie-chart" /> <span> Reports </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/expense-reports.html">
                  {" "}
                  Expense Report{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/invoice-reports.html">
                  {" "}
                  Invoice Report{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/payments-reports.html">
                  {" "}
                  Payments Report{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/project-reports.html">
                  {" "}
                  Project Report{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/task-reports.html">
                  {" "}
                  Task Report
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/user-reports.html">
                  {" "}
                  User Report
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/employee-reports.html">
                  {" "}
                  Employee Report{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/payslip-reports.html">
                  {" "}
                  Payslip Report{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/attendance-reports.html">
                  Attendance Report{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/leave-reports.html">
                  {" "}
                  Leave Report
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/daily-reports.html">
                  {" "}
                  Daily Report
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-title">
            <span>Performance</span>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-graduation-cap" /> <span> Performance </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/performance-indicator.html">
                  Performance Indicator{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/performance.html">
                  {" "}
                  Performance Review{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/performance-appraisal.html">
                  Performance Appraisal{" "}
                </a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-crosshairs" /> <span> Goals </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/goal-tracking.html">
                  {" "}
                  Goal List
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/goal-type.html">
                  {" "}
                  Goal Type{" "}
                </a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-edit" /> <span> Training </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/training.html">
                  {" "}
                  Training List{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/trainers.html">
                  {" "}
                  Trainers
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/training-type.html">
                  {" "}
                  Training Type
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://smarthr.dreamguystech.com/orange/promotion.html">
              <i className="la la-bullhorn" /> <span>Promotion</span>
            </a>
          </li>
          <li>
            <a href="https://smarthr.dreamguystech.com/orange/resignation.html">
              <i className="la la-external-link-square" />{" "}
              <span>Resignation</span>
            </a>
          </li>
          <li>
            <a href="https://smarthr.dreamguystech.com/orange/termination.html">
              <i className="la la-times-circle" /> <span>Termination</span>
            </a>
          </li>
          <li className="menu-title">
            <span>Administration</span>
          </li>
          <li>
            <a href="https://smarthr.dreamguystech.com/orange/assets.html">
              <i className="la la-object-ungroup" /> <span>Assets</span>
            </a>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-briefcase" /> <span> Jobs </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/user-dashboard.html">
                  {" "}
                  User Dasboard{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/jobs-dashboard.html">
                  {" "}
                  Jobs Dasboard{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/jobs.html">
                  {" "}
                  Manage Jobs{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/manage-resumes.html">
                  {" "}
                  Manage Resumes{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/shortlist-candidates.html">
                  Shortlist Candidates{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/interview-questions.html">
                  Interview Questions{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/offer_approvals.html">
                  {" "}
                  Offer Approvals{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/experiance-level.html">
                  {" "}
                  Experience Level{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/candidates.html">
                  {" "}
                  Candidates List
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/schedule-timing.html">
                  {" "}
                  Schedule timing{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/apptitude-result.html">
                  {" "}
                  Aptitude Results{" "}
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="https://smarthr.dreamguystech.com/orange/knowledgebase.html">
              <i className="la la-question" /> <span>Knowledgebase</span>
            </a>
          </li>
          <li>
            <a href="https://smarthr.dreamguystech.com/orange/activities.html">
              <i className="la la-bell" /> <span>Activities</span>
            </a>
          </li>
          <li>
            <a href="https://smarthr.dreamguystech.com/orange/users.html">
              <i className="la la-user-plus" /> <span>Users</span>
            </a>
          </li>
          <li>
            <a href="https://smarthr.dreamguystech.com/orange/settings.html">
              <i className="la la-cog" />
              <span>Settings</span>
            </a>
          </li>
          <li className="menu-title">
            <span>Pages</span>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-user" /> <span> Profile </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/profile.html">
                  {" "}
                  Employee Profile
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/client-profile.html">
                  {" "}
                  Client Profile{" "}
                </a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-key" /> <span> Authentication </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/index.html">
                  {" "}
                  Login{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/register.html">
                  {" "}
                  Register{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/forgot-password.html">
                  {" "}
                  Forgot Password{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/otp.html">
                  {" "}
                  OTP{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/lock-screen.html">
                  {" "}
                  Lock Screen
                </a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-exclamation-triangle" />{" "}
              <span> Error Pages </span> <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/error-404.html">
                  404 Error{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/error-500.html">
                  500 Error{" "}
                </a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-hand-o-up" /> <span> Subscriptions </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/subscriptions.html">
                  {" "}
                  Subscriptions (Admin){" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/subscriptions-company.html">
                  Subscriptions (Company){" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/subscribed-companies.html">
                  Subscribed Companies
                </a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-columns" /> <span> Pages </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/search.html">
                  {" "}
                  Search{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/faq.html">
                  {" "}
                  FAQ{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/terms.html">
                  {" "}
                  Terms{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/privacy-policy.html">
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/blank-page.html">
                  {" "}
                  Blank Page{" "}
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-title">
            <span>UI Interface</span>
          </li>
          <li>
            <a href="https://smarthr.dreamguystech.com/orange/components.html">
              <i className="la la-puzzle-piece" /> <span>Components</span>
            </a>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-object-group" /> <span> Forms </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/form-basic-inputs.html">
                  Basic Inputs{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/form-input-groups.html">
                  Input Groups{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/form-horizontal.html">
                  Horizontal Form{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/form-vertical.html">
                  {" "}
                  Vertical Form
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/form-mask.html">
                  {" "}
                  Form Mask{" "}
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/form-validation.html">
                  {" "}
                  Form Validation{" "}
                </a>
              </li>
            </ul>
          </li>
          <li className="submenu">
            <a href="#">
              <i className="la la-table" /> <span> Tables </span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/tables-basic.html">
                  Basic Tables
                </a>
              </li>
              <li>
                <a href="https://smarthr.dreamguystech.com/orange/data-tables.html">
                  Data Table{" "}
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-title">
            <span>Extras</span>
          </li>
          <li>
            <a href="#">
              <i className="la la-file-text" /> <span>Documentation</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="la la-info" /> <span>Change Log</span>{" "}
              <span className="badge badge-primary ms-auto">v3.4</span>
            </a>
          </li>
          <li className="submenu">
            <a href="javascript:void(0);">
              <i className="la la-share-alt" /> <span>Multi Level</span>{" "}
              <span className="menu-arrow" />
            </a>
            <ul style={{ display: "none" }}>
              <li className="submenu">
                <a href="javascript:void(0);">
                  {" "}
                  <span>Level 1</span> <span className="menu-arrow" />
                </a>
                <ul style={{ display: "none" }}>
                  <li>
                    <a href="javascript:void(0);">
                      <span>Level 2</span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="javascript:void(0);">
                      {" "}
                      <span> Level 2</span> <span className="menu-arrow" />
                    </a>
                    <ul style={{ display: "none" }}>
                      <li>
                        <a href="javascript:void(0);">Level 3</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Level 3</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      {" "}
                      <span>Level 2</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);">
                  {" "}
                  <span>Level 1</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  )
}

export default Sidebar