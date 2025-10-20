# COOP_PROFILING_SYSTEM

A **Cooperative Profiling System** designed to manage member information efficiently with integrated biometric authentication. This **web-based application** streamlines member registration, profiling, and verification processes for cooperatives.

---

# COOP Features

## **Side Panel Button**

Settings and Profile are not included in the list; they are accessed by clicking the footer (same location where a user logs out)

### 🧍‍♂️ **Member Panel**

- Overview
- My Shares → balance + list of share capital contributions and dividend **transactions**
- My Loans → payment CTA + list of loans → inside loans is list of payments per installment
- Notifications → list of notifs

### 💰 **Teller Panel**

- Overview
- Transactions → transactions that **they** encoded
- Member Lookup → centered search bar → member balance + loans + transactions

### 🧾 **Loan Officer Panel**

- Overview
- Loan Applications → list of loan applications (pending + approved + rejected loans)
- Active Loans → list of loans (disbursed + ongoing + overdue loans)
- Member Lookup → yeah

### ⚙️ **Admin Panel**

- Overview
- Members → list of members → inside is what staff sees in member lookup
- Accounts -> list of financial accounts of the coop
- Loans → list of loans (all statuses, but naka tabs)
- Transactions → list of transactions
- Staff → list of staff

---

### 🧭 Footer Options

- Profile (Members only)
- Settings
- Logout

[FLOW](https://www.notion.so/FLOW-28b7069c8b4980c29f92e0d6c446a0e5?pvs=21)

[FORMS](https://www.notion.so/FORMS-28b7069c8b4980fbbe70e5ded69e52d9?pvs=21)

---

## 🛠 Tech Stack
- **Frontend:** *React + Inertia* 
- **Backend:** *Laravel*
- **Database:** PostgreSQL
- **Biometric Integration:** Fingerprint scanning API
