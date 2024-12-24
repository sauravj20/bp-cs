// mock data of service stations

const bpServiceStations = () => [
  {
    "address": "45 Station Road",
    "city": "Manchester",
    "zip": "M1 1AE",
    "open_hours": [["05:30", "21:00"]] as [string, string][],
    "accepts_cards": false,
    "coordinates": { lat: 55.401551, long: 1.454279 }
  },
  {
    "address": "10 Market Square",
    "city": "Edinburgh",
    "zip": "EH1 1YZ",
    "open_hours": [["06:00", "22:00"], ["08:00", "20:00"]] as [string, string][],
    "convenience_store": {
      "name": "FoodExpress",
      "food_available": false
    },
    "accepts_cards": true,
    "coordinates": {"lat": 55.405527, "long": 1.40952}
  },
  {
    "address": "78 Church Lane",
    "city": "Bristol",
    "zip": "BS1 5TR",
    "open_hours": [["00:00", "23:59"]] as [string, string][],
    "accepts_cards": true,
    "coordinates": {"lat": 55.361421, "long": 1.382112}
  },
  {
    "address": "32 Main Street",
    "city": "Liverpool",
    "zip": "L1 8JQ",
    "open_hours": [["06:00", "20:00"], ["07:00", "22:00"]] as [string, string][],
    "convenience_store": {
      "name": "Grab&Go",
      "food_available": true
    },
    "accepts_cards": false,
    "coordinates": {"lat": 55.340153, "long": 1.391845}
  },
  {
    "address": "22 Baker Street",
    "city": "Glasgow",
    "zip": "G1 2JL",
    "open_hours": [["05:00", "23:00"]] as [string, string][],
    "accepts_cards": true,
    "coordinates": {"lat": 55.392834, "long": 1.352197}
  },
  {
    "address": "90 King Street",
    "city": "Birmingham",
    "zip": "B2 4QA",
    "open_hours": [["06:30", "22:30"]] as [string, string][],
    "convenience_store": {
      "name": "CornerShop",
      "food_available": true
    },
    "accepts_cards": false,
    "coordinates": {"lat": 55.385227, "long": 1.396914}
  },
  {
    "address": "18 Elm Road",
    "city": "Oxford",
    "zip": "OX1 3AB",
    "open_hours": [["07:00", "21:00"]] as [string, string][],
    "accepts_cards": true,
    "coordinates": {"lat": 55.397419, "long": 1.332794}
  },
  {
    "address": "15 York Street",
    "city": "Leeds",
    "zip": "LS1 2HG",
    "open_hours": [["06:00", "22:00"], ["07:00", "23:00"]] as [string, string][],
    "accepts_cards": true,
    "coordinates": {"lat": 55.384815, "long": 1.412223}
  },
  {
    "address": "40 Bridge Road",
    "city": "Sheffield",
    "zip": "S1 1XX",
    "open_hours": [["05:30", "20:30"]] as [string, string][],
    "accepts_cards": false,
    "coordinates": {"lat": 55.395142, "long": 1.371924}
  },
  {
    "address": "12 West Avenue",
    "city": "Cardiff",
    "zip": "CF1 2RR",
    "open_hours": [["06:00", "21:00"]] as [string, string][],
    "accepts_cards": true,
    "coordinates": {"lat": 55.382619, "long": 1.328179}
  },
  {
    "address": "88 Castle Street",
    "city": "York",
    "zip": "YO1 7LD",
    "open_hours": [["07:00", "20:00"]] as [string, string][],
    "convenience_store": {
      "name": "DailyNeeds",
      "food_available": false
    },
    "accepts_cards": true,
    "coordinates": { lat: 55.376171, long: 1.392619 }
  },
  {
    "address": "3 Station View",
    "city": "Newcastle",
    "zip": "NE1 1SW",
    "open_hours": [["06:00", "22:00"], ["08:00", "20:00"]] as [string, string][],
    "accepts_cards": true,
    "coordinates": {"lat": 55.364191, "long": 1.364251}
  },
  {
    "address": "7 Forest Road",
    "city": "Nottingham",
    "zip": "NG1 4EQ",
    "open_hours": [["00:00", "23:59"]] as [string, string][],
    "accepts_cards": false,
    "coordinates": { lat: 55.347508, long: 1.295864 }
  },
  {
    "address": "27 Hilltop Close",
    "city": "Plymouth",
    "zip": "PL1 1BX",
    "open_hours": [["07:00", "22:00"]] as [string, string][],
    "convenience_store": {
      "name": "SuperStop",
      "food_available": true
    },
    "accepts_cards": true,
    "coordinates": {"lat": 55.382107, "long": 1.402729}
  }
]


export default bpServiceStations;
