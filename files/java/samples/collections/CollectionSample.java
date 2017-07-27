package collections;

import java.util.*;

/**
 * Example using the most common collections.
 */
public class CollectionSample {

	public static void main(String[] args) {

		// Most common collections (instead of '?' you put the type you desire)
		List<?> list0; // A list of values (one after another)
		Set<?> set0;   // A set of objects (like a bag, usually without order, no duplicates)
		Map<?,?> map0; // Pairs of key-value (e.g. like a dictionary: word-definition)


		// For primitives (int, long, double, boolean) you must use
		// the wrapper classes (Integer, Long, Double, Boolean)


		// You can choose between different implementations.
		// The first one of each is the most common.

		List<String> list1 = new ArrayList<>();   // faster to get()
		List<String> list2 = new LinkedList<>();  // sometimes faster to remove()

		Set<String> set1 = new HashSet<>();       // no duplicates, order is not guaranteed
		Set<String> set2 = new TreeSet<>();       // values are sorted (i.e. alphabetically)
		Set<String> set3 = new LinkedHashSet<>(); // values keep insertion order

		Map<String, Integer> map1 = new HashMap<>();        // links keys to values, order is not guaranteed
		Map<String, Integer> map2 = new TreeMap<>();        // keys are sorted (i.e. alphabetically)
		Map<String, Integer> map3 = new LinkedHashMap<>();  // keys keep insertion order


		// Sample usage of collections. Using the most common implementation.

		System.out.println("-- list --");

		List<String> list = new ArrayList<>();
		list.add("one");
		list.add("two");
		list.add("one"); // a list admits duplicates
		list.add("three");
		list.add("fourth");
		list.add("fifth");
		list.remove("three");
		list.remove(3); // removes "fourth"
		System.out.println("list:" + list);
		System.out.println("size: " + list.size());
		System.out.println("last element: " + list.get( list.size() - 1 ));
		System.out.println("contains 'two'?: " + list.contains("two"));
		System.out.println("contains 'four'?: " + list.contains("four"));


		System.out.println("-- set --");

		Set<String> set = new HashSet<>(); // Try LinkedHashSet and TreeSet and check output
		set.add("first");
		set.add("second");
		set.add("first"); // a set ignores duplicates
		set.add("third");
		set.add("fourth");
		set.add("fifth");
		set.remove("third");
		// set.remove(3); sets can't access elements by index
		System.out.println("set:" + set); // elements may appear disordered (try LinkedHashSet and TreeSet)
		System.out.println("size: " + set.size());
		System.out.println("sets can't access elements randomly"); // we can't do set.get(x)
		System.out.println("contains 'two'?: " + set.contains("second"));
		System.out.println("contains 'four'?: " + set.contains("fifth"));


		System.out.println("-- map --");

		Map<String, Integer> map = new HashMap<>(); // Try TreeMap and LinkedHashMap and check output
		map.put("Javi", 15);
		map.put("Ferran", 10);
		map.put("Ricardo", 5);
		System.out.println("Map before changes: " + map); // elements may appear disordered (try TreeMap and LinkedHashMap)

		int ricMoney = map.get("Ricardo");
		int javiMoney = map.get("Javi");

		javiMoney -= 5;
		ricMoney += 5;

		map.put("Javi", javiMoney);
		map.put("Ricardo", ricMoney);

		System.out.println("Map after changes: " + map);
	}
}
