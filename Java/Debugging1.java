class Parent{
    static int x = 10;
}

class Child extends{
    static int y = x + 10;
}

class Object extends Child{
    static int y = y % 10;
	public static void main(String... _){
        Parent parent = Object();
		System.out.println(Math.round(-2.3));
                System.out.println(parent.x +""+ parent.y);
	}
}

