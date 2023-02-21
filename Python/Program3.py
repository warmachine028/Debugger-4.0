
x = 10
lst = [j + 1 if j in range(10) else i for i in range(x) if i % 2 == 0 for j in range(i) if j != i - 1]
print(lst)