
// These imports are necessary for working with lists.
// Some classes need to be imported (others like String are implicitly imported).
// Try removing these import lines; IDEA will help you and popup an import suggestion.
// When you see it, press Alt+ENTER to import the class.
// Note that for List there are two options; so choose the one in java.util.
import java.util.Arrays;
import java.util.List;
import java.util.ArrayList;

/**
 * Example of using lists in Java.
 * In Java you will use lists most of the time because you can add elements to them.
 * You won't use arrays very frequently, but sometimes you will need them.
 */
public class ListsSample {

    public static void main(String[] args) {

        // something similar to creating an array:
        // String[] array = new String[10]; // with arrays you specify the length
        List<String> names = new ArrayList<>(); // lists are empty at the beginning

        // Add items to the list (with arrays you can't do this)
        names.add("Montse");
        names.add("Cris");
        names.add("Txell");

        // Check list size; similar to array.length
        System.out.println("Size: " + names.size());

        // Get an element at some index; similar to: array[0]
        System.out.println("First name: " + names.get(0));

        // You can print the whole list at once
        System.out.println("All names: " + names);

        // To do the same with arrays you need Arrays.toString()
        String[] array = {"one", "two"};
        System.out.println("Content of array:" + Arrays.toString(array));


        // Loops are similar to arrays
        System.out.println("List contents using normal 'for':");
        for (int i = 0; i < names.size(); i++) {
            System.out.println(names.get(i));
        }

        // You can use enhanced loops too
        System.out.println("List contents using enhanced 'for':");
        for (String name : names) {
            System.out.println(name);

        }


        // Lists only work with classes.
        // Primitive types like int, double, boolean are not classes.
        // But you have equivalent classes: Integer, Double, Boolean

        // So for creating a list of integers:
        List<Integer> prices = new ArrayList<>();
        prices.add(100);
        prices.add(50);
        int secondPrice = prices.get(1);
        System.out.println("Second price: " + secondPrice);
    }
}
