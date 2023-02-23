class Parent{
    static int x = 10;
}

class Child extends{
    static int y = x + 10;
}

class Class extends Child{
    static int y = y % 10;
	public static void main(String... _){
		System.out.println(Math.round(-2.3));
                System.out.println(x + y);
	}
}

