const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];


// map() method is used to create a new array from an existing array and modifying each element of the array
// here I am creating a new array of objects and checking whether each user has enough points to be a premium member
// if the user has more than 100 points, they are a premium member, otherwise they are a standard member
// the returned value is stored in the userMembership variable
const userMembership = users.map(function (user) {
	const fullName = user.firstName + " " + user.lastName;
	let membershipStatus = "Standard";
	if (user.points > 100) {
		membershipStatus = "Premium";
	}
    return {
        fullName: fullName,
        membershipStatus: membershipStatus
    };
});

console.log(userMembership);

