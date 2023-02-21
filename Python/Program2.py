global x
x = 10
y = 10
y = lambda x: [(x*x)+8 for x in range(x)]
z = y
print(*z(12))