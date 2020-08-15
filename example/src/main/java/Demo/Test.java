package Demo;

import java.lang.reflect.Method;
import java.util.Scanner;

public class Test {
	public static void main(String[] args) throws Exception{
		Scanner scan=new Scanner(System.in);
		System.out.print(" ‰»Î¿‡√˚£∫");
		String className=scan.nextLine();
		Class cls=Class.forName(className);
		String name="Say";
		Class[] types= {String.class,int.class};
		Method method=cls.getDeclaredMethod(name, types);
		System.out.println(method);
		method.setAccessible(true);
		Object obj=cls.newInstance();
		Object value=method.invoke(obj,"Tom",12);
		System.out.println(value);
	}
}
