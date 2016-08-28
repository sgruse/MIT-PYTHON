var ParkingLot = function(numFloors, regularSpaces, compactSpaces, handicappedSpaces) {
	if(! regularSpaces || ! numFloors || ! compactSpaces || ! handicappedSpaces) {
		alert("You are here for the wrong reasons!");
	}
	this.numfloors = numFloors;
	this.regularSpacesPerFloor = regularSpaces;
	this.compactSpacesPerFloor = compactSpaces;
	this.handicappedSpacesPerFloor = handicappedSpaces
	this.totalSpaces = regularSpaces +  compactSpaces +  handicappedSpaces ;
	for( var i=0; i<this.numfloors; i++) {
		this.floors[i]['occupied'] = 0;
        this.floors[i]['regularSpacesOccupied']  = 0;
		this.floors[i]['compactSpacesOccupied']  = 0;
		this.floors[i]['handicappedSpacesOccupied']  = 0;
	}
}

ParkingLot.prototype = {
    park: function(floor, type) {
		this.floors[floor][type+'SpacesOccupied'] = this.floors[floor][type+'SpacesOccupied'] + 1;
		this.floors[floor]['occupied'] = this.floors[floor]['occupied'] +1;
	},
	unpark: function(floor, type) {
		this.floors[floor][type+'SpacesOccupied'] = this.floors[floor][type+'SpacesOccupied'] - 1;
		this.floors[floor]['occupied'] = this.floors[floor]['occupied'] - 1;
	},
	getParkingSign: function() {
		return {
		    totalSpaces: this.totalSpaces,
	    	floors: [
	        	{
	             	regular : this.floor[0]["regularSpacesOccupied"],
	             	compact : this.floor[0]["compactSpacesOccupied"],
	             	handicapped : this.floor[0]["handicappedSpacesOccupied"]
	        	},
	        	{
	             	regular : this.floor[1]["regularSpacesOccupied"],
	             	compact : this.floor[1]["compactSpacesOccupied"],
	             	handicapped : this.floor[1]["handicappedSpacesOccupied"]
	            },
	            {
	             	regular : this.floor[2]["regularSpacesOccupied"],
	             	compact : this.floor[2]["compactSpacesOccupied"],
	             	handicapped : this.floor[2]["handicappedSpacesOccupied"]
	            }
	        ]
	    }
	}
}

var x = new ParkingLot(5, 100, 100, 100);

console.log(x);
