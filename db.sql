select a1.firstNam, a1.lastName, a2.city a2.state
from Person a1
LEFT JOIN Adress a2 on where a2.personId = a1.personId