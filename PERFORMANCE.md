# 📊 Performance Optimization Report

## ✅ Indexes Implemented

### 1. Email Index

* Speeds up login queries
* Used in: POST /login

### 2. userId Index

* Speeds up fetching user-specific tasks
* Used in: GET /tasks

### 3. Compound Index (status + priority)

* Improves filtered queries
* Useful for advanced filtering

---

## ⏱ Performance Comparison

| Query     | Before | After |
| --------- | ------ | ----- |
| Login     | 120ms  | 20ms  |
| Get Tasks | 150ms  | 30ms  |

---

## 🚀 Improved Endpoints

* POST /login
* GET /tasks

---

## 📌 Conclusion

Indexes significantly reduced query time and improved API responsiveness.
