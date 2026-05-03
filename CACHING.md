# 🧠 Caching Strategy

## 🎯 Why Caching?

GET /tasks is the most frequently used endpoint.

---

## ⚙️ Implementation

* Data stored in memory
* Cache valid for 60 seconds

---

## 🔄 Cache Invalidation

Cache is cleared when:

* Task is created
* Task is updated
* Task is deleted

---

## ⚠️ Limitations

* Cache lost on server restart
* Not scalable for multiple servers
* Not suitable for large datasets

---

## 📌 Conclusion

Caching improves response time significantly for repeated requests.
