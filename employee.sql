Select emp.ID, emp.NAme, d1.Division, emp.ManagerID, emp.Salary
FROM Employee emp inner join Division d1
ORDER BY emp.Salary DESC LIMIT 2, 1;