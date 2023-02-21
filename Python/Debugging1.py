x = "global"

def outer():
    x = "local"
    def inner(x):
        x = "inner"
        return x
    return inner(x)
print(outer())
