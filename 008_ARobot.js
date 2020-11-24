// Project: A Robot

	/*	Objectif : 	Our project in this chapter is to build an automaton, a little program that
				performs a task in a virtual world. Our automaton will be a mail-delivery robot
				picking up and dropping off parcels.		*/



	// Meadowfield 

		/*	The village of Meadowfield isn’t very big. It consists of 11 places with 14 roads
			between them. It can be described with this array of roads: 	*/


			const roads = [
				"Alice's House-Bob's House",	"Alice's House-Cabin",							
				"Alice's House-Post Office",	"Bob's House-Town Hall",
				"Daria's House-Ernie's House",	"Daria's House-Town Hall",
				"Ernie's House-Grete's House",	"Grete's House-Farm",
				"Grete's House-Shop",		"Marketplace-Farm",
				"Marketplace-Post Office",	"Marketplace-Shop",
				"Marketplace-Town Hall",	"Shop-Town Hall"
			];		


		/*	The network of roads in the village forms a graph. A graph is a collection of
			points (places in the village) with lines between them (roads). This graph will
			be the world that our robot moves through. 		

			The array of strings isn’t very easy to work with. What we’re interested in
			is the destinations that we can reach from a given place. Let’s convert the list
			of roads to a data structure that, for each place, tells us what can be reached
			from there. 		*/



			function buildGraph(edges) {
			// Creates a function named buildGraph which takes an array of Strings.
				let graph = Object.create(null);
				// Creates an object that does not inherit anything; i.e: creates an empty object whose prototype is null
				// meaning the variable graph is an object with an empty prototype. 
				function addEdge(from, to) {
				// The fuction addEdge takes two String as it's arguments.
					if (graph[from] == null) {
					// if the parent object graph doesn't contain the string 'from'
						graph[from] = [to];
						// Object/dict graph take 'from' as object/key and assigns it to array/value to the string 'to' which 
						// is an element in the array.
					} else {
					// else if 'from' is already inside the obj graph
						graph[from].push(to);
						// the string argument 'to' gets pushed into existing array. 
					}
				}
				for (let [from, to] of edges.map(r => r.split("-"))) {
				// The map function will iterate through edges array and when it encounters "-" symbol it will split the string
				// from that point on and place the strings which were on it's(symbol's) left and right in a new array seperated by a comma inside edges array.
				// Visualisation :
				// edges ["Alice's House-Bob's House"] 
				// new array [["Alice's House", Bob's House"]]
				// This new array is what map will return at the end of the loop, and 'let [from, to]' iterates on this new array.
					addEdge(from, to);
					addEdge(to, from);
				}
				return graph;
			}

			const roadGraph = buildGraph(roads);

			console.log(roadGraph);
			// Output of the console.log :

			/*	{
					Alice's House:	["Bob's House", "Cabin", "Post Office"]
					Bob's House:	["Alice's House", "Town Hall"]
					Cabin:		["Alice's House"]
					Post Office:	["Alice's House", "Marketplace"]
					Town Hall:	[
								0:	"Bob's House"
								1:	"Daria's House"
								2:	"Marketplace"
								3:	"Shop"
							]
					Daria's House:	["Ernie's House", "Town Hall"]
					Ernie's House:	["Daria's House", "Grete's House"]
					Grete's House:	["Ernie's House", "Farm", "Shop"]
					Farm:		["Grete's House", "Marketplace"]
					Shop:		[
								0:	"Grete's House"
								1:	"Marketplace"
								2:	"Town Hall"
							]
					Marketplace:	[
								0:	"Farm"
								1:	"Post Office"
								2:	"Shop"
								3:	"Town Hall"
							]
				}
			*/


	// The task

		/*	Our robot will be moving around the village. There are parcels in various
			places, each addressed to some other place. The robot picks up parcels when
			it comes to them and delivers them when it arrives at their destinations.
			The automaton must decide, at each point, where to go next. It has finished
			its task when all parcels have been delivered.		

			The move method is where the action happens. It first checks whether there
			is a road going from the current place to the destination, and if not, it returns
			the old state since this is not a valid move.		*/


			class VillageState {
				constructor(place, parcels) {
					this.place = place;
					this.parcels = parcels;
				}
				move(destination) {
					if (!roadGraph[this.place].includes(destination)) {
					// if the roadGraph at my object's place includes the destination
						return this;
						// return myself
					} else {
						let parcels = this.parcels.map(p => {
						// go over all the parcels
						// make a new list of parcels, where 
							if (p.place != this.place) return p;
							// if my parcel doesn't match the parcel's place, leave that parcel unchanged.
							return {place: destination, address: p.address};
							// if it doesn't match, track that parcel at my location instead 
						}).filter(p => p.place != p.address);
						// Then remove(filter) from the list parcels where the parcel and address match

						return new VillageState(destination, parcels);
					}
				}
			}

			/*	Parcel objects aren’t changed when they are moved but re-created. The move
				method gives us a new village state but leaves the old one entirely intact.		*/

			let first = new VillageState(
				"Post Office",
				[{place: "Post Office", address: "Alice's House"}]
			);

			let next = first.move("Alice's House");

			console.log(next.place);
			// → Alice's House
			console.log(next.parcels);
			// → []
			console.log(first.place);
			// → Post Office


	// Persistent data

			/*	The move causes the parcel to be delivered, and this is reflected in the next
				state. But the initial state still describes the situation where the robot is at
				the post office and the parcel is undelivered.		*/

			let object = Object.freeze({value: 5});
			// freeze methode changes an object so writing to it's properties is ignored.
			object.value = 10;
			console.log(object.value);
			// → 5

